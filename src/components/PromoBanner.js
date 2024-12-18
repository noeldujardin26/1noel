import React, { useState, useEffect } from "react";

const PromoBanner = () => {
  // Initialiser le timer à 12 heures (en secondes)
  const initialTime = 12 * 60 * 60; // 12 heures
  const [countdown, setCountdown] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timerInterval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval); // Nettoyer l'intervalle
  }, []);

  // Formater le temps en HH:MM:SS
  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="promo-banner">
      <marquee behavior="scroll" direction="left" scrollAmount="10" className="promo-banner__text">
        🎁 DESTOCKNOEL : Offre spéciale limitée ! Il reste{" "}
        <span className="timer-important">{formatTime(countdown)}</span> avant la fin de la promotion. Profitez-en maintenant ! 🎁
      </marquee>
    </div>
  );
};

export default PromoBanner;
