import React from "react";
import "./Loader.css";

const Loader = () => {
  const text = "SOUVENIRS*EVENTS*";

  return (
    <div className="loader-container">
      <div className="circle-text">
        {text.split("").map((char, i) => (
          <span
            key={i}
            style={{ transform: `rotate(${i * (360 / text.length)}deg)` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
