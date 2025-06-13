package backend.dao;

import backend.db.DBConnection;
import backend.models.Donor;
import backend.utils.EmailUtil;
import java.sql.*;
import java.util.*;

public class DonorDAO {

    public static boolean insertDonor(Donor donor) {
        String query = "INSERT INTO donors (fullName, age, gender, bloodGroup, state, area, contactNumber, altContactNumber, email) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {

            stmt.setString(1, donor.getFullName());
            stmt.setInt(2, donor.getAge());
            stmt.setString(3, donor.getGender());
            stmt.setString(4, donor.getBloodGroup());
            stmt.setString(5, donor.getState());
            stmt.setString(6, donor.getArea());
            stmt.setString(7, donor.getContactNumber());
            stmt.setString(8, donor.getAltContactNumber());
            stmt.setString(9, donor.getEmail());

            int rowsInserted = stmt.executeUpdate();
            if (rowsInserted > 0) {
                sendLatestCompatibleRequestToDonor(donor);
                return true;
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    private static void sendLatestCompatibleRequestToDonor(Donor donor) {
        List<String> compatibleGroups = getCompatibleRecipientGroups(donor.getBloodGroup());
        if (compatibleGroups.isEmpty()) {
            System.out.println("❌ No compatible groups found for donor blood group: " + donor.getBloodGroup());
            return;
        }

        String placeholders = String.join(",", Collections.nCopies(compatibleGroups.size(), "?"));

        String query = "SELECT * FROM requests WHERE bloodGroup IN (" + placeholders + ") AND state = ? AND area = ? ORDER BY id DESC LIMIT 1";

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {

            int index = 1;
            for (String bg : compatibleGroups) {
                stmt.setString(index++, bg);
            }
            stmt.setString(index++, donor.getState());
            stmt.setString(index, donor.getArea());

            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                String subject = "Emergency Blood Requirement for a patient of blood group: " + rs.getString("bloodGroup");
                String body = "Dear " + donor.getFullName() + ",\n\n"
                        + "A nearby patient needs a compatible blood group that matches yours (" + donor.getBloodGroup() + ").\n\n"
                        + "📌 Patient Details:\n"
                        + "Name: " + rs.getString("patientName") + "\n"
                        + "Contact: " + rs.getString("contactNumber") + " / " + rs.getString("altContact") + "\n"
                        + "Hospital: " + rs.getString("hospitalName") + ", " + rs.getString("hospitalAddress") + ", " + rs.getString("area") + ", " + rs.getString("state") + "\n"
                        + "Units Needed: " + rs.getInt("units") + "\n"
                        + "Required By: " + rs.getString("lastDate") + " at " + rs.getString("timeNeeded") + "\n"
                        + "Urgency: " + rs.getString("urgency") + "\n\n"
                        + "Please consider responding if you're available. Your help could save a life ❤️\n\n"
                        + "Thank you,\nBloodBrige";

                EmailUtil.sendEmail(donor.getEmail(), subject, body);
            }

        } catch (SQLException e) {
            System.out.println("❌ Error fetching matching request:");
            e.printStackTrace();
        }
    }

    private static List<String> getCompatibleRecipientGroups(String donorBloodGroup) {
        Map<String, List<String>> compatibilityMap = new HashMap<>();

        compatibilityMap.put("O-", Arrays.asList("O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"));
        compatibilityMap.put("O+", Arrays.asList("O+", "A+", "B+", "AB+"));
        compatibilityMap.put("A-", Arrays.asList("A-", "A+", "AB-", "AB+"));
        compatibilityMap.put("A+", Arrays.asList("A+", "AB+"));
        compatibilityMap.put("B-", Arrays.asList("B-", "B+", "AB-", "AB+"));
        compatibilityMap.put("B+", Arrays.asList("B+", "AB+"));
        compatibilityMap.put("AB-", Arrays.asList("AB-", "AB+"));
        compatibilityMap.put("AB+", Arrays.asList("AB+")); // universal recipient

        return compatibilityMap.getOrDefault(donorBloodGroup, new ArrayList<>());
    }
}
