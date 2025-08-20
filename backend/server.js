// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ To parse JSON request body

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB connection error:", err));

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
  visit: { type: String, required: true },
  food: { type: Number, required: true },
  service: { type: Number, required: true },
  experience: { type: Number, required: true },
  recommend: { type: String, required: true },
  suggestions: { type: String },
  followup: { type: Boolean, default: false },
  submittedAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// API Routes
app.post("/api/feedback", async (req, res) => {
  try {
    console.log("📥 Incoming Feedback:", req.body); // ✅ Debug log
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: "✅ Feedback submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving feedback:", error.message);
    res.status(500).json({ message: "Error saving feedback", error });
  }
});

app.get("/api/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ submittedAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error("❌ Error fetching feedback:", error.message);
    res.status(500).json({ message: "Error fetching feedback", error });
  }
});

// Test Route
app.get("/api/message", (req, res) => {
  res.json({ message: "🚀 Server & MongoDB are working fine!" });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
