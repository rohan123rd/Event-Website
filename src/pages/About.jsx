import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2>About Souvenirs Events</h2>
          <p>
            We specialize in creating unforgettable experiences for weddings,
            birthdays, corporate parties, and more.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/assets/about.jpg"
            alt="About Us"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
