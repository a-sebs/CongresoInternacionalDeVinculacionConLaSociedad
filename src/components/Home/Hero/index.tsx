"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const images = [
    "/images/hero/Principal.png",
    "/images/hero/Inscribete.png",
    "/images/hero/Postula.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

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
    } else if (Math.abs(diff) < 5) {
      // Es un click
      if (images[currentIndex] === "/images/hero/Inscribete.png") {
        setShowDialog(true);
      } else if (images[currentIndex] === "/images/hero/Postula.png") {
        router.push("/agenda#ponencia");
      }
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
          isDragging 
            ? "cursor-grabbing" 
            : (images[currentIndex] === "/images/hero/Inscribete.png" || images[currentIndex] === "/images/hero/Postula.png" ? "cursor-pointer" : "cursor-grab")
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

      {/* Cuadro de Diálogo de Confirmación */}
      {showDialog && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity backdrop-blur-sm bg-white/10">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl border border-gray-100 transform transition-transform">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Registro a Feria de Proyectos
            </h3>
            <p className="text-body-color mb-8 text-base">
              Estás a punto de ser redirigido al formulario oficial de registro para la feria de proyectos. ¿Deseas continuar?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowDialog(false)}
                className="px-6 py-3 rounded-md border-2 border-gray-200 text-black hover:border-gray-300 hover:bg-gray-50 font-bold transition-all w-full sm:w-auto"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowDialog(false);
                  window.open("https://forms.cloud.microsoft/r/CF7stCeNnM", "_blank", "noopener,noreferrer");
                }}
                className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 hover:shadow-lg font-bold transition-all w-full sm:w-auto"
              >
                Ir al formulario
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
