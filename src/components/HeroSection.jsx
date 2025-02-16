import React, { useRef, useEffect, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import "./HeroSection.css";

const Logo = ({ logoRef, size, isMobile }) => {
  const logoTexture = useLoader(
    TextureLoader,
    "src/assets/01 white watermark.png"
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
      <Canvas
        className="canvas"
        camera={{ position: [0, 0, 2] }}
        style={{ height: "300px" }}
      >
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />

        {/* 3D Logo (spinning on mobile, responsive on desktop) */}
        <Logo logoRef={logoRef} size={logoSize} isMobile={isMobile} />
      </Canvas>

      <div className="hero-content">
        <p>Bringing your dream event to life.</p>
        <button className="btn-primary">Explore Events</button>
      </div>
    </div>
  );
};

export default HeroSection;
