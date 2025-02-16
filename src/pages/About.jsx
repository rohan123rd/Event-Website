import { Container, Row, Col } from "react-bootstrap";
import "./common.css";

const About = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2>About Souvenirs Events</h2>
          <p style={{ textAlign: "justify" }}>
            At Souvenirs Events, we turn your special moments into unforgettable
            memories. Whether it’s a wedding, birthday party, corporate event,
            or baby shower, we bring creativity, elegance, and professionalism
            to every celebration. Our team specializes in stunning decorations
            and seamless event planning, ensuring that every detail is just the
            way you imagined.
          </p>
          <p style={{ textAlign: "justify" }}>
            We believe that every event tells a story, and we’re here to make
            yours truly special. From dreamy wedding décor and vibrant Haldi
            Rasam setups to elegant corporate gatherings, we design and execute
            events that leave a lasting impression. Our website gives you a
            glimpse of our work, showcasing our latest projects, themes, and
            styles. You can browse through our gallery, check out our blogs for
            inspiration, and easily get in touch with us for bookings.
          </p>
          <p style={{ textAlign: "justify" }}>
            Planning an event can be overwhelming, but with Souvenirs Events,
            you can relax and enjoy the celebration while we take care of the
            rest. Let’s make your special day extraordinary! Contact us today
            and let’s bring your vision to life.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="src\assets\02 black watermark.png"
            alt="About Us"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
