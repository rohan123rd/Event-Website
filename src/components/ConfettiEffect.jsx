import React, { useEffect } from "react";
import Confetti from "canvas-confetti";

const ConfettiEffect = () => {
  useEffect(() => {
    const confettiSettings = {
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    };

    Confetti(confettiSettings);
  }, []);

  return null;
};

export default ConfettiEffect;
