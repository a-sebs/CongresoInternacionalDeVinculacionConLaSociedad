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

      {/* Bloque 2: Objetivo (Movido de Congreso y Agenda) */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            <h2 className="mb-6 text-center text-4xl font-bold text-black sm:text-5xl md:text-6xl">
              Objetivo del congreso
            </h2>
            <p className="text-center text-lg leading-relaxed text-body-color md:text-xl lg:text-2xl">
              Generar espacios de diálogo, intercambio académico y colaboración para fortalecer 
              la vinculación con la sociedad, desarrollar talento humano e impulsar la 
              internacionalización y la transferencia tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque 3: Público objetivo (Movido de Congreso y Agenda) */}
      <section className="bg-gray-light py-16 md:py-[120px]">
        <div className="container">
          <SectionTitle
            title="¿A quién está dirigido?"
            paragraph=""
            center
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Docentes y gestores de vinculación", icon: "docentes.png" },
              { label: "Investigadores y gestores de transferencia", icon: "investigadores.png" },
              { label: "Estudiantes", icon: "estudiantes.png" },
              { label: "Empresas e instituciones públicas", icon: "empresas.png" },
              { label: "Universidades y actores sociales", icon: "universidades.png" },
            ].map((target, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-primary p-8 w-56 h-56 flex items-center justify-center">
                    <img src={`/images/brands/${target.icon}`} alt={target.label} className="h-40 w-40 object-contain" />
                  </div>
                </div>
                <p className="font-semibold text-black text-lg md:text-xl lg:text-2xl">
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
