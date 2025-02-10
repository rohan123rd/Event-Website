import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Souvenirs Events</h5>
            <p>Making your celebrations unforgettable!</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>Follow us:</p>
            <a href="#" className="text-white mx-2">
              Facebook
            </a>
            <a href="#" className="text-white mx-2">
              Instagram
            </a>
            <a href="#" className="text-white mx-2">
              Twitter
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
