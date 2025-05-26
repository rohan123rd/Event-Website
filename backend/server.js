const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const xl = require("excel4node");
const fs = require("fs");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

const BookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  eventType: String,
  eventDate: String,
  eventTime: String,
  eventLocation: String,
  guests: Number,
  colorScheme: String,
  budget: String,
  additionalRequests: String,
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", BookingSchema);

app.post("/api/book-event", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "Booking Confirmation - Souvenirs Events",
      text: `Dear ${req.body.fullName},\n\nYour event booking has been received.\nEvent Details:\nEvent Type: ${req.body.eventType}\nDate: ${req.body.eventDate}\nTime: ${req.body.eventTime}\nLocation: ${req.body.eventLocation}\nGuests: ${req.body.guests}\n\nOur team will contact you soon!`
    });

    res.status(200).json({ message: "Booking successful! Confirmation email sent." });
  } catch (err) {
    console.error("❌ Error processing booking:", err);
    res.status(500).json({ message: "Server error, please try again." });
  }
});

app.get("/api/monthly-report", async (req, res) => {
  try {
    const startOfMonth = new Date();
    startOfMonth.setDate(1); 
    startOfMonth.setHours(0, 0, 0, 0);

    const bookings = await Booking.find({ createdAt: { $gte: startOfMonth } });

    if (bookings.length === 0) {
      return res.status(200).json({ message: "No bookings this month." });
    }

    const wb = new xl.Workbook();
    const ws = wb.addWorksheet("Monthly Report");

    const headers = [
      "Full Name", "Email", "Phone", "Event Type", "Event Date", "Event Time",
      "Event Location", "Guests", "Color Scheme", "Budget", "Additional Requests"
    ];

    // ✅ Add Headers to Excel
    headers.forEach((header, i) => {
      ws.cell(1, i + 1).string(header).style({ bold: true });
    });

    // ✅ Insert Booking Data
    bookings.forEach((booking, rowIndex) => {
      ws.cell(rowIndex + 2, 1).string(booking.fullName);
      ws.cell(rowIndex + 2, 2).string(booking.email);
      ws.cell(rowIndex + 2, 3).string(booking.phone);
      ws.cell(rowIndex + 2, 4).string(booking.eventType);
      ws.cell(rowIndex + 2, 5).string(booking.eventDate);
      ws.cell(rowIndex + 2, 6).string(booking.eventTime);
      ws.cell(rowIndex + 2, 7).string(booking.eventLocation);
      ws.cell(rowIndex + 2, 8).number(booking.guests);
      ws.cell(rowIndex + 2, 9).string(booking.colorScheme);
      ws.cell(rowIndex + 2, 10).string(booking.budget);
      ws.cell(rowIndex + 2, 11).string(booking.additionalRequests);
    });

    const filePath = `./monthly_report.xlsx`;
    await wb.write(filePath);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "Monthly Booking Report - Souvenirs Events",
      text: "Attached is the monthly booking report for this month.",
      attachments: [
        {
          filename: "monthly_report.xlsx",
          path: filePath
        }
      ]
    });

    fs.unlinkSync(filePath);

    res.status(200).json({ message: "Monthly report sent successfully!" });
  } catch (err) {
    console.error("❌ Error generating report:", err);
    res.status(500).json({ message: "Server error, please try again." });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));