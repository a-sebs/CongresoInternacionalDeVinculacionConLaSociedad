"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/images/hero/Principal.png",
    "/images/hero/Inscribete.png",
    "/images/hero/Postula.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play effect: se reinicia cuando currentIndex cambia o mientras se arrastra
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [currentIndex, isDragging, images.length]);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setCurrentX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || startX === null) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging || startX === null || currentX === null) {
      setIsDragging(false);
      setStartX(null);
      setCurrentX(null);
      return;
    }

    const diff = startX - currentX;
    const threshold = 50; // 50px de umbral para cambiar de imagen

    if (diff > threshold) {
      // Deslizar izquierda -> Siguiente
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (diff < -threshold) {
      // Deslizar derecha -> Anterior
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    setIsDragging(false);
    setStartX(null);
    setCurrentX(null);
  };

  const dragOffset = isDragging && startX !== null && currentX !== null ? currentX - startX : 0;

  return (
    <>
      <section
        id="home"
        className={`relative z-10 overflow-hidden bg-white w-full select-none touch-pan-y ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        {/* Imagen invisible para definir la altura responsiva de la sección */}
        <img
          src={images[0]}
          alt="Congreso Banner"
          className="w-full h-auto block opacity-0 pointer-events-none"
        />

        {/* Contenedor del Slider */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {images.map((image, index) => {
            let position = "nextSlide";
            if (index === currentIndex) {
              position = "activeSlide";
            } else if (
              index === currentIndex - 1 ||
              (currentIndex === 0 && index === images.length - 1)
            ) {
              position = "prevSlide";
            }

            // Configurar los estilos durante el arrastre
            let transformStyle = "";
            let opacityStyle = 0;
            let zIndexStyle = 0;

            if (position === "activeSlide") {
              transformStyle = `translateX(${dragOffset}px) scale(${
                1 - Math.abs(dragOffset) / 5000
              }) rotate(${dragOffset / 100}deg)`;
              opacityStyle = 1 - Math.abs(dragOffset) / 1000;
              zIndexStyle = 10;
            } else if (position === "prevSlide") {
              const progress = Math.min(Math.max(dragOffset / 300, 0), 1);
              transformStyle = `scale(${0.95 + progress * 0.05}) rotate(${
                -2 + progress * 2
              }) translateX(${-10 + progress * 10}%)`;
              opacityStyle = progress;
              zIndexStyle = dragOffset > 0 ? 9 : 0;
            } else {
              const progress = Math.min(Math.max(-dragOffset / 300, 0), 1);
              transformStyle = `scale(${0.95 + progress * 0.05}) rotate(${
                2 - progress * 2
              }) translateX(${10 - progress * 10}%)`;
              opacityStyle = progress;
              zIndexStyle = dragOffset < 0 ? 9 : 0;
            }

            return (
              <div
                key={image}
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all ease-out"
                style={{
                  backgroundImage: `url(${image})`,
                  transitionDuration: isDragging ? "0ms" : "1200ms",
                  opacity: opacityStyle,
                  transform: transformStyle,
                  zIndex: zIndexStyle,
                }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
