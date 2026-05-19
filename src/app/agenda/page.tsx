"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";

interface Activity {
  time: string;
  activity: string;
  theme: string;
  speaker: string;
}

const CongresosAgendaPage = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const day1Activities: Activity[] = [
    {
      time: "08:30 – 09:00",
      activity: "Registro e ingreso",
      theme: "",
      speaker: "",
    },
    {
      time: "09:00 – 09:30",
      activity: "Ceremonia de apertura",
      theme: "",
      speaker: "",
    },
    {
      time: "09:30 – 10:30",
      activity: "Conferencia magistral",
      theme: "Transferencia de conocimiento e innovación",
      speaker: "Ponente Internacional",
    },
    {
      time: "10:30 – 11:00",
      activity: "Coffee break",
      theme: "",
      speaker: "",
    },
    {
      time: "11:00 – 12:30",
      activity: "Foro con panelistas",
      theme: "Innovación para mejorar la calidad de vida",
      speaker: "Especialistas",
    },
    {
      time: "12:30 – 14:00",
      activity: "Almuerzo",
      theme: "",
      speaker: "",
    },
    {
      time: "14:00 – 15:00",
      activity: "Charla magistral",
      theme: "Transferencia Tecnológica",
      speaker: "Especialista",
    },
    {
      time: "15:00 – 16:00",
      activity: "Presentación de ponencias",
      theme: "Proyectos de transferencia y vinculación",
      speaker: "Ponentes seleccionados",
    },
    {
      time: "10:30 – 13:30",
      activity: "Feria de proyectos y servicios",
      theme: "Espacios de networking y difusión",
      speaker: "",
    },
  ];

  const day2Activities: Activity[] = [
    {
      time: "08:30 – 09:00",
      activity: "Registro e ingreso",
      theme: "",
      speaker: "",
    },
    {
      time: "09:00 – 10:00",
      activity: "Conferencias magistrales",
      theme: "Impacto social de la educación superior",
      speaker: "Conferencistas",
    },
    {
      time: "10:00 – 11:30",
      activity: "Foro con panelistas",
      theme: "Transformación del territorio",
      speaker: "Rectores y especialistas",
    },
    {
      time: "11:30 – 13:00",
      activity: "Almuerzo",
      theme: "",
      speaker: "",
    },
    {
      time: "13:00 – 14:45",
      activity: "Presentación de ponencias",
      theme: "Impacto social e innovación",
      speaker: "Ponentes seleccionados",
    },
    {
      time: "14:45 – 16:00",
      activity: "Cierre del evento",
      theme: "",
      speaker: "Autoridades",
    },
  ];

  return (
    <>

      {/* Bloque 2: Objetivo */}
      <section className="py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
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

      {/* Bloque 3: Público objetivo */}
      <section className="bg-gray-light py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
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

      {/* Bloque 4: Ejes temáticos */}
      <section className="py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <SectionTitle
            title="Ejes temáticos"
            paragraph="Temas centrales del congreso"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {/* Eje 1 */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="bg-primary/10 text-primary mb-10 flex h-[140px] w-[140px] items-center justify-center rounded-full mx-auto">
                  <Image
                    src="/images/brands/eje1.png"
                    alt="Innovación y Transferencia Tecnológica"
                    width={120}
                    height={120}
                    className="w-auto h-auto"
                  />
                </div>
                <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">
                  Innovación, Transferencia Tecnológica y Desarrollo
                </h3>
                <p className="text-body-color text-lg leading-relaxed font-medium text-center md:text-xl lg:text-2xl">
                  Vinculación, valorización del conocimiento y alianzas universidad–empresa–Estado.
                </p>
              </div>
            </div>
            {/* Eje 2 */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="bg-primary/10 text-primary mb-10 flex h-[140px] w-[140px] items-center justify-center rounded-full mx-auto">
                  <Image
                    src="/images/brands/eje2.png"
                    alt="Innovación Social e Impacto"
                    width={120}
                    height={120}
                    className="w-auto h-auto"
                  />
                </div>
                <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">
                  Innovación Social e Impacto en la Sociedad
                </h3>
                <p className="text-body-color text-lg leading-relaxed font-medium text-center md:text-xl lg:text-2xl">
                  Transformación social, proyectos participativos y desarrollo sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 7: Feria */}
      <section className="bg-gray-light py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-2 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
              Feria de proyectos y servicios
            </h2>
            <p className="mb-4 text-lg font-semibold text-primary">
              Espacio para visibilizar proyectos de vinculación y capacidades institucionales
            </p>
            <p className="mb-8 text-lg text-body-color md:text-xl lg:text-2xl">
              La feria contempla stands para proyectos de vinculación y para laboratorios o 
              servicios especializados, como un espacio de networking, difusión e interacción 
              entre instituciones y actores del entorno.
            </p>
            <Link
              href="/participa"
              className="rounded-xs bg-primary px-8 py-3 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 md:text-xl lg:text-2xl"
            >
              Postula a la feria
            </Link>
          </div>
        </div>
      </section>

      {/* Tabla de Agenda Detallada */}
      <section className="py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <h2 className="mb-8 text-center text-4xl font-bold text-black sm:text-5xl md:text-6xl">
            Agenda del Evento
          </h2>

          {/* Day Tabs */}
          <div className="mb-12 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveDay(1)}
              className={`rounded-lg px-6 py-3 font-semibold transition-all ${
                activeDay === 1
                  ? "bg-primary text-white shadow-lg"
                  : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
              }`}
            >
              28 de Octubre
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`rounded-lg px-6 py-3 font-semibold transition-all ${
                activeDay === 2
                  ? "bg-primary text-white shadow-lg"
                  : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
              }`}
            >
              29 de Octubre
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-4 text-left font-semibold text-gray-900 md:px-6">
                    Hora
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-gray-900 md:px-6">
                    Actividad
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-gray-900 md:px-6">
                    Tema
                  </th>
                </tr>
              </thead>
              <tbody>
                {(activeDay === 1 ? day1Activities : day2Activities).map(
                  (activity, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 md:px-6">
                        {activity.time}
                      </td>
                      <td className="px-4 py-4 text-gray-700 md:px-6">
                        {activity.activity}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 md:px-6">
                        {activity.theme}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center justify-center gap-100 sm:flex-row sm:gap-8 min-h-[250px]">
            <a
              href="https://docs.google.com/forms/..."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xs bg-primary px-8 sm:px-32 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Registrate Ahora
            </a>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default CongresosAgendaPage;
