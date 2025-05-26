import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";
import "../context/HoverUnderline.css";

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
    image: "",
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
        image: "",
      });
    } catch (error) {
      setMessage("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="booking-form">
      <h2 className="hover-underline-animation center">
        Book Your Event Decoration
      </h2>
      {message && <p className="form-message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-main">
          <div className="left-section-form">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Eg., Rohan Naghera"
            />

            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Eg., xyz@gmail.com"
            />

            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Eg., 0011223344"
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
          </div>
          <div className="right-section-form">
            <label>Event Location:</label>
            <input
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              required
              placeholder="Eg., Adajan"
            />

            <label>Number of Guests:</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              placeholder="20"
            />

            <label>Preferred Color Scheme:</label>
            <input
              type="text"
              name="colorScheme"
              value={formData.colorScheme}
              onChange={handleChange}
              placeholder="Eg., Red"
            />

            <label>Estimated Budget:</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Eg., 10000"
            />

            <label>Additional Requests:</label>
            <textarea
              name="additionalRequests"
              value={formData.additionalRequests}
              onChange={handleChange}
              placeholder="If any requests, write here"
            ></textarea>

            <label>
              Upload a image(suggestion) of the decoration you would like
            </label>
            <input
              type="file"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />

            <button type="submit">Submit Booking</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
