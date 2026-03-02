import nodemailer from "nodemailer";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required." });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        const readHtmlTemplate = (templateName) => {
            const templatePath = resolve(__dirname, "templates", templateName);
            return readFileSync(templatePath, "utf8");
        };

        const adminEmailTemplate = readHtmlTemplate("adminEmail.html");
        const userReplyEmailTemplate = readHtmlTemplate("userReplyEmail.html");

        const adminEmailHtml = adminEmailTemplate
            .replace("{{name}}", name)
            .replace("{{email}}", email)
            .replace("{{phone}}", phone || "N/A")
            .replace("{{message}}", message);

        const userReplyEmailHtml = userReplyEmailTemplate.replace(/{{name}}/g, name);

        const mailOptionsAdmin = {
            from: process.env.SMTP_USER,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New Contact Form Inquiry from ${name}`,
            html: adminEmailHtml,
        };

        await transporter.sendMail(mailOptionsAdmin);

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
}
