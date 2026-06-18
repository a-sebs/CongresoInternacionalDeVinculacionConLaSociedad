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
      <div className="bg-gray-light py-5 md:py-[26px] lg:py-8">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Cronograma
            </h1>
            <p className="text-sm text-body-color md:text-base lg:text-lg">
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
