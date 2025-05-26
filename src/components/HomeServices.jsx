import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../data/services";

const HomeServices = () => {
  const navigate = useNavigate();

  // ✅ Get 4 random services
  const randomServices = [...services]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 hover-underline-animation center">
        Our Services
      </h2>
      <Row className="service-container">
        {randomServices.map((service) => (
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
      {/* View More Button */}
      <div className="text-center mt-4">
        <Button variant="primary" onClick={() => navigate("/services")}>
          View More
        </Button>
      </div>
    </Container>
  );
};

export default HomeServices;
