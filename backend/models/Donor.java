package backend.models;

public class Donor {
    private String fullName;
    private int age;
    private String gender;
    private String bloodGroup;
    private String state;
    private String area;
    private String contactNumber;
    private String altContactNumber;
    private String email;

    public Donor(String fullName, int age, String gender, String bloodGroup, String state, String area, String contactNumber, String altContactNumber, String email) {
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
        this.bloodGroup = bloodGroup;
        this.state = state;
        this.area = area;
        this.contactNumber = contactNumber;
        this.altContactNumber = altContactNumber;
        this.email = email;
    }

    // Getters
    public String getFullName() {
        return fullName;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public String getState() {
        return state;
    }

    public String getArea() {
        return area;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public String getAltContactNumber() {
        return altContactNumber;
    }

    public String getEmail() {
        return email;
    }
}
