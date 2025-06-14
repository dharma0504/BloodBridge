<p align="center">
  <img src="https://raw.githubusercontent.com/dharma0504/BloodBridge/main/bloodbridge.png" alt="BloodBridge Logo" width=100%/>
</p>

# 🩸 BloodBridge – Emergency Blood Request System with Donor Filtering and Alerts

![BloodBridge Logo](https://img.icons8.com/color/48/like--v1.png)

A full‑stack real‑time platform to **connect blood donors with urgent recipients**, using intelligent filtering and automated email alerts.

---

## 📌 Overview

> “Technology meets humanity — saving lives, one drop at a time.”

**BloodBridge** instantly notifies compatible donors in the same area whenever a blood request is posted.

- 🔍 Filters donors by **blood group, state, and area**
- 📧 Sends **email alerts** to donors and requesters
- 🌐 **React** frontend & **Core Java + JDBC + MySQL** backend
- ⚙️ Real‑time request processing and donor matching

---

## 🧠 Features

### 👤 Donor Module
- Intuitive multi‑step registration form  
- Data stored securely in MySQL  
- Automatic compatibility checks  
- Email alerts for nearby emergencies  

### 🩸 Requester Module
- Detailed blood‑request submission  
- Instant donor matching  
- Email containing compatible donor list  

### ✉️ Smart Notifications
- Donors receive alerts on matching requests  
- Requesters receive donor contact list  

---

## 🧱 Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| 🌐 Frontend  | React, CSS                        |
| 🔙 Backend   | Core Java, JDBC, Java HTTP Server |
| 💾 Database  | MySQL                             |
| 📬 Email     | SMTP (Gmail via JavaMail)         |

---

## 🗂️ Project Structure

```bash
BloodBridge/
├── backend/
│   ├── dao/            # Data access objects
│   ├── db/             # DB connection
│   ├── models/         # Donor & Request classes
│   ├── utils/          # Email utilities
│   └── Main.java       # Server & endpoints
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       └── components/
└── README.md
```

## 🖥️ How to Run the Project Locally

To run **BloodBridge** on your system, follow the steps below for setting up the backend and frontend.

---

### ⚙️ Backend Setup (Java + JDBC + MySQL)

1. **🔧 Requirements**
   - Java JDK 8 or above
   - MySQL Server (running on `localhost:3306`)
   - An IDE (e.g., IntelliJ / Eclipse) or Terminal
   - `bloodbridge` MySQL database created

2. **📦 Set Up Database**
   - Create a new database:
     ```sql
     CREATE DATABASE bloodbridge;
     ```
   - Create required tables (based on your schema: `donors`, `requests`)
   - Update `DBConnection.java` with your MySQL **username & password**:
     ```java
     String url = "jdbc:mysql://localhost:3306/bloodbridge";
     String user = "your_username";
     String password = "your_password";
     ```

3. **📂 Compile and Run**
   - Navigate to the `backend/` directory
   - Compile and run `Main.java`:
     ```bash
     javac Main.java
     java Main
     ```
   - This will start a lightweight Java HTTP server on:  
     `http://localhost:8080`

4. **🌐 API Endpoints**
   | Endpoint                  | Method | Description               |
   |---------------------------|--------|---------------------------|
   | `/register-donor`        | POST   | Register a donor          |
   | `/submit-blood-request`  | POST   | Submit a blood request    |

---

### 🌐 Frontend Setup (React)

1. **🔧 Requirements**
   - Node.js and npm installed
   - Terminal / Code editor like VS Code

2. **📦 Install Dependencies**
   ```bash
   cd frontend/
   npm install
   ```

## 👨‍💻 Created By

**Dharmatej Mallampati**

Connect with me:  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/dharmatej-mallampati-47944724a/)

