"use client";

import { useState } from "react";
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
      <Breadcrumb pageName="Congreso y Agenda" description="Conoce la programación del evento" />

      {/* Bloque 1: Presentación */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
              Congreso y Agenda
            </h1>
            <p className="mb-4 text-xl font-semibold text-primary">
              Un espacio académico para fortalecer la vinculación con la sociedad
            </p>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
              El congreso promueve el intercambio de experiencias, la articulación de funciones 
              sustantivas, la innovación, la transferencia tecnológica y la construcción de alianzas 
              entre universidades, empresas, actores públicos y sociedad civil.
            </p>
            <Link
              href="/participa"
              className="mt-8 inline-block rounded-xs bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Ver convocatoria general
            </Link>
          </div>
        </div>
      </section>

      {/* Bloque 2: Objetivo */}
      <section className="bg-gray-light py-16 dark:bg-gray-dark md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            <h2 className="mb-6 text-center text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
              Objetivo del congreso
            </h2>
            <p className="text-center text-lg leading-relaxed text-body-color dark:text-body-color-dark md:text-xl">
              Generar espacios de diálogo, intercambio académico y colaboración para fortalecer 
              la vinculación con la sociedad, desarrollar talento humano e impulsar la 
              internacionalización y la transferencia tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque 3: Público objetivo */}
      <section className="py-16 md:py-[120px]">
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
                <p className="font-semibold text-black dark:text-white text-base md:text-lg">
                  {target.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque 4: Ejes temáticos */}
      <section className="bg-gray-light py-16 dark:bg-gray-dark md:py-[120px]">
        <div className="container">
          <SectionTitle
            title="Ejes temáticos"
            paragraph="Temas centrales del congreso"
            center
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 dark:bg-gray-dark-2">
              <h3 className="mb-4 text-xl font-bold text-primary">
                Eje 1: Innovación, transferencia tecnológica y desarrollo
              </h3>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Vinculación, valorización del conocimiento y alianzas universidad–empresa–Estado.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 dark:bg-gray-dark-2">
              <h3 className="mb-4 text-xl font-bold text-primary">
                Eje 2: Innovación social e impacto de la vinculación
              </h3>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Transformación social, proyectos participativos y desarrollo sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 7: Feria */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-2 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
              Feria de proyectos y servicios
            </h2>
            <p className="mb-4 text-lg font-semibold text-primary">
              Espacio para visibilizar proyectos de vinculación y capacidades institucionales
            </p>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
              La feria contempla stands para proyectos de vinculación y para laboratorios o 
              servicios especializados, como un espacio de networking, difusión e interacción 
              entre instituciones y actores del entorno.
            </p>
            <Link
              href="/participa"
              className="rounded-xs bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Postula a la feria
            </Link>
          </div>
        </div>
      </section>

      {/* Bloque 8: Ponentes */}
      <section className="bg-gray-light py-16 dark:bg-gray-dark md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-2 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
              Ponentes y panelistas
            </h2>
            <p className="mb-4 text-lg font-semibold text-primary">
              Nacionales e internacionales
            </p>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Próximamente se publicará el listado oficial de conferencistas, panelistas y 
              moderadores del evento.
            </p>
            <Link
              href="#"
              className="mt-8 inline-block rounded-xs border border-primary px-8 py-3 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
            >
              Ver ponentes
            </Link>
          </div>
        </div>
      </section>

      {/* Tabla de Agenda Detallada */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <h2 className="mb-8 text-center text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
            Cronograma detallado
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
              Día 1
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`rounded-lg px-6 py-3 font-semibold transition-all ${
                activeDay === 2
                  ? "bg-primary text-white shadow-lg"
                  : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
              }`}
            >
              Día 2
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                  <th className="px-4 py-4 text-left font-semibold text-gray-900 dark:text-white md:px-6">
                    Hora
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-gray-900 dark:text-white md:px-6">
                    Actividad
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-gray-900 dark:text-white md:px-6">
                    Tema
                  </th>
                </tr>
              </thead>
              <tbody>
                {(activeDay === 1 ? day1Activities : day2Activities).map(
                  (activity, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50 ${
                        index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
                      }`}
                    >
                      <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 dark:text-white md:px-6">
                        {activity.time}
                      </td>
                      <td className="px-4 py-4 text-gray-700 dark:text-gray-300 md:px-6">
                        {activity.activity}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 md:px-6">
                        {activity.theme}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default CongresosAgendaPage;
