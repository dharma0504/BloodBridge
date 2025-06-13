package backend.utils;

import java.util.Properties;
import jakarta.mail.*;
import jakarta.mail.internet.*;


public class EmailUtil {
    public static void sendEmail(String to, String subject, String body) {
        final String from = "headbloodbridge@gmail.com";
        final String password = "lxeq qnhe qsga vxhp";

        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject(subject);
            message.setText(body);

            Transport.send(message);
            System.out.println("✅ Email sent to: " + to);

        } catch (MessagingException e) {
            System.out.println("❌ Email failed: " + e.getMessage());
        }
    }
}
