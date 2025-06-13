package backend;

import backend.utils.EmailUtil;

public class TestEmail {
    public static void main(String[] args) {
        String to = "dharmatej0504@gmail.com"; // Replace with your test email
        String subject = "✅ Email Test from Blood Donation App";
        String body = "This is a test email to confirm that JavaMail is working.";

        EmailUtil.sendEmail(to, subject, body);
    }
}
