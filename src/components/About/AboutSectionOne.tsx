import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <>
      
      <section 
      id="about" 
      className="py-16 md:py-[120px]"
      style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container relative z-10">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            ¿Por qué participar?
          </h2>
          <p className="mb-6 text-2xl font-semibold text-primary md:text-3xl">
            Diálogo, intercambio académico y articulación interinstitucional
          </p>
          <p className="mb-8 text-lg leading-relaxed text-body-color md:text-xl lg:text-2xl">
            El congreso busca fortalecer la institucionalidad de la vinculación, impulsar la 
            transferencia de conocimiento, promover la innovación y consolidar redes de cooperación 
            entre instituciones de educación superior y actores del entorno.
          </p>
          <div className="flex items-center justify-center min-h-45">
            <a
              href="/agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs bg-primary px-8 sm:px-32 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
            >
              Conoce al congreso
            </a>
          </div>
        </div>
      </div>
    </section>
    <section 
        className="bg-gray-light py-32 md:py-48 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <a
              href="https://docs.google.com/forms/..."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs bg-primary px-8 sm:px-32 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Inscríbete
            </a>
            <a
              href="https://docs.google.com/forms/..."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs bg-primary px-8 sm:px-32 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Postula a la Feria
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
