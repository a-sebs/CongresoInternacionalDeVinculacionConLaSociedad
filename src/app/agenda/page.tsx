"use client";

import { useState } from "react";

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
      theme: "Apoyo logístico del equipo",
      speaker: "-",
    },
    {
      time: "09:00 – 09:30",
      activity: "Ceremonia de apertura (momento cultural)",
      theme: "Inauguración formal por parte de autoridades",
      speaker: "Rector EPN (Phd Traquino Sanchez), Presidenta Reuvic (Phd Ana Santos), Renseg, Caces, CES, MINEDUC",
    },
    {
      time: "09:30 – 10:30",
      activity: "Conferencia magistral 1",
      theme: "Transferencia de conocimiento e innovación desde la educación superior con énfasis en la vinculación con la sociedad",
      speaker: "Mgs. Jairo Castañeda (Ministerio de Defensa de Colombia)",
    },
    {
      time: "10:30 – 11:00",
      activity: "Coffee break",
      theme: "-",
      speaker: "-",
    },
    {
      time: "10:30 – 13:30",
      activity: "Feria de proyectos",
      theme: "Exposición de proyectos plazoleta EARME (10H00 Evento Inaugural)",
      speaker: "-",
    },
    {
      time: "11:00 – 12:00",
      activity: "Charla - Magistral 2",
      theme: "Transferencia Tecnológica: Innovar desde la generación de conocimiento.",
      speaker: "PhD. Héctor Hidalgo (Universidad Andrés Bello)",
    },
    {
      time: "12:00 – 13:30",
      activity: "Almuerzo",
      theme: "Libre",
      speaker: "-",
    },
    {
      time: "13:30 – 14:30",
      activity: "Foro Empresarial y Académico",
      theme: "Transferencia Tecnológica para el Desarrollo Territorial y Productivo",
      speaker: "-",
    },
    {
      time: "14:30 – 16:00",
      activity: "Presentación de pitch de investigadores",
      theme: "Resultados de impacto de proyectos de transferencia de conocimiento y vinculación",
      speaker: "Pitch – 6 Ponentes",
    },
    {
      time: "16:00 – 16:30",
      activity: "Reconocimientos proyectos",
      theme: "-",
      speaker: "-",
    },
  ];

  const day2Activities: Activity[] = [
    {
      time: "08:30 – 09:00",
      activity: "Registro e ingreso",
      theme: "-",
      speaker: "-",
    },
    {
      time: "09:00 – 10:00",
      activity: "Conferencia magistral 1",
      theme: "Impacto social de la educación superior desde la vinculación con la sociedad",
      speaker: "Presidenta CACES",
    },
    {
      time: "10:00 – 11:00",
      activity: "Conferencia magistral 2",
      theme: "Gestión del conocimiento para la generación de innovaciones sociales",
      speaker: "Expositor internacional 2 Parque científico de Innovación Social - Colombia",
    },
    {
      time: "11:00 – 12:30",
      activity: "Foro con 4 panelistas (RECTORES)",
      theme: "Innovación y transformación del territorio desde la articulación de las funciones sustantivas",
      speaker: "Director Vinculación IES (2), Beneficiarios de Proyectos (2). Moderadora: presidenta de RENSEG",
    },
    {
      time: "12:30 – 14:00",
      activity: "Almuerzo",
      theme: "-",
      speaker: "DIRECTORIO REUVIC / rectores y conferencistas",
    },
    {
      time: "14:00 – 15:45",
      activity: "Presentación de ponencias",
      theme: "Resultados de impacto de proyectos de transferencia de conocimiento y vinculación",
      speaker: "Pitch – 8 Ponentes",
    },
    {
      time: "15:45 – 16:00",
      activity: "Cierre",
      theme: "Palabras de Cierre EPN – Conclusiones generales",
      speaker: "Vicerrectorado de Investigación, Innovación y Vinculación / DIV",
    },
    {
      time: "16:00 – 16:20",
      activity: "Cierre",
      theme: "Evento artístico",
      speaker: "-",
    },
  ];

  return (
    <>
      {/* Tabla de Agenda Detallada */}
      <section
        id="agenda-congreso"
        className="py-16 md:py-[120px]"
      >
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            Agenda del Evento
          </h2>

          {/* Day Tabs */}
          <div className="mb-12 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveDay(1)}
              className={`rounded-lg px-6 py-3 font-semibold transition-all ${activeDay === 1
                  ? "bg-primary text-white shadow-lg"
                  : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
                }`}
            >
              28 de Octubre
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`rounded-lg px-6 py-3 font-semibold transition-all ${activeDay === 2
                  ? "bg-primary text-white shadow-lg"
                  : "border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
                }`}
            >
              29 de Octubre
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
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
                      className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
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
        </div>
      </section>

      {/* Bloque 7: Feria */}
      <section className="bg-gray-light py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Feria de proyectos y servicios
            </h2>
            <p className="mb-4 text-sm font-semibold text-primary">
              Espacio para visibilizar proyectos de vinculación y capacidades institucionales
            </p>
            <p className="mb-8 text-sm text-body-color md:text-base lg:text-lg text-justify">
              La feria contempla stands para proyectos de vinculación y para laboratorios o
              servicios especializados, como un espacio de networking, difusión e interacción
              entre instituciones y actores del entorno.
            </p>
            <div className="flex items-center justify-center min-h-32">
              <a
                href="https://forms.cloud.microsoft/r/CF7stCeNnM"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs bg-primary px-8 sm:px-32 py-6 sm:py-8 text-sm sm:text-base md:text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Postula a la feria
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CongresosAgendaPage;
