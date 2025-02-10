import { Container, Row, Col, Card } from "react-bootstrap";

const blogPosts = [
  {
    title: "Top Wedding Trends for 2025",
    image: "src/assets/profile-demo.webp",
    excerpt:
      "Discover the latest wedding decoration trends that will make your special day truly magical.",
    date: "Febraury 5, 2025",
  },
  {
    title: "How to Plan a Corporate Event",
    image: "/assets/blog2.jpg",
    excerpt:
      "Tips and tricks to organize a flawless corporate gathering with ease.",
    date: "January 28, 2025",
  },
  {
    title: "Baby Shower Themes You'll Love",
    image: "/assets/blog3.jpg",
    excerpt:
      "Creative and adorable baby shower decoration ideas for the greatest celebration.",
    date: "January 15, 2025",
  },
];

const Blog = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Latest Blogs</h2>
      <Row>
        {blogPosts.map((post, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <Card.Footer>
                  <small className="text-muted">{post.date}</small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
