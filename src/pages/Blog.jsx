import { Container, Row, Col, Card } from "react-bootstrap";
import "../context/HoverUnderline.css";

const blogPosts = [
  {
    title: "Top 10 Wedding Trends in 2024",
    img: "src/assets/profile-demo.webp",
    description: "Discover the latest wedding decoration trends for 2024...",
  },
  {
    title: "How to Plan a Corporate Event",
    img: "/assets/blog2.jpg",
    description:
      "Step-by-step guide to organizing a successful corporate event...",
  },
  {
    title: "Birthday Party Themes for Kids",
    img: "/assets/blog3.jpg",
    description: "Explore fun and creative birthday party themes for kids...",
  },
];

const Blog = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 hover-underline-animation center">
        Our Blog
      </h2>
      <Row>
        {blogPosts.map((post, index) => {
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={post.img} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </Card.Body>
            </Card>
          </Col>;
        })}
      </Row>
    </Container>
  );
  Reactcmd;
};

export default Blog;
