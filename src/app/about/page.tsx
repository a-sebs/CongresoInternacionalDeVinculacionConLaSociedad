import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cronograma | Cronograma de Desarrollo del Congreso",
  description: "Detalle del cronograma de actividades, conferencias y eventos relacionados con el IV Congreso Internacional de Vinculación con Sociedad - Conexión 2026.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-light py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
              Cronograma
            </h1>
            <p className="text-lg text-body-color md:text-xl lg:text-2xl">
              Detalle del cronograma de actividades, conferencias y eventos relacionados con el IV Congreso Internacional de Vinculación con Sociedad - Conexión 2026.
            </p>
          </div>
        </div>
      </div>
      <div id="sobre-congreso">
        <AboutSectionOne />
        <AboutSectionTwo />
      </div>
    </>
  );
};

export default AboutPage;
