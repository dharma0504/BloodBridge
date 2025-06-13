import React, { useState } from "react";
import Navbar from "./Navbar";

const RegisterAsDonor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    state: "",
    area: "",
    contactNumber: "",
    altContactNumber: "",
    email: "",
  });

  const [selectedAreas, setSelectedAreas] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const indianStates = ["Andhra Pradesh", "Telangana", "Maharashtra", "Tamil Nadu", "Karnataka"];

  const stateAreas = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "Guntur", "Kadapa"],
    Telangana: ["Adilabad", "Hyderabad", "Karimnagar", "Warangal"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Tamil Nadu": ["Chennai", "Madurai", "Coimbatore", "Salem"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangalore", "Hubli"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "state") {
      setSelectedAreas(stateAreas[value] || []);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/register-donor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error("Failed to submit form:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Success:", data);

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        window.location.reload();
      }, 2500);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#FDF0EE", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#B11E28",
            fontFamily: "'Cookie', cursive",
            fontSize: "48px",
            marginBottom: "30px",
          }}
        >
          "Be a hero in someone’s story — donate blood, save lives."
        </h2>

        {submitted && (
          <div style={{ color: "green", textAlign: "center", fontWeight: "bold" }}>
            ✅ Donor registered successfully!
          </div>
        )}

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              style={styles.input}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              style={styles.input}
              onChange={handleChange}
              required
            />

            <select name="gender" style={styles.input} onChange={handleChange} required defaultValue="">
              <option value="" disabled>
                Sex
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select name="bloodGroup" style={styles.input} onChange={handleChange} required defaultValue="">
              <option value="" disabled>
                Blood Group
              </option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>

            <select
              name="state"
              style={styles.input}
              onChange={handleChange}
              required
              value={formData.state}
            >
              <option value="" disabled>
                Select State
              </option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <select name="area" style={styles.input} onChange={handleChange} required defaultValue="">
              <option value="" disabled>
                Select Area
              </option>
              {selectedAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>

            <input
              type="email"
              name="email"
              placeholder="Email"
              style={styles.input}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              style={styles.input}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="altContactNumber"
              placeholder="Alternate Contact Number (optional)"
              style={styles.input}
              onChange={handleChange}
            />

            <button type="submit" style={styles.button}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
  },
  button: {
    padding: "12px",
    backgroundColor: "#B11E28",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default RegisterAsDonor;
