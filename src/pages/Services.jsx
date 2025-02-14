import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "Weddings",
    img: "src/assets/wedding1.jpeg",
  },
  { title: "Birthdays", img: "src/assets/birthday3.jpeg" },
  {
    title: "Corporate Events",
    img: "src/assets/corporate1.jpeg",
  },
  { title: "Baby Shower", img: "src/assets/baby-shower2.jpeg" },
];

const Services = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center">Our Services</h2>
      <Row className="mt-4">
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
