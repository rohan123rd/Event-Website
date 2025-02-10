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
    image: "https://picsum.photos/300/300",
    link: "https://google.com/",
    title: "Event 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400",
    link: "https://google.com/",
    title: "Event 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500",
    link: "https://google.com/",
    title: "Event 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600",
    link: "https://google.com/",
    title: "Event 4",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/700/700",
    link: "https://google.com/",
    title: "Event 5",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/800/800",
    link: "https://google.com/",
    title: "Event 6",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/900/900",
    link: "https://google.com/",
    title: "Event 7",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/1000/1000",
    link: "https://google.com/",
    title: "Event 8",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/1100/1100",
    link: "https://google.com/",
    title: "Event 9",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/1200/1200",
    link: "https://google.com/",
    title: "Event 10",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/1300/1300",
    link: "https://google.com/",
    title: "Event 11",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/1400/1400",
    link: "https://google.com/",
    title: "Event 12",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/1500/1500",
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
