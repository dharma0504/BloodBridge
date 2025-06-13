package backend.dao;

import backend.db.DBConnection;
import backend.models.BloodRequest;
import backend.utils.EmailUtil;
import java.sql.*;
import java.util.*;

public class BloodRequestDAO {

    public static boolean insertRequest(BloodRequest request) {
        String query = "INSERT INTO requests (fullName, contactNumber, altContact, email, patientName, age, bloodGroup, gender, units, hospitalName, hospitalAddress, state, area, pincode, lastDate, timeNeeded, urgency) " +
                       "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {

            stmt.setString(1, request.getFullName());
            stmt.setString(2, request.getContactNumber());
            stmt.setString(3, request.getAltContact());
            stmt.setString(4, request.getEmail());
            stmt.setString(5, request.getPatientName());
            stmt.setInt(6, request.getAge());
            stmt.setString(7, request.getBloodGroup());
            stmt.setString(8, request.getGender());
            stmt.setInt(9, request.getUnits());
            stmt.setString(10, request.getHospitalName());
            stmt.setString(11, request.getHospitalAddress());
            stmt.setString(12, request.getState());
            stmt.setString(13, request.getArea());
            stmt.setString(14, request.getPincode());
            stmt.setString(15, request.getLastDate());
            stmt.setString(16, request.getTimeNeeded());
            stmt.setString(17, request.getUrgency());

            int rowsInserted = stmt.executeUpdate();
            if (rowsInserted > 0) {
                notifyMatchingDonorsByEmail(request);
                sendMatchingDonorsToRequester(request);
                return true;
            } else {
                return false;
            }

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    private static void notifyMatchingDonorsByEmail(BloodRequest request) {
        Map<String, List<String>> bloodCompatibility = new HashMap<>();
        bloodCompatibility.put("A+", Arrays.asList("A+", "A-", "O+", "O-"));
        bloodCompatibility.put("A-", Arrays.asList("A-", "O-"));
        bloodCompatibility.put("B+", Arrays.asList("B+", "B-", "O+", "O-"));
        bloodCompatibility.put("B-", Arrays.asList("B-", "O-"));
        bloodCompatibility.put("AB+", Arrays.asList("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"));
        bloodCompatibility.put("AB-", Arrays.asList("A-", "B-", "AB-", "O-"));
        bloodCompatibility.put("O+", Arrays.asList("O+", "O-"));
        bloodCompatibility.put("O-", Arrays.asList("O-"));

        List<String> compatibleGroups = bloodCompatibility.getOrDefault(request.getBloodGroup(), new ArrayList<>());
        if (compatibleGroups.isEmpty()) {
            System.out.println("❌ No compatible blood types found for: " + request.getBloodGroup());
            return;
        }

        String placeholders = String.join(",", Collections.nCopies(compatibleGroups.size(), "?"));
        String query = "SELECT email FROM donors WHERE bloodGroup IN (" + placeholders + ") AND state = ? AND area = ?";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {

            for (int i = 0; i < compatibleGroups.size(); i++) {
                stmt.setString(i + 1, compatibleGroups.get(i));
            }

            stmt.setString(compatibleGroups.size() + 1, request.getState());
            stmt.setString(compatibleGroups.size() + 2, request.getArea());

            ResultSet rs = stmt.executeQuery();

            List<String> emailList = new ArrayList<>();
            while (rs.next()) {
                emailList.add(rs.getString("email"));
            }

            if (!emailList.isEmpty()) {
                String subject = "Emergency Blood Requirement for a patient near you : " + request.getBloodGroup();
                String body = "Dear Donor,\n\n" +
                        "A patient is in urgent need of blood group " + request.getBloodGroup() + ".\n\n" +
                        "Patient Name: " + request.getPatientName() + "\n" +
                        "Hospital: " + request.getHospitalName() + ", " + request.getHospitalAddress() + "\n" +
                        "Required Units: " + request.getUnits() + "\n" +
                        "Urgency: " + request.getUrgency() + " (By " + request.getLastDate() + ")\n\n" +
                        "Contact Person: " + request.getFullName() + "\n" +
                        "Phone: " + request.getContactNumber() + " / " + request.getAltContact() + "\n" +
                        "Email: " + request.getEmail() + "\n\n" +
                        "Please consider donating and saving a life!\n\n" +
                        "Regards,\nBloodBridge";

                for (String email : emailList) {
                    EmailUtil.sendEmail(email, subject, body);
                }
            }

        } catch (SQLException e) {
            System.out.println("❌ Error while fetching donor emails:");
            e.printStackTrace();
        }
    }

    private static void sendMatchingDonorsToRequester(BloodRequest request) {
        Map<String, List<String>> bloodCompatibility = new HashMap<>();
        bloodCompatibility.put("A+", Arrays.asList("A+", "A-", "O+", "O-"));
        bloodCompatibility.put("A-", Arrays.asList("A-", "O-"));
        bloodCompatibility.put("B+", Arrays.asList("B+", "B-", "O+", "O-"));
        bloodCompatibility.put("B-", Arrays.asList("B-", "O-"));
        bloodCompatibility.put("AB+", Arrays.asList("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"));
        bloodCompatibility.put("AB-", Arrays.asList("A-", "B-", "AB-", "O-"));
        bloodCompatibility.put("O+", Arrays.asList("O+", "O-"));
        bloodCompatibility.put("O-", Arrays.asList("O-"));

        List<String> compatibleGroups = bloodCompatibility.getOrDefault(request.getBloodGroup(), new ArrayList<>());
        if (compatibleGroups.isEmpty()) return;

        String placeholders = String.join(",", Collections.nCopies(compatibleGroups.size(), "?"));
        String query = "SELECT fullName, contactNumber, altContactNumber FROM donors WHERE bloodGroup IN (" + placeholders + ") AND state = ? AND area = ?";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {

            int index = 1;
            for (String bg : compatibleGroups) {
                stmt.setString(index++, bg);
            }
            stmt.setString(index++, request.getState());
            stmt.setString(index, request.getArea());

            ResultSet rs = stmt.executeQuery();
            StringBuilder donorList = new StringBuilder();
            int count = 0;

            while (rs.next()) {
                count++;
                donorList.append(count).append(". ")
                        .append(rs.getString("fullName")).append(" - ")
                        .append(rs.getString("contactNumber")).append(" / ")
                        .append(rs.getString("altContactNumber")).append("\n");
            }

            if (count == 0) {
                donorList.append("No matching donors found at this moment.");
            }

            String subject = "You are a match for a patient of blood group (" + request.getBloodGroup() + ")";
            String body = "Dear " + request.getFullName() + ",\n\n" +
                    "Thank you for your blood request. Below are the donors matching your blood group and location:\n\n" +
                    donorList.toString() +
                    "\nPlease contact them urgently.\n\nWishing the patient a speedy recovery!\n\n" +
                    "Regards,\nBloodBridge ";

            EmailUtil.sendEmail(request.getEmail(), subject, body);

        } catch (SQLException e) {
            System.out.println("❌ Error while sending donor list to requester:");
            e.printStackTrace();
        }
    }
}
