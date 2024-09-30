const express = require('express');
const mongoose = require('mongoose'); // Use require for consistency
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes.js'); // Ensure the correct file path

// Load environment variables
require('dotenv').config();

const db = async () => {
  try {
    const URI = process.env.DATABASE;
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error occurred during MongoDB connection:", error);
    process.exit(1); // Exit process if the connection fails
  }
};

// Initialize Express app
const app = express();

// Connect to MongoDB
db();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", fileRoutes);

// Start server
const port = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(port, () => console.log(`Server running on port ${port}`));
