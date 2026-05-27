import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white"
      >
          {/* Imagen invisible para definir la altura de la sección */}
        <img
          src="/images/hero/hero.png"
          alt=""
          className="w-full h-auto block opacity-0"
        />
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 top-0 left-0 right-0 bottom-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero/hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </section>

      
    </>
  );
};

export default Hero;
