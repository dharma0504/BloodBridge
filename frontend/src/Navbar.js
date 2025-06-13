import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "./assets/logo.png"; // Ensure the logo is in src/assets/

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Left Section: Logo + Title */}
      <div style={styles.leftSection}>
        <img src={logo} alt="BloodBridge Logo" style={styles.logo} />
        <h2 style={styles.title}>BloodBridge</h2>
      </div>

      {/* Right Section: Navigation Links */}
      <div style={styles.rightSection}>
        <Link to="/" style={styles.link}>
          <button style={styles.button}>Home</button>
        </Link>
        <Link to="/request" style={styles.link}>
          <button style={styles.button}>Request</button>
        </Link>
        <Link to="/guidelines" style={styles.link}>
          <button style={styles.button}>Guidelines</button>
        </Link>
        <Link to="/registerasdonor" style={styles.link}>
          <button style={styles.button}>Register as Donor</button>
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E34B52",
    padding: "5px 30px",
    margin: "20px auto",
    borderRadius: "35px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    color: "white",
    width: "95%",
    maxWidth: "1200px",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Adjust spacing between logo & title
  },

  title: {
    fontSize: "20px",
    fontFamily: "Garet, sans-serif",
  },

  logo: {
    width: "50px",
    height: "50px",
  },

  rightSection: {
    display: "flex",
    gap: "50px", // Adjust spacing between buttons
    marginRight: "150px",
  },

  link: {
    textDecoration: "none", // Removes underline from links
  },

  button: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "8px",
    fontSize: "19px",
    cursor: "pointer",
    fontWeight: "Bold",
    fontFamily: "'Hammersmith One',sans-serif",
    transition: "0.3s ease",
  },
};

export default Navbar;
