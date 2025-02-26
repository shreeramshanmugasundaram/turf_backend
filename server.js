require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(express.json()); // Parses JSON request body
app.use(cors()); // Enables CORS
// Sample API Route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my Node.js backend!, we are online now" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
