import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import "./services.css";
import "../context/HoverUnderline.css";

const Services = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 hover-underline-animation center">
        Our Services
      </h2>
      <Row className="service-container">
        {services.map((service) => (
          <Col md={3} sm={6} key={service.id} className="mb-4">
            <Card className="h-100 d-flex flex-column service-card">
              <Link
                to={`/services/${service.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    className="service-image"
                  />
                </div>
                <Card.Body className="d-flex flex-column card-body">
                  <Card.Title style={{ fontSize: "16px" }}>
                    {service.title}
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
