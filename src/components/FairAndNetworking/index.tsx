import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const FairAndNetworking = () => {
  return (
    <section
      id="fair"
      className="bg-gray-light py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Espacios Especiales"
          paragraph="Espacios únicos diseñados para fortalecer conexiones y generar oportunidades de colaboración."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feria de Proyectos */}
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
            <div className="mb-6 flex h-25 w-25 items-center justify-center rounded-full bg-primary/20 mx-auto">
              <Image
                src="/images/brands/icono_feria_proyectos.png"
                alt="Feria de Proyectos"
                width={60}
                height={60}
              />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              Feria de Proyectos
            </h3>

            <div className="space-y-4 text-center">
              <p className="text-body-color">
                Espacio dedicado a exhibir proyectos y experiencias de vinculación
                de las instituciones participantes.
              </p>

              <div className="flex items-center justify-center min-h-45">
                <a
                  href="/participa#feria"
                  className="rounded-xs bg-primary px-8 sm:px-20 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
                >
                  Ver más
                </a>
              </div>

            </div>

          </div>

          {/* Networking */}
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
            <div className="mb-6 flex h-25 w-25 items-center justify-center rounded-full bg-primary/20 mx-auto">
              <Image
                src="/images/brands/icono_espacios_networking.png"
                alt="Espacios de Networking"
                width={60}
                height={60}
              />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-black md:text-4xl">
              Foros y ponencias
            </h3>

            <div className="space-y-4 text-center">
              <p className="text-body-color">
                Espacio para la presentación de ponencias y foros de discusión
              </p>

              <div className="flex items-center justify-center min-h-45">
                <a
                  href="/panelistas#ponentes-panelistas"
                  className="rounded-xs bg-primary px-8 sm:px-20 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FairAndNetworking;
