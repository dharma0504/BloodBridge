import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import RequestPage from "./RequestPage"; // ✅ Import RequestPage
import Footer from "./Footer";
import MovingImage from "./MovingImage"; // Importing the component
import Guidelines from "./Guidelines";
import RegisterAsDonor from "./registerasdonor";

import section1 from "./assets/mainlandingpage.png";
import section2 from "./assets/section2.png";
import section3 from "./assets/section3.jpg";
import hand1 from "./assets/hand1.png";
import hand2 from "./assets/hand2.png";
import hand3 from "./assets/hand3.png";
import hand4 from "./assets/hand4.png";
import hand5 from "./assets/hand5.png";
import section3new from "./assets/section3new.png";

const boxData = [
  {
    img: hand1,
    text: "Find 12,000 lives lost<br /> daily due to blood <br />shortages. <br /> <br /> One donation could have saved them. ",
  },
  {
    img: hand2,
    text: "India needs 14.6 <br />million units of blood <br />per year. <br /> <br />Your donation can close this gap!",
  },
  {
    img: hand3,
    text: "Every 2 seconds,<br /> someone in India <br />needs blood.<br /> <br />Will you be their lifesaver?",
  },
  {
    img: hand4,
    text: "1 donation <br />=<br /> 3 lives saved!<br /> <br /> Be a hero today!",
  },
  {
    img: hand5,
    text: "Less than 1% of <br />Indians donate blood. <br /><br />Imagine the impact if more people joined!",
  },
];

function App() {
  return (
    <Router>
      {" "}
      {/* ✅ Wrap everything inside Router */}
      <div>
        {/* Define Routes Here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/registerasdonor" element={<RegisterAsDonor />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div style={{ ...styles.section, backgroundImage: `url(${section1})` }}>
        <Navbar />
        <h1 style={styles.head11}>BLOOD </h1>
        <h1 style={styles.head12}>DONATION</h1>
        <p style={styles.subtext}>Saves Lives</p>

        <h1 style={styles.head13}> Together, we’re Stronger</h1>
        <h3 style={styles.head14}>
          Join our mission to connect donors with those in need, creating a
        </h3>
        <h3 style={styles.head142}>network of hope and humanity. </h3>
      </div>

      {/* Section 2 */}
      <div style={{ ...styles.section, backgroundImage: `url(${section2})` }}>
        <h1 style={styles.head21}>
          "Life-Saving Blood Just a Request Away – Act Now!"
        </h1>
        <div style={styles.but1}>
          <button
            style={styles.req}
            onClick={() => (window.location.href = "/request")}
          >
            REQUEST BLOOD NOW
          </button>
        </div>
      </div>

      {/* Section 3 – New Section */}
      <div
        style={{ ...styles.section, backgroundImage: `url(${section3new})` }}
      >
        <h1 style={styles.head31}>"A Few Minutes for You,</h1>
        <h1 style={styles.head32}>a Lifetime for Someone Else!"</h1>

        <div style={styles.but2}>
          <button
            style={styles.req}
            onClick={() => (window.location.href = "/registerasdonor")}
          >
            BE A DONOR NOW
          </button>
        </div>
      </div>

      {/* Section 4 (was previously Section 3) */}
      <div style={{ ...styles.section, backgroundImage: `url(${section3})` }}>
        <div style={styles.boxContainer}>
          {boxData.map((item, index) => (
            <div key={index} style={styles.subBox}>
              <img
                src={item.img}
                alt={`Icon ${index + 1}`}
                style={styles.icon}
              />
              <p
                style={styles.text}
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
            </div>
          ))}
        </div>

        <h3 style={{ padding: "40px" }}>
          {" "}
          “Blood is that fragile scarlet tree we carry within us.” – Osbert
          Sitwell
        </h3>
      </div>

      <MovingImage />
      <Footer />
    </div>
  );
}

const styles = {
  head11: {
    display: "flex",
    color: "#E34B52",
    fontSize: "50px",
    fontFamily: "Garet, sans-serif",
    marginBottom: "-10px", // ⬅️ Negative margin to pull closer
  },

  head12: {
    color: "#E34B52",
    fontSize: "50px",
    fontFamily: "Garet, sans-serif",
    marginTop: "-10px", // ⬅️ Negative margin to pull closer
  },

  head13: {
    display: "flex",
    color: "#000000",
    fontSize: "25px",
    fontFamily: "'Hammersmith One', sans-serif",
    fontWeight: 30,
    marginTop: "200px", // ⬅️ Negative margin to pull closer
  },

  head14: {
    display: "flex",
    color: "#000000",
    fontSize: "15px",
    fontFamily: "'Hammersmith One', sans-serif",
    fontWeight: 30,
    marginTop: "0px", // ⬅️ Negative margin to pull closer
  },
  head142: {
    display: "flex",
    color: "#000000",
    fontSize: "15px",
    fontFamily: "'Hammersmith One', sans-serif",
    fontWeight: 30,
    marginTop: "-10px", // ⬅️ Negative margin to pull closer
  },

  subtext: {
    color: "#000000",
    fontFamily: "'Over the Rainbow', cursive",
    fontSize: "40px",
    fontWeight: 900,
    marginTop: "-60px",
  },

  section: {
    height: "100vh", // ✅ Full viewport height
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    //padding: "20px",
  },
  head21: {
    margin: "200px 0px 0px 70px",
    alignSelf: "flex-start",
    color: "#000000",
    fontFamily: "'Hammersmith One', sans-serif",
    fontWeight: 15,
  },

  head31: {
    margin: "290px 40px 0px 70px",
    alignSelf: "center",
    color: "#000000",
    fontFamily: "'Hammersmith One', sans-serif",
    fontWeight: 15,
  },

  head32: {
    margin: "10px 40px 0px 70px",
    alignSelf: "center",
    color: "#000000",
    fontFamily: "'Hammersmith One', sans-serif",
    fontWeight: 15,
  },

  but1: {
    //display: "flex",
    //alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E34B52",
    padding: "10px 30px",
    margin: "27px 0px 0px 270px",
    borderRadius: "35px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    color: "white",
    width: "20%",
    maxWidth: "1200px",
    alignSelf: "flex-start",
  },

  but2: {
    //display: "flex",
    //alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E34B52",
    padding: "10px 30px",
    margin: "27px 4000px 40px 530px",
    borderRadius: "35px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    color: "white",
    width: "20%",
    maxWidth: "1200px",
    alignSelf: "flex-start",
  },

  req: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Garet, sans-serif",
    transition: "0.3s ease",
  },

  boxContainer: {
    display: "flex",
    justifyContent: "center", // Centering boxes
    gap: "30px", // Space between boxes
    flexWrap: "wrap", // Ensures responsiveness
  },

  subBox: {
    width: "190px",
    height: "270px",
    backgroundColor: "#FDF0EE",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Ensures icons align at the top
    padding: "15px",
    margin: "200px 0px 0px 0px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    position: "relative", // Allows absolute positioning for text if needed
  },

  icon: {
    width: "130px",
    height: "130px",
    marginTop: "-3px",
    padding: "10px",
    flexShrink: 0, // Prevents icons from shrinking
  },

  text: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto",
    marginTop: "-30px", // Adjusts spacing between icon & text
  },
};

export default App;
