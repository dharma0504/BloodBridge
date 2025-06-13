package backend;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.google.gson.Gson;

import backend.models.Donor;
import backend.dao.DonorDAO;
import backend.models.BloodRequest;
import backend.dao.BloodRequestDAO;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Main {
    public static void main(String[] args) throws IOException {
        // 🔹 Optional: Insert a sample donor at startup
        try {
            Donor sampleDonor = new Donor(
                "Sample User", 28, "Male", "A+",
                "Telangana", "Hyderabad", "9876543210", "9123456789", "sample@example.com"
            );
            DonorDAO donorDAO = new DonorDAO();
            boolean inserted = donorDAO.insertDonor(sampleDonor);
            System.out.println(inserted ? "✅ Sample donor inserted." : "❌ Failed to insert sample donor.");
        } catch (Exception e) {
            System.out.println("❌ Error inserting sample donor:");
            e.printStackTrace();
        }

        // 🔹 NEW: Insert a sample blood request at startup
        try {
            BloodRequest sampleRequest = new BloodRequest();
            sampleRequest.setFullName("Aarav Mehta");
            sampleRequest.setContactNumber("9876543210");
            sampleRequest.setAltContact("9123456789");
            sampleRequest.setEmail("aarav@example.com");
            sampleRequest.setPatientName("Sunita Mehta");
            sampleRequest.setAge(60);
            sampleRequest.setBloodGroup("O+");
            sampleRequest.setGender("Female");
            sampleRequest.setUnits(2);
            sampleRequest.setHospitalName("Care Hospital");
            sampleRequest.setHospitalAddress("MG Road, Bangalore");
            sampleRequest.setState("Karnataka");
            sampleRequest.setArea("Bangalore");
            sampleRequest.setPincode("560001");
            sampleRequest.setLastDate("2025-04-10");
            sampleRequest.setTimeNeeded("10:30");
            sampleRequest.setUrgency("Critical");

            boolean saved = BloodRequestDAO.insertRequest(sampleRequest);
            System.out.println(saved ? "✅ Sample blood request inserted." : "❌ Failed to insert blood request.");
        } catch (Exception e) {
            System.out.println("❌ Error inserting sample blood request:");
            e.printStackTrace();
        }

        // 🔹 Start HTTP Server
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext("/register-donor", new RegisterDonorHandler());
        server.createContext("/submit-blood-request", new BloodRequestHandler());
        server.setExecutor(null); // default executor
        System.out.println("🌐 Server started on http://localhost:8080");
        server.start();
    }

    // 🔸 Donor Registration Handler
    static class RegisterDonorHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            setCORS(exchange);

            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                String json = new String(exchange.getRequestBody().readAllBytes());
                Donor donor = new Gson().fromJson(json, Donor.class);
                System.out.println("📥 Received donor registration: " + donor.getFullName());

                DonorDAO dao = new DonorDAO();
                boolean success = dao.insertDonor(donor);

                sendJsonResponse(exchange, "{\"success\":" + success + "}");
            } else {
                sendTextResponse(exchange, 404, "Not Found");
            }
        }
    }

    // 🔸 Blood Request Handler
    static class BloodRequestHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            setCORS(exchange);

            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                String json = new String(exchange.getRequestBody().readAllBytes());
                BloodRequest request = new Gson().fromJson(json, BloodRequest.class);
                System.out.println("📥 Received blood request from: " + request.getFullName());

                boolean saved = BloodRequestDAO.insertRequest(request);

                sendJsonResponse(exchange, "{\"success\":" + saved + "}");
            } else {
                sendTextResponse(exchange, 404, "Not Found");
            }
        }
    }

    // 🔧 Utility methods
    static void setCORS(HttpExchange exchange) {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "POST, OPTIONS");
    }

    static void sendJsonResponse(HttpExchange exchange, String json) throws IOException {
        exchange.sendResponseHeaders(200, json.getBytes().length);
        OutputStream os = exchange.getResponseBody();
        os.write(json.getBytes());
        os.close();
    }

    static void sendTextResponse(HttpExchange exchange, int statusCode, String text) throws IOException {
        exchange.sendResponseHeaders(statusCode, text.getBytes().length);
        OutputStream os = exchange.getResponseBody();
        os.write(text.getBytes());
        os.close();
    }
}
