// import { Container, Row, Col, Modal } from "react-bootstrap";
// import { useState } from "react";

// const images = [
//   "/assets/gallery1.jpg",
//   "/assets/gallery2.jpg",
//   "/assets/gallery3.jpg",
//   "/assets/gallery4.jpg",
//   "/assets/gallery5.jpg",
//   "/assets/gallery6.jpg",
// ];

// const Gallery = () => {
//   const [show, setShow] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleShow = (image) => {
//     setSelectedImage(image);
//     setShow(true);
//   };

//   const handleClose = () => setShow(false);

//   return (
//     <Container className="py-5">
//       <h2 className="text-center mb-4">Our Gallery</h2>
//       <Row>
//         {images.map((img, index) => (
//           <Col md={4} key={index} className="mb-4">
//             <img
//               src={img}
//               alt="Event"
//               className="img-fluid rounded shadow"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleShow(img)}
//             />
//           </Col>
//         ))}
//       </Row>

//       {/* Modal for Image Preview */}
//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Body>
//           {selectedImage && (
//             <img
//               src={selectedImage}
//               alt="Selected"
//               className="img-fluid w-100"
//             />
//           )}
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

import React from "react";
import InfiniteMenu from "./InfiniteMenu";

const items = [
  {
    image: "src/assets/aniversery.jpeg",
    link: "https://google.com/",
    title: "Event 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/baby-shower3.jpeg",
    link: "https://google.com/",
    title: "Event 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/baby-shower2.jpeg",
    link: "https://google.com/",
    title: "Event 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/baby-shower1.jpeg",
    link: "https://google.com/",
    title: "Event 4",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/birthday1.jpeg",
    link: "https://google.com/",
    title: "Event 5",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/birthday2.jpeg",
    link: "https://google.com/",
    title: "Event 6",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/birthday3.jpeg",
    link: "https://google.com/",
    title: "Event 7",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/birthday4.jpeg",
    link: "https://google.com/",
    title: "Event 8",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/car1.jpeg",
    link: "https://google.com/",
    title: "Event 9",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/car2.jpeg",
    link: "https://google.com/",
    title: "Event 10",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/haldi1.jpeg",
    link: "https://google.com/",
    title: "Event 11",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/haldi2.jpeg",
    link: "https://google.com/",
    title: "Event 12",
    description: "This is pretty cool, right?",
  },
  {
    image: "src/assets/haldi3.jpeg",
    link: "https://google.com/",
    title: "Event 13",
    description: "This is pretty cool, right?",
  },
];

const Gallery = () => {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <InfiniteMenu items={items} />
    </div>
  );
};

export default Gallery;
