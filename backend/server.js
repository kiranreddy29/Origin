const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json());
app.use(cors());


// health route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is running" });
});

// contact route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact received:", { name, email, message });
  res.status(200).json({ success: true });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
