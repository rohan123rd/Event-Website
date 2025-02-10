// import { Container, Row, Col, Modal } from "react-bootstrap";
// import { useState } from "react";

// const galleryImages = [
//   "/assets/gallery1.jpg",
//   "/assets/gallery2.jpg",
//   "/assets/gallery3.jpg",
//   "/assets/gallery4.jpg",
// ];

// const Gallery = () => {
//   const [show, setShow] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");

//   const handleShow = (image) => {
//     setSelectedImage(image);
//     setShow(true);
//   };

//   return (
//     <Container className="py-5">
//       <h2 className="text-center mb-4">Event Gallery</h2>
//       <Row>
//         {galleryImages.map((image, index) => (
//           <Col md={3} key={index} className="mb-4">
//             <img
//               src="{image}"
//               alt={`Gallery ${index + 1}`}
//               className="img-fluid rounded shadow"
//               onClick={() => handleShow(image)}
//               style={{ cursor: "pointer" }}
//             />
//           </Col>
//         ))}
//       </Row>

//       {/* Image Modal */}
//       <Modal show={show} onHide={() => setShow(false)} centered>
//         <Modal.Body className="text-center">
//           <img src="{selectedImage}" alt="Selected" className="img-fluid" />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default Gallery;

import React from "react";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1 className="page-title">Event Gallery</h1>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
