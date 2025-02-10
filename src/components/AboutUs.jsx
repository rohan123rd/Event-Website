import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="https://www.eventbookings.com/wp-content/uploads/2018/03/event-ideas-for-party-eventbookings.jpg"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
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
