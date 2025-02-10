import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import "./HeroSection.css";

const HeroSection = () => {
  const textRef = useRef();

  const handleMouseMove = (event) => {
    const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;

    if (textRef.current) {
      textRef.current.rotation.y = mouseX * 0.2;
      textRef.current.rotation.x = mouseY * 0.1;
    }
  };

  return (
    <div className="hero" onMouseMove={handleMouseMove}>
      <Canvas className="canvas" camera={{ position: [0, 0, 2.5] }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />

        {/* 3D Text */}
        <Text
          ref={textRef}
          fontSize={0.4}
          color="gold"
          anchorX="center"
          anchorY="middle"
          material-toneMapped={false}
        >
          Welcome to Souvenirs Events
        </Text>
      </Canvas>

      <div className="hero-content">
        <p>Bringing your dream event to life.</p>
        <button className="btn-primary">Explore Events</button>
      </div>
    </div>
  );
};

export default HeroSection;
