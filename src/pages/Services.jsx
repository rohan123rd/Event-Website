import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "Weddings",
    img: "https://www.brides.com/thmb/YmbgQGVP72ox-iL3wARX2BvY6Kc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__5bb64a4ab2e7ef506361bb51__11-57fb9d6a4fbb4a43a0cad00bcc7fb6c9.jpeg",
  },
  { title: "Birthdays", img: "src/assets/Gallery/birthday.webp" },
  {
    title: "Corporate Events",
    img: "src/assets/Gallery/corporate.jpg",
  },
  { title: "Baby Shower", img: "src/assets/Gallery/baby-shower.webp" },
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
