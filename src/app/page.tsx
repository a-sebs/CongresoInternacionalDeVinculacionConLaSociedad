import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IV Congreso Internacional de Vinculación con Sociedad - Conexión 2026",
  description: "Articulación, Innovación e Impacto. 28 y 29 de octubre de 2026. EPN y Centro de convenciones Eugenio Espejo.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />

      {/* Bloque 3: Público objetivo (Movido de Congreso y Agenda) */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <SectionTitle
            title="¿A quién está dirigido?"
            paragraph=""
            center
          />
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-6 xs:gap-x-4 md:gap-8 lg:grid lg:grid-cols-5 lg:gap-8">
            {[
              { label: "Docentes y gestores de vinculación", icon: "docentes.png" },
              { label: "Investigadores y gestores de transferencia", icon: "investigadores.png" },
              { label: "Estudiantes", icon: "estudiantes.png" },
              { label: "Empresas e instituciones públicas", icon: "empresas.png" },
              { label: "Universidades y actores sociales", icon: "universidades.png" },
            ].map((target, index) => (
              <div key={index} className="text-center flex flex-col items-center w-[31%] xs:w-[29%] md:w-[45%] lg:w-auto">
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-primary flex items-center justify-center w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] md:w-36 md:h-36 lg:w-56 lg:h-56 p-3 xs:p-4 md:p-6 lg:p-8">
                    <img src={`/images/brands/${target.icon}`} alt={target.label} className="w-[60px] h-[60px] xs:w-[70px] xs:h-[70px] md:h-24 md:w-24 lg:h-40 lg:w-40 object-contain" />
                  </div>
                </div>
                <p className="font-semibold text-black text-[11px] xs:text-xs md:text-sm lg:text-lg">
                  {target.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Brands />
    </>
  );
}
