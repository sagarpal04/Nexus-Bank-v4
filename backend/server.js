import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

// CORS middleware to allow requests from specific origin
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
