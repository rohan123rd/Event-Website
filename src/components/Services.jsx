import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "Wedding Decorations",
    img: "./assets/Gallery/wedding.jpg",
    description: "Elegant and luxurious wedding setups designed to perfection.",
  },
  {
    title: "Birthday Parties",
    img: "/assets/birthday.jpg",
    description: "Themed birthday parties for kids and adults alike.",
  },
  {
    title: "Corporate Events",
    img: "/assets/corporate.jpg",
    description: "Professional event planning for corporate gatherings.",
  },
  {
    title: "Baby Showers",
    img: "/assets/baby-shower.jpg",
    description: "Beautifully themed baby shower decorations.",
  },
];

const Services = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
