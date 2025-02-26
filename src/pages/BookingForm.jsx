import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    guests: "",
    colorScheme: "",
    budget: "",
    additionalRequests: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/book-event",
        formData
      );
      setMessage(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        eventTime: "",
        eventLocation: "",
        guests: "",
        colorScheme: "",
        budget: "",
        additionalRequests: "",
      });
    } catch (error) {
      setMessage("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="booking-form">
      <h2>Book Your Event Decoration</h2>
      {message && <p className="form-message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Event Type:</label>
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
        >
          <option value="">Select an event type</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Baby Shower">Baby Shower</option>
          <option value="Engagement">Engagement</option>
        </select>

        <label>Event Date:</label>
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />

        <label>Event Time:</label>
        <input
          type="time"
          name="eventTime"
          value={formData.eventTime}
          onChange={handleChange}
          required
        />

        <label>Event Location:</label>
        <input
          type="text"
          name="eventLocation"
          value={formData.eventLocation}
          onChange={handleChange}
          required
        />

        <label>Number of Guests:</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label>Preferred Color Scheme:</label>
        <input
          type="text"
          name="colorScheme"
          value={formData.colorScheme}
          onChange={handleChange}
        />

        <label>Estimated Budget:</label>
        <input
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        />

        <label>Additional Requests:</label>
        <textarea
          name="additionalRequests"
          value={formData.additionalRequests}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
