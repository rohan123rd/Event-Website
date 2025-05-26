import { Container, Row, Col } from "react-bootstrap";
import "./common.css";
import TiltedCard from "../components/TiltedCard";
import "../context/HoverUnderline.css";
import "./About.css";

const About = () => {
  return (
    <div className="home-page">
      <Container className="py-5">
        <Row>
          <h1 className="text-center hover-underline-animation center">
            About Souvenirs Events
          </h1>
          <Col md={6}>
            <p style={{ textAlign: "justify" }}>
              At Souvenirs Events, we turn your special moments into
              unforgettable memories. Whether it’s a wedding, birthday party,
              corporate event, or baby shower, we bring creativity, elegance,
              and professionalism to every celebration. Our team specializes in
              stunning decorations and seamless event planning, ensuring that
              every detail is just the way you imagined.
            </p>
            <p style={{ textAlign: "justify" }}>
              We believe that every event tells a story, and we’re here to make
              yours truly special. From dreamy wedding décor and vibrant Haldi
              Rasam setups to elegant corporate gatherings, we design and
              execute events that leave a lasting impression. Our website gives
              you a glimpse of our work, showcasing our latest projects, themes,
              and styles. You can browse through our gallery, check out our
              blogs for inspiration, and easily get in touch with us for
              bookings.
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
        <Row>
          <h1 className="text-center hover-underline-animation center">
            Our Team
          </h1>
          <Col className="mt-5 d-flex justify-content-around">
            <TiltedCard
              imageSrc="https://i.ibb.co/QFV7wKK6/vansh.jpg"
              altText="Vansh Patel"
              captionText="Vansh Patel"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={20}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p
                  className="tilted-card-demo-text"
                  style={{
                    margin: "0",
                  }}
                >
                  Vansh Patel - Co Founder, Developer
                </p>
              }
            />
          </Col>
          <Col className="mt-5 d-flex justify-content-around">
            <TiltedCard
              imageSrc="https://i.ibb.co/BKsr1cm2/vatsal.jpg"
              altText="Vatsal Patel"
              captionText="Vatsal Patel"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={20}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text" style={{ margin: "0" }}>
                  Vatsal Patel - Co Founder
                </p>
              }
            />
          </Col>
          <Col className="mt-5 d-flex justify-content-around">
            <TiltedCard
              imageSrc="https://i.ibb.co/TsKnQzF/Untitled-design.png"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Rohan Naghera"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={20}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text" style={{ margin: "0" }}>
                  Rohan Naghera - Developer
                </p>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
