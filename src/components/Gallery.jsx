import Masonry from "./Masonry";

const data = [
  { id: 1, image: "/assets/aniversery.jpeg", height: 750 },
  { id: 2, image: "/assets/holi1.jpeg", height: 600 },
  { id: 3, image: "/assets/car1.jpeg", height: 700 },
  { id: 4, image: "/assets/ganpati1.jpeg", height: 600 },
  { id: 5, image: "/assets/birthday2.jpeg", height: 550 },
  { id: 6, image: "/assets/haldi2.jpeg", height: 600 },
  { id: 7, image: "/assets/wedding1.jpeg", height: 450 },
  { id: 8, image: "/assets/corporate1.jpeg", height: 500 },
  { id: 9, image: "/assets/birthday3.jpeg", height: 500 },
  { id: 10, image: "/assets/baby-shower1.jpeg", height: 550 },
  { id: 11, image: "/assets/engagement1.jpeg", height: 550 },
  { id: 12, image: "/assets/wedding2.jpeg", height: 550 },
  { id: 13, image: "/assets/baby-shower4.jpeg", height: 550 },
  { id: 14, image: "/assets/car2.jpeg", height: 500 },
  { id: 15, image: "/assets/engagement2.jpeg", height: 550 },
  { id: 16, image: "/assets/baby-shower2.jpeg", height: 550 },
  { id: 17, image: "/assets/festival1.jpeg", height: 700 },
  { id: 18, image: "/assets/haldi3.jpeg", height: 550 },
  { id: 20, image: "/assets/festival2.jpeg", height: 750 },
  { id: 21, image: "/assets/birthday5.jpeg", height: 850 },
  { id: 22, image: "/assets/baby-shower6.jpeg", height: 750 },
  { id: 23, image: "/assets/corporate2.jpeg", height: 550 },
  { id: 19, image: "/assets/corporate3.jpeg", height: 650 },
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
