import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contact.js";

// Load environment variables from .env file
dotenv.config();
console.log("SMTP_HOST from .env:", process.env.SMTP_HOST);
console.log("SMTP_PORT from .env:", process.env.SMTP_PORT);
console.log("SMTP_USER from .env:", process.env.SMTP_USER);
console.log("RECIPIENT_EMAIL from .env:", process.env.RECIPIENT_EMAIL);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api", contactRoutes); // Mount contact routes under /api

// Simple root route for testing
app.get("/", (req, res) => {
  res.send("Kreative Robotics Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
