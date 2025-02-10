import { Container, Row, Col, Card } from "react-bootstrap";

const testimonials = [
  {
    name: "Vansh Patel",
    text: "Souvenirs Events made my wedding day perfect! The decorations were beyond my expectations.",
    img: "src/assets/profile-demo.webp",
  },
  {
    name: "Nirish Tank",
    text: "Their team planned my corporate event flawlessly. Highly recommended!",
    img: "src/assets/profile-demo.webp",
  },
  {
    name: "Meet Dhameliya",
    text: "The birthday party decorations were amazing! My son loved every detail.",
    img: "src/assets/profile-demo.webp",
  },
];

const Testimonials = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={testimonial.img}
                className="rounded-circle mx-auto mt-3"
                style={{ width: "80px", height: "80px" }}
              />
              <Card.Body>
                <Card.Text>"{testimonial.text}"</Card.Text>
                <Card.Subtitle className="mt-2">
                  {testimonial.name}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
