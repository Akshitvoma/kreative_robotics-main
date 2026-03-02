import express from "express";
import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// Nodemailer transporter setup
router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  // Initialize transporter inside the handler to ensure process.env is loaded
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10), // Ensure port is parsed as a number
    secure: false, // Use 'true' if your SMTP port is 465 (SSL/TLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Function to read HTML email templates (defined within the handler)
    const readHtmlTemplate = (templateName) => {
      const templatePath = resolve(__dirname, `../templates/${templateName}`);
      return readFileSync(templatePath, "utf8");
    };

    // Read HTML templates
    const adminEmailTemplate = readHtmlTemplate("adminEmail.html");
    const userReplyEmailTemplate = readHtmlTemplate("userReplyEmail.html");

    // Replace placeholders for admin email
    const adminEmailHtml = adminEmailTemplate
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{phone}}", phone || "N/A")
      .replace("{{message}}", message);

    // Replace placeholders for user auto-reply email
    const userReplyEmailHtml = userReplyEmailTemplate.replace(/{{name}}/g, name);

    // Send email to recipient (admin)
    const mailOptionsAdmin = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email, // Set reply-to to the sender's email
      subject: `New Contact Form Inquiry from ${name}`,
      html: adminEmailHtml,
    };

    await transporter.sendMail(mailOptionsAdmin);

    // Send auto-reply email to the user
    const mailOptionsUser = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank You for Your Inquiry - Kreative Robotics",
      html: userReplyEmailHtml,
    };

    await transporter.sendMail(mailOptionsUser);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send emails.", error: error.message });
  }
});

export default router;
