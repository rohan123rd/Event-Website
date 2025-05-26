import React from "react";
import Gallery from "../components/Gallery";
import "../context/HoverUnderline.css";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h2 className="page-title text-center hover-underline-animation center">
        Gallery
      </h2>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
