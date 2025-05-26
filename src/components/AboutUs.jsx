import { Container, Row, Col } from "react-bootstrap";
import "../context/HoverUnderline.css";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 hover-underline-animation center">
        About Us
      </h2>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="src\assets\02 black watermark.png"
            alt="About Us"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <p>
            Welcome to Souvenirs Events! We specialize in making your
            celebrations unforgettable with stunning decorations and seamless
            event planning.
          </p>
          <p>
            Wheater it's a wedding, birthday, corporate event, or a baby shower,
            we bring creativity and professionalism to every event.
          </p>
          <p>Let us make your special moments extraordinary!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
