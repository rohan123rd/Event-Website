import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../context/HoverUnderline.css";
import "./BookingForm.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="py-5 booking-form">
      <h2 className="text-center mb-4 hover-underline-animation center">
        Contact Us
      </h2>
      <Row>
        <Col md={6}>
          <h5>Get in Touch</h5>
          <p>Email: vanshpatel9793@gmail.com</p>
          <p>Phone: +91 95108 49304</p>
          <p> +91 63540 23574</p>
          <p> +91 88663 40208</p>
          <p>
            Address: 46,Harikesh Society,Jahangirpura,Surat,Gujarat,India -
            395005
          </p>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                style={{ paddingLeft: "15px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Mail"
                style={{ paddingLeft: "15px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message"
                style={{ paddingLeft: "15px", paddingTop: "10px" }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
