import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section 
      id="about" 
      className="relative bg-gray-light py-16 md:py-[120px]"
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
          <p className="mb-8 text-lg leading-relaxed text-body-color md:text-xl">
            El congreso busca fortalecer la institucionalidad de la vinculación, impulsar la 
            transferencia de conocimiento, promover la innovación y consolidar redes de cooperación 
            entre instituciones de educación superior y actores del entorno.
          </p>
          <Link
            href="/agenda"
            className="inline-block rounded-xs bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Conoce el congreso
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
