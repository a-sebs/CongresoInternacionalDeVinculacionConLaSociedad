import AgendaTable from "@/components/Agenda/AgendaTable";

export default function CongresosAgendaPage() {
  return (
    <>
      {/* Tabla de Agenda Detallada */}
      <section
        id="agenda-congreso"
        className="py-[26px] md:py-[48px]"
      >
        <AgendaTable />
      </section>

      {/* Bloque 7: Feria */}
      <section className="bg-gray-light py-5 md:py-[36px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Feria de proyectos y servicios
            </h2>
            <p className="mb-8 text-sm text-body-color md:text-base lg:text-lg text-justify">
              La feria contempla stands para proyectos de vinculación y para laboratorios o
              centros de servicios especializados, como un espacio de networking, difusión e interacción
              entre instituciones y actores del entorno.
            </p>
            <div className="flex items-center justify-center min-h-32">
              <a
                href="https://forms.cloud.microsoft/r/CF7stCeNnM"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs bg-primary px-8 sm:px-16 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Postula
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 8: Ponencia */}
      <section className="py-5 md:py-[36px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Ponencia de proyectos de vinculación o transferencia tecnológica
            </h2>
            <p className="mb-8 text-sm text-body-color md:text-base lg:text-lg text-justify">
              Espacio destinado a la presentación de proyectos y experiencias de vinculación con la sociedad y transferencia tecnológica mediante la modalidad de pitch, donde los participantes expondrán de manera breve y dinámica los principales objetivos, resultados, impactos y lecciones aprendidas de sus iniciativas, promoviendo el intercambio de conocimientos y la generación de oportunidades de colaboración.
            </p>
            <div className="flex items-center justify-center min-h-32">
              <a
                href="#"
                className="rounded-xs bg-primary px-8 sm:px-16 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Postula
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
