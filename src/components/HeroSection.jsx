import React, { useRef, useEffect, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import "./HeroSection.css";
import TextPressure from "../context/TextPressure";

const Logo = ({ logoRef, size, isMobile }) => {
  const logoTexture = useLoader(
    TextureLoader,
    "src/assets/02 black watermark.png"
  );

  useFrame(() => {
    if (isMobile && logoRef.current) {
      logoRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={logoRef}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={logoTexture} transparent={true} />
    </mesh>
  );
};

const HeroSection = () => {
  const logoRef = useRef();
  const [logoSize, setLogoSize] = useState([7, 3.5]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768);

      if (screenWidth > 768) {
        setLogoSize([7, 3.5]);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const handleMouseMove = (event) => {
    if (!isMobile && logoRef.current) {
      const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
      logoRef.current.rotation.x = mouseY * 0.1;
    }
  };
  return (
    <div className="hero" onMouseMove={handleMouseMove}>
      <video autoPlay loop muted playsInline className="hero-video">
        <source
          src="https://videos.pexels.com/video-files/4272430/4272430-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <img
        src="https://images.unsplash.com/photo-1612538946167-bc98c01732be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="hero-image-tablet"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1550512108-2c2184f5dac4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="hero-image-mobile"
        alt=""
      />

      {/* <Canvas
        className="canvas"
        camera={{ position: [0, 0, 2] }}
        style={{ height: "200px" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />

        <Logo logoRef={logoRef} size={logoSize} isMobile={isMobile} />
      </Canvas> */}

      <div
        style={{ position: "relative", height: "300px" }}
        className="hero-main-text"
      >
        <TextPressure
          text="Souvenirs Events"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={200}
        />
      </div>
      <div className="hero-main-text-mobile" style={{ position: "relative" }}>
        <h1>Souvenirs Events</h1>
      </div>

      <div className="hero-content">
        <p>Bringing your dream event to life.</p>
        <button className="btn-primary">Explore Events</button>
      </div>
    </div>
  );
};

export default HeroSection;
