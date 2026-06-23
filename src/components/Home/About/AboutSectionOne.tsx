const AboutSectionOne = () => {
  return (
    <>
      <section
        id="about"
        className="py-[26px] md:py-[48px]"
      >
        <div className="container relative z-10">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Column 1: ¿Por qué participar? */}
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-2xl font-bold leading-tight! text-black sm:text-3xl md:text-4xl lg:text-5xl text-center">
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
              <h2 className="mb-4 text-2xl font-bold leading-tight! text-black sm:text-3xl md:text-4xl lg:text-5xl text-center">
                Objetivo
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
