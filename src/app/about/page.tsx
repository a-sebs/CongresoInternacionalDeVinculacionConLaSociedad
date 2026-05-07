import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cronograma | Cronograma de Desarrollo del Congreso",
  description: "Detalle del cronograma de actividades, conferencias y eventos relacionados con el IV Congreso Internacional de Vinculación con Sociedad - Conexión 2026.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cronograma"
        description="Detalle del cronograma de actividades, conferencias y eventos relacionados con el IV Congreso Internacional de Vinculación con Sociedad - Conexión 2026."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
