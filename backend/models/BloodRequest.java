package backend.models;

public class BloodRequest {
    private String fullName;
    private String contactNumber;
    private String altContact;
    private String email;
    private String patientName;
    private int age;
    private String bloodGroup;
    private String gender;
    private int units;
    private String hospitalName;
    private String hospitalAddress;
    private String state;
    private String area;
    private String pincode;
    private String lastDate;
    private String timeNeeded;
    private String urgency;

    // Getters and Setters

    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getAltContact() {
        return altContact;
    }
    public void setAltContact(String altContact) {
        this.altContact = altContact;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPatientName() {
        return patientName;
    }
    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }
    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getUnits() {
        return units;
    }
    public void setUnits(int units) {
        this.units = units;
    }

    public String getHospitalName() {
        return hospitalName;
    }
    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    public String getHospitalAddress() {
        return hospitalAddress;
    }
    public void setHospitalAddress(String hospitalAddress) {
        this.hospitalAddress = hospitalAddress;
    }

    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }

    public String getArea() {
        return area;
    }
    public void setArea(String area) {
        this.area = area;
    }

    public String getPincode() {
        return pincode;
    }
    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getLastDate() {
        return lastDate;
    }
    public void setLastDate(String lastDate) {
        this.lastDate = lastDate;
    }

    public String getTimeNeeded() {
        return timeNeeded;
    }
    public void setTimeNeeded(String timeNeeded) {
        this.timeNeeded = timeNeeded;
    }

    public String getUrgency() {
        return urgency;
    }
    public void setUrgency(String urgency) {
        this.urgency = urgency;
    }
}
