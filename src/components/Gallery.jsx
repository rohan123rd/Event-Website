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

import Masonry from "./Masonry";

const data = [
  { id: 1, image: "src/assets/aniversery.jpeg", height: 750 },
  { id: 2, image: "src/assets/holi1.jpeg", height: 600 },
  { id: 3, image: "src/assets/car1.jpeg", height: 700 },
  { id: 4, image: "src/assets/ganpati1.jpeg", height: 600 },
  { id: 5, image: "src/assets/birthday2.jpeg", height: 550 },
  { id: 6, image: "src/assets/haldi2.jpeg", height: 600 },
  { id: 7, image: "src/assets/wedding1.jpeg", height: 450 },
  { id: 8, image: "src/assets/corporate1.jpeg", height: 500 },
  { id: 9, image: "src/assets/birthday3.jpeg", height: 500 },
  { id: 10, image: "src/assets/baby-shower1.jpeg", height: 550 },
  { id: 11, image: "src/assets/engagement1.jpeg", height: 550 },
  { id: 12, image: "src/assets/wedding2.jpeg", height: 550 },
  { id: 13, image: "src/assets/baby-shower4.jpeg", height: 550 },
  { id: 14, image: "src/assets/car2.jpeg", height: 500 },
  { id: 15, image: "src/assets/engagement2.jpeg", height: 550 },
  { id: 16, image: "src/assets/baby-shower2.jpeg", height: 550 },
  { id: 17, image: "src/assets/festival1.jpeg", height: 700 },
  { id: 18, image: "src/assets/haldi3.jpeg", height: 550 },
];

const Gallery = () => {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Masonry data={data} />
    </div>
  );
};

export default Gallery;
