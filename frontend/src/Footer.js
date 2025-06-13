import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Name */}
        <div style={styles.brand}>
          <h2 style={styles.logo}>BloodBridge</h2>
          <p style={styles.tagline}>Saving lives, one drop at a time.</p>
        </div>

        {/* Quick Links */}
        <div style={styles.links}>
          <a href="/" style={styles.link}>
            Home
          </a>
          <a href="/request" style={styles.link}>
            Request Blood
          </a>
          <a href="/about" style={styles.link}>
            About Us
          </a>
          <a href="/contact" style={styles.link}>
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div style={styles.contact}>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@bloodbridge.com</p>
        </div>

        {/* Social Media */}
        <div style={styles.social}>
          <a href="#" style={styles.icon}>
            📘
          </a>
          <a href="#" style={styles.icon}>
            🐦
          </a>
          <a href="#" style={styles.icon}>
            📷
          </a>
          <a href="#" style={styles.icon}>
            🔗
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p style={styles.copyright}>© 2025 BloodBridge. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#E34B52",
    color: "white",
    padding: "70px 0",
    textAlign: "center",
    marginTop: "0px",
    height: "150px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    //alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  brand: {
    textAlign: "left",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  tagline: {
    fontSize: "14px",
    opacity: "0.8",
  },
  links: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginBottom: "8px",
    fontSize: "14px",
  },
  contact: {
    fontSize: "14px",
    textAlign: "left",
  },
  social: {
    display: "flex",
    gap: "15px",
    fontSize: "20px",
  },
  icon: {
    color: "white",
    textDecoration: "none",
  },
  copyright: {
    marginTop: "50px",
    fontSize: "12px",
    opacity: "0.7",
  },
};

export default Footer;
