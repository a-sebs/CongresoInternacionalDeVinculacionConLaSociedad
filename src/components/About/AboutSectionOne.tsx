const AboutSectionOne = () => {
  return (
    <>
      <section
        id="about"
        className="py-16 md:py-[120px]"
      >
        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Column 1: ¿Por qué participar? */}
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl text-center">
                ¿Por qué participar?
              </h2>
              <p className="mb-6 text-lg font-semibold text-primary md:text-xl text-center">
                Diálogo, intercambio académico y articulación interinstitucional
              </p>
              <p className="text-sm leading-relaxed text-body-color md:text-base lg:text-lg text-justify">
                El congreso busca fortalecer la institucionalidad de la vinculación, impulsar la
                transferencia de conocimiento, promover la innovación y consolidar redes de cooperación
                entre instituciones de educación superior y actores del entorno.
              </p>
            </div>

            {/* Column 2: Objetivo del congreso */}
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl text-center">
                Objetivo del congreso
              </h2>
              <p className="mb-6 text-lg font-semibold text-primary md:text-xl text-center">
                Colaboración, transferencia y desarrollo de talento
              </p>
              <p className="text-sm leading-relaxed text-body-color md:text-base lg:text-lg text-justify">
                Generar espacios de diálogo, intercambio académico y colaboración para fortalecer
                la vinculación con la sociedad, desarrollar talento humano e impulsar la
                internacionalización y la transferencia tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
