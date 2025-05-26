import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomeGallery.css";

const HomeGallery = () => {
  const navigate = useNavigate();

  const galleryImages = [
    { id: 1, url: "src/assets/corporate3.jpeg" },
    { id: 2, url: "src/assets/wedding1.jpeg" },
    { id: 3, url: "src/assets/birthday3.jpeg" },
    { id: 4, url: "src/assets/haldi4.jpeg" },
    { id: 5, url: "src/assets/baby-shower2.jpeg" },
    { id: 6, url: "src/assets/frame1.jpeg" },
    // { id: 7, url: "src/assets/baby-shower3.jpeg" },
  ];

  const randomImages = [...galleryImages]
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  return (
    <Container className="py-5 text-center">
      <h2 className="mb-4 hover-underline-animation center">Gallery</h2>

      <Carousel className="home-gallery-carousel">
        {randomImages.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100 carousel-image"
              src={image.url}
              alt="Gallery"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="mt-4">
        <Button variant="primary" onClick={() => navigate("/gallery")}>
          View More
        </Button>
      </div>
    </Container>
  );
};

export default HomeGallery;
