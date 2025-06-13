import React, { useState } from "react";
import Navbar from "./Navbar";
import { indianStates, stateAreas } from "./stateData";

function RequestPage() {
  const [step, setStep] = useState(1);
  const [selectedStateAreas, setSelectedStateAreas] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    altContact: "",
    email: "",
    patientName: "",
    age: "",
    bloodGroup: "",
    gender: "",
    units: "",
    hospitalName: "",
    hospitalAddress: "",
    state: "",
    area: "",
    pincode: "",
    lastDate: "",
    timeNeeded: "",
    urgency: "",
  });

  const [confirmDetails, setConfirmDetails] = useState(false);
  const [agreeContact, setAgreeContact] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (e) => {
    const selected = e.target.value;
    setFormData({ ...formData, state: selected, area: "" });
    setSelectedStateAreas(stateAreas[selected] || []);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async () => {
    if (!confirmDetails || !agreeContact) {
      console.error("Check both confirmation checkboxes.");
      return;
    }

    const dataToSend = {
      ...formData,
      confirmDetails,
      agreeContact,
    };

    try {
      const response = await fetch("http://localhost:8080/submit-blood-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        console.log("✅ Blood request submitted successfully.");

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: "",
            contactNumber: "",
            altContact: "",
            email: "",
            patientName: "",
            age: "",
            bloodGroup: "",
            gender: "",
            units: "",
            hospitalName: "",
            hospitalAddress: "",
            state: "",
            area: "",
            pincode: "",
            lastDate: "",
            timeNeeded: "",
            urgency: "",
          });
          setConfirmDetails(false);
          setAgreeContact(false);
          setStep(1);
        }, 2500);
      } else {
        console.error("❌ Failed to submit blood request.");
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
    }
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <Navbar />
        <div style={styles.formBox}>
          <h2 style={{ color: "green" }}>✔️ Request Submitted Successfully!</h2>
          <p style={{ color: "black" }}>Refreshing in a few seconds...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Navbar />
      <h2 style={styles.head}>Fill the Details to Get Blood Assistance</h2>

      <div style={styles.formBox}>
        {step === 1 && (
          <div>
            <h2 style={styles.head2}>Personal Information</h2>
            <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" style={styles.input} />
            <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" style={styles.input} type="tel" />
            <input name="altContact" value={formData.altContact} onChange={handleChange} placeholder="Alternate Contact Number (Optional)" style={styles.input} type="tel" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email ID (Optional)" style={styles.input} type="email" />
            <button style={styles.button} onClick={handleNext}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={styles.head2}>Patient Details</h2>
            <input name="patientName" value={formData.patientName} onChange={handleChange} placeholder="Patient Name" style={styles.input} />
            <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" style={styles.input} type="number" />
            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} style={styles.input}>
              <option value="" disabled>Blood Group</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
            <select name="gender" value={formData.gender} onChange={handleChange} style={styles.input}>
              <option value="" disabled>Gender</option>
              {["Male", "Female", "Other"].map(gender => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
            <input name="units" value={formData.units} onChange={handleChange} placeholder="Units of Blood Required" style={styles.input} type="number" />
            <button style={styles.button} onClick={handleNext}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={styles.head2}>Hospital Information</h2>
            <div style={styles.formRow}>
              <div style={styles.column}>
                <input name="hospitalName" value={formData.hospitalName} onChange={handleChange} placeholder="Hospital Name" style={styles.input} />
                <input name="hospitalAddress" value={formData.hospitalAddress} onChange={handleChange} placeholder="Hospital Address" style={styles.input} />
                <select name="state" value={formData.state} onChange={handleStateChange} style={styles.input}>
                  <option value="" disabled>Select State</option>
                  {indianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <select name="area" value={formData.area} onChange={handleChange} style={styles.input}>
                  <option value="" disabled>Select Area</option>
                  {selectedStateAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div style={styles.column}>
                <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" style={styles.input} />
                <input name="lastDate" value={formData.lastDate} onChange={handleChange} type="date" style={styles.input} />
                <input name="timeNeeded" value={formData.timeNeeded} onChange={handleChange} type="time" style={styles.input} />
                <select name="urgency" value={formData.urgency} onChange={handleChange} style={styles.input}>
                  <option value="" disabled>Urgency Level</option>
                  {["Critical", "High", "Moderate", "Low"].map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} checked={confirmDetails} onChange={(e) => setConfirmDetails(e.target.checked)} />
                I confirm that the details provided are accurate.
              </label>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} checked={agreeContact} onChange={(e) => setAgreeContact(e.target.checked)} />
                I agree to be contacted by donors or blood banks.
              </label>
              <button style={styles.button} onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#FFEFEF",
    paddingBottom: "50px",
  },
  head: {
    color: "black",
    padding: "30px",
  },
  head2: {
    color: "black",
    padding: "10px",
    marginTop: "-10px",
  },
  formBox: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    width: "600px",
    textAlign: "center",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#E34B52",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  column: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "black",
    marginTop: "10px",
  },
  checkbox: {
    width: "16px",
    height: "16px",
  },
};

export default RequestPage;
