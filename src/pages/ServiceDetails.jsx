import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/services";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import "./ServiceDetails.css";
import "./common.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!service) {
    return (
      <Container className="py-5 text-center">
        <h2>Service Not Found</h2>
      </Container>
    );
  }

  const handleImageClick = (index) => {
    setSelectedImage(service.gallery[index]);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % service.gallery.length;
    setSelectedImage(service.gallery[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + service.gallery.length) % service.gallery.length;
    setSelectedImage(service.gallery[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <Container className="py-5">
      {/* Back Button */}
      <Button
        variant="outline-dark"
        className="back-btn"
        onClick={() => navigate("/services")}
      >
        ←
      </Button>

      <h2 className="text-center mb-4">{service.title}</h2>
      <Row className="align-items-top mb-4">
        <Col md={6}>
          <Image
            src={service.image}
            alt={service.title}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6} className="left-section-service-details">
          <p>{service.fullDescription}</p>
          <Button
            variant="outline-danger"
            className="contact-btn"
            onClick={() => navigate("/bookingform")}
          >
            Book Now
          </Button>
        </Col>
      </Row>

      <h3 className="text-center mt-5 mb-4">Gallery</h3>
      <Row>
        {service.gallery && service.gallery.length > 0 ? (
          service.gallery.map((img, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-3">
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                className="img-fluid rounded shadow gallery-img"
                onClick={() => handleImageClick(index)}
              />
            </Col>
          ))
        ) : (
          <p className="text-center">No additional images available.</p>
        )}
      </Row>

      {/* Modal for Image Popup */}
      <Modal show={selectedImage !== null} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          <Button variant="dark" className="close-btn" onClick={handleClose}>
            ×
          </Button>
          <Button
            variant="dark"
            className="nav-btn left-btn"
            onClick={handlePrev}
          >
            ‹
          </Button>
          <Image src={selectedImage} alt="Selected" className="popup-image" />
          <Button
            variant="dark"
            className="nav-btn right-btn"
            onClick={handleNext}
          >
            ›
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ServiceDetails;
