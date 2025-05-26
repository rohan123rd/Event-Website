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
  { id: 20, image: "src/assets/festival2.jpeg", height: 750 },
  { id: 21, image: "src/assets/birthday5.jpeg", height: 850 },
  { id: 22, image: "src/assets/baby-shower6.jpeg", height: 750 },
  { id: 23, image: "src/assets/corporate2.jpeg", height: 550 },
  { id: 19, image: "src/assets/corporate3.jpeg", height: 650 },
];

const Gallery = () => {
  return (
    <div
      style={{ height: "100%", position: "relative", paddingBottom: "20px" }}
    >
      <Masonry data={data} />
    </div>
  );
};

export default Gallery;
