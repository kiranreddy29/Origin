require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Contact = require("./models/Contact");


const app = express();

connectDB();

app.use(express.json());
app.use(cors());


// health route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is running" });
});

// contact route
app.post("/api/contact", async (req, res) => {
    try {
      const contact = await Contact.create(req.body);
      res.status(201).json({ success: true, contact });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  });  

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
