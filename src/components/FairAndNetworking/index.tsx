import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const FairAndNetworking = () => {
  return (
    <section 
      id="fair" 
      className="py-16 md:py-20 lg:py-28"
      style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
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

            <div className="space-y-4 text-left">
              <p className="text-body-color">
                Espacio dedicado a exhibir proyectos y experiencias de vinculación
                de las instituciones participantes.
              </p>

              <div className="rounded-lg bg-white/50 p-4">
                <p className="mb-2 font-semibold text-black">
                  Incluye:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-base text-body-color">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-primary"></span>
                    <span>15 stands de proyectos de vinculación</span>
                  </li>
                  <li className="flex items-center text-base text-body-color">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-primary"></span>
                    <span>5 stands de laboratorios especializados</span>
                  </li>
                  <li className="flex items-center text-base text-body-color">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-primary"></span>
                    <span>Demostraciones de tecnología</span>
                  </li>
                </ul>
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
              Espacios de Networking
            </h3>

            <div className="space-y-4 text-left">
              <p className="text-body-color">
                Oportunidades diseñadas para establecer conexiones significativas
                entre academia, empresas e instituciones públicas.
              </p>

              <div className="rounded-lg bg-white/50 p-4">
                <p className="mb-2 font-semibold text-black">
                  Actividades:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-base text-body-color">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-primary"></span>
                    <span>Coffee breaks interactivos</span>
                  </li>
                  <li className="flex items-center text-base text-body-color">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-primary"></span>
                    <span>Mesas redondas temáticas</span>
                  </li>
                  <li className="flex items-center text-base text-body-color">
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-primary"></span>
                    <span>Encuentros B2B programados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FairAndNetworking;
