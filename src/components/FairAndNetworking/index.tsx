import SectionTitle from "../Common/SectionTitle";

const FairAndNetworking = () => {
  return (
    <section id="fair" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Espacios Especiales"
          paragraph="Espacios únicos diseñados para fortalecer conexiones y generar oportunidades de colaboración."
          center
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feria de Proyectos */}
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 dark:border-primary/40 dark:from-primary/20 dark:to-primary/10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="text-primary"
              >
                <path d="M16 2C8.27 2 2 8.27 2 16s6.27 14 14 14 14-6.27 14-14S23.73 2 16 2zm0 26c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12zm3.5-9h-7v2h7v-2zm0-4h-7v2h7v-2zm0-4h-7v2h7v-2z" />
              </svg>
            </div>

            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Feria de Proyectos
            </h3>

            <div className="space-y-4">
              <p className="text-body-color dark:text-body-color-dark">
                Espacio dedicado a exhibir proyectos y experiencias de vinculación
                de las instituciones participantes.
              </p>

              <div className="rounded-lg bg-white/50 p-4 dark:bg-gray-800">
                <p className="mb-2 font-semibold text-black dark:text-white">
                  Incluye:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-body-color dark:text-body-color-dark">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>15 stands de proyectos de vinculación</span>
                  </li>
                  <li className="flex items-center text-sm text-body-color dark:text-body-color-dark">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>5 stands de laboratorios especializados</span>
                  </li>
                  <li className="flex items-center text-sm text-body-color dark:text-body-color-dark">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>Demostraciones de tecnología</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Networking */}
          <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 dark:border-primary/40 dark:from-primary/20 dark:to-primary/10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="text-primary"
              >
                <path d="M16 15c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Espacios de Networking
            </h3>

            <div className="space-y-4">
              <p className="text-body-color dark:text-body-color-dark">
                Oportunidades diseñadas para establecer conexiones significativas
                entre academia, empresas e instituciones públicas.
              </p>

              <div className="rounded-lg bg-white/50 p-4 dark:bg-gray-800">
                <p className="mb-2 font-semibold text-black dark:text-white">
                  Actividades:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-body-color dark:text-body-color-dark">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>Coffee breaks interactivos</span>
                  </li>
                  <li className="flex items-center text-sm text-body-color dark:text-body-color-dark">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span>Mesas redondas temáticas</span>
                  </li>
                  <li className="flex items-center text-sm text-body-color dark:text-body-color-dark">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
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
