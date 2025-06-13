import React from "react";
import Navbar from "./Navbar";
import bloodbullet from "./assets/bloodbullet.png";
import Footer from "./Footer";

const Guidelines = () => {
  return (
    <div style={{ backgroundColor: "#FDF0EE" }}>
      {/* Navbar */}

      {/* Main Content */}
      <div>
        <Navbar />
        <h2
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}
        >
          Blood Donation Guidelines & Safety
        </h2>
        <p
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
        >
          Every drop counts! Understand the process, eligibility, and <br />{" "}
          safety measures before donating or receiving blood.
        </p>

        {/* Blood Compatibility Table */}
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#E34B52",
            borderTop: "-100px",
            fontSize: "50px",
            fontFamily: "'Cookie', cursive",
            marginBottom: "-60px",
          }}
        >
          Blood Compatibility Chart
        </h3>
        <div>
          <table className="blood-table">
            <thead>
              <tr style={{}}>
                <th>Blood Type</th>
                <th>Donate Blood To</th>
                <th>Receive Blood From</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "#B11E28", fontWeight: "bold" }}>A+</td>
                <td>A+, AB+</td>
                <td>A+, A-, O+, O-</td>
              </tr>
              <tr>
                <td style={{ color: "#B11E28", fontWeight: "bold" }}>O+</td>
                <td>O+, A+, B+, AB+</td>
                <td>O+, O-</td>
              </tr>
              <tr>
                <td style={{ color: "#B11E28", fontWeight: "bold" }}>B+</td>
                <td>B+, AB+</td>
                <td>B+, B-, O+, O-</td>
              </tr>
              <tr>
                <td style={{ color: "#B11E28", fontWeight: "bold" }}>AB+</td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td style={{ color: "#B11E28", fontWeight: "bold" }}>A-</td>
                <td>A+, A-, AB+, AB-</td>
                <td>A-, O-</td>
              </tr>
              <tr>
                <td style={{ color: "#B11E28", fontWeight: "bold" }}>O-</td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td style={{ color: "#B11E28", fontWeight: "bold" }}>B-</td>
                <td>B+, B-, AB+, AB-</td>
                <td>B+, O-</td>
              </tr>
              <tr>
                <td style={{ color: "#B11E28", fontWeight: "bold" }}>AB-</td>
                <td>AB+, AB-</td>
                <td>AB-, A-, B-, O-</td>
              </tr>
            </tbody>
          </table>

          <style>{`
        .blood-table {
          margin: 100px auto;
          border-collapse: separate;
          border-spacing: 10px 10px;
          width: 50%;
          background-color: white;
        }

        .blood-table th,
        .blood-table td {
          padding: 12px 20px;
          border-bottom: 1px solid #000000;
          text-align: center;
          
        }

        .blood-table th {
          background-color: white;
          font-weight: bold;
        }
      `}</style>
        </div>

        {/* Who Can Donate */}
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "50px",
              fontFamily: "'Cookie', cursive",
              marginTop: "-70px",
            }}
          >
            Who Can Donate Blood?
          </h3>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Age: 18-65 years</li>
            <li>Weight: 50 kg or more</li>
            <li>Hemoglobin: Minimum 12.5 g/dL</li>
            <li>Blood Pressure: 90/60 - 140/90 mmHg</li>
            <li>
              Good Health: No recent illness (fever, infections, flu in the last
              2 weeks)
            </li>
            <li>
              No Chronic Diseases: HIV, Hepatitis B/C, Diabetes (on insulin),
              severe heart conditions
            </li>
            <li>No Recent Tattoos or Piercings: Wait 6 months</li>
            <li>No Recent Vaccinations: Wait 14 days</li>
            <li>Not Pregnant or Breastfeeding</li>
          </ul>
          <p
            style={{
              marginTop: "10px",
              fontStyle: "italic",
              color: "#b30000",
              fontWeight: "500",
            }}
          >
            Tip: Stay hydrated, eat iron-rich food, and avoid alcohol before
            donating.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "-10px",
              fontSize: "50px",
              fontFamily: "'Cookie', cursive",
            }}
          >
            Who Should NOT Donate Blood?
          </h3>
          <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>Recent Surgery or Major Injury (last 6 months)</li>
            <li>History of Blood Disorders or Cancer</li>
            <li>HIV, Hepatitis B/C, or Other Infections</li>
            <li>Uncontrolled Diabetes or Blood Pressure Issues</li>
            <li>Underweight or Malnourished</li>
          </ul>
          <p
            style={{
              marginTop: "10px",
              fontStyle: "italic",
              color: "#b30000",
              fontWeight: "500",
            }}
          >
            If unsure, consult a doctor before donating.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "-10px",
              fontSize: "50px",
              fontFamily: "'Cookie', cursive",
            }}
          >
            Blood Donation Process
          </h3>
          <ol style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>
              <strong>Step 1:</strong> Registration – Provide basic details &
              medical history.
            </li>
            <li>
              <strong>Step 2:</strong> Health Check – Blood pressure,
              hemoglobin, and general fitness are assessed.
            </li>
            <li>
              <strong>Step 3:</strong> Donation – 350-450ml of blood is drawn in
              10-15 minutes.
            </li>
            <li>
              <strong>Step 4:</strong> Rest & Refresh – Relax for 10-15 minutes
              with fluids/snacks.
            </li>
            <li>
              <strong>Step 5:</strong> Blood Processing – Blood is tested and
              stored safely.
            </li>
          </ol>
          <p
            style={{
              marginTop: "10px",
              fontStyle: "italic",
              color: "#007700",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Total time: 30-45 minutes. Small effort, BIG impact!
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
          {/* Heading outside the box */}
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "50px",
              fontFamily: "'Cookie', cursive",
              marginBottom: "20px",
              marginTop: "-10px",
            }}
          >
            Frequently Asked Questions
          </h3>

          {/* White background container for content */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "40px",
                lineHeight: "1.8",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={bloodbullet}
                  alt="bullet"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                />
                <div>
                  <strong>Is blood donation painful?</strong>
                  <br />
                  Only a small needle prick, just like a blood test!
                </div>
              </li>

              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={bloodbullet}
                  alt="bullet"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                />
                <div>
                  <strong>How often can I donate?</strong>
                  <br />
                  Every 3 months (men) and 4 months (women).
                </div>
              </li>

              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={bloodbullet}
                  alt="bullet"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                />
                <div>
                  <strong>Can I donate if I have high blood pressure?</strong>
                  <br />
                  Yes, if controlled and within limits (90/60 - 140/90 mmHg).
                </div>
              </li>

              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={bloodbullet}
                  alt="bullet"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                />
                <div>
                  <strong>How do I prepare for donation?</strong>
                  <br />
                  Drink water, eat a light meal, and avoid alcohol before
                  donating.
                </div>
              </li>

              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={bloodbullet}
                  alt="bullet"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                />
                <div>
                  <strong>Where can I donate blood?</strong>
                  <br />
                  At hospitals, blood banks, or organized donation camps.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#E34B52",
            fontSize: "40px",
            borderTop: "-100px",
            fontFamily: "'Over the Rainbow', cursive",
            paddingBottom: "60px",
          }}
        >
          Be a Lifesaver - Donate Today!
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default Guidelines;
