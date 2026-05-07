import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark"
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

      {/* Sección de botones CTA */}
      <section 
        className="relative bg-white dark:bg-gray-dark py-32 md:py-48 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url(/images/hero/background_portal_transparente_2.png)',
        }}
      >
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <a
              href="https://docs.google.com/forms/..."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs bg-primary px-32 py-8 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Inscríbete
            </a>
            <a
              href="https://docs.google.com/forms/..."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs bg-primary px-32 py-8 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Postula tu Ponencia
            </a>
            <a
              href="https://docs.google.com/forms/..."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs bg-primary px-32 py-8 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Postula a la Feria
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
