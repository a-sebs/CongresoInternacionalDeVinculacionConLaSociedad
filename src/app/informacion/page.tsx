"use client";

import { useState } from "react";
import AgendaTable from "@/components/Agenda/AgendaTable";

export default function CongresosAgendaPage() {
  const [showFeriaDialog, setShowFeriaDialog] = useState(false);
  const [showLineamientosDialog, setShowLineamientosDialog] = useState(false);
  const [showPosteresDialog, setShowPosteresDialog] = useState(false);

  return (
    <>
      {/* Tabla de Agenda Detallada */}
      <section
        id="agenda-congreso"
        className="py-[26px] md:py-[48px]"
      >
        <AgendaTable />
      </section>

      {/* Bloque 7: Feria */}
      <section id="feria" className="bg-gray-light py-5 md:py-[36px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Feria de proyectos y servicios
            </h2>
            <p className="mb-8 text-sm text-body-color md:text-base lg:text-lg text-justify">
              La feria contempla stands para proyectos de vinculación y para laboratorios o
              centros de servicios especializados, como un espacio de networking, difusión e interacción
              entre instituciones y actores del entorno.
            </p>
            <div className="flex items-center justify-center min-h-32">
              <button
                onClick={() => setShowFeriaDialog(true)}
                className="rounded-xs bg-primary px-8 sm:px-16 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Postula
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 8: Ponencia */}
      <section id="ponencia" className="py-5 md:py-[36px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Ponencia de proyectos de vinculación o transferencia tecnológica
            </h2>
            <p className="mb-8 text-sm text-body-color md:text-base lg:text-lg text-justify">
              Espacio destinado a la presentación de proyectos y experiencias de vinculación con la sociedad y transferencia tecnológica mediante la modalidad de pitch, donde los participantes expondrán de manera breve y dinámica los principales objetivos, resultados, impactos y lecciones aprendidas de sus iniciativas, promoviendo el intercambio de conocimientos y la generación de oportunidades de colaboración.
            </p>
            <div className="flex items-center justify-center min-h-32">
              <button
                onClick={() => setShowLineamientosDialog(true)}
                className="rounded-xs bg-primary px-8 sm:px-16 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Lineamientos de participación
              </button>
            </div>
            <p className="mt-4 text-sm text-body-color md:text-base lg:text-lg text-center">Fecha maxima de postulación <strong>25 de septiembre del 2026</strong></p>
          </div>
        </div>
      </section>

      {/* Bloque 9: Pósteres Virtuales */}
      <section id="posteres" className="bg-gray-light py-5 md:py-[36px]">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Pósteres Virtuales
            </h2>
            <div className="flex items-center justify-center min-h-32">
              <button
                onClick={() => setShowPosteresDialog(true)}
                className="rounded-xs bg-primary px-8 sm:px-16 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Descarga el documento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cuadro de Diálogo - Feria de proyectos */}
      {showFeriaDialog && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity backdrop-blur-sm bg-white/10">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl border border-gray-100 transform transition-transform">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Registro a Feria de Proyectos
            </h3>
            <p className="text-body-color mb-8 text-base">
              Estás a punto de ser redirigido al formulario oficial de registro para la feria de proyectos. ¿Deseas continuar?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowFeriaDialog(false)}
                className="px-6 py-3 rounded-md border-2 border-gray-200 text-black hover:border-gray-300 hover:bg-gray-50 font-bold transition-all w-full sm:w-auto"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowFeriaDialog(false);
                  window.open("https://forms.cloud.microsoft/r/CF7stCeNnM", "_blank", "noopener,noreferrer");
                }}
                className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 hover:shadow-lg font-bold transition-all w-full sm:w-auto"
              >
                Ir al formulario
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cuadro de Diálogo - Lineamientos */}
      {showLineamientosDialog && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity backdrop-blur-sm bg-white/10">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl border border-gray-100 transform transition-transform">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Descarga de Lineamientos
            </h3>
            <p className="text-body-color mb-8 text-base">
              Estás a punto de descargar el documento oficial de lineamientos para la convocatoria de ponencias. ¿Deseas continuar?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowLineamientosDialog(false)}
                className="px-6 py-3 rounded-md border-2 border-gray-200 text-black hover:border-gray-300 hover:bg-gray-50 font-bold transition-all w-full sm:w-auto"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowLineamientosDialog(false);
                  const link = document.createElement("a");
                  link.href = "/docs/Lineamientos_Convoctaroria_Ponencias.pdf";
                  link.download = "Lineamientos_Convoctaroria_Ponencias.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 hover:shadow-lg font-bold transition-all w-full sm:w-auto"
              >
                Descargar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cuadro de Diálogo - Pósteres Virtuales */}
      {showPosteresDialog && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity backdrop-blur-sm bg-white/10">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl border border-gray-100 transform transition-transform">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Descarga de Documento
            </h3>
            <p className="text-body-color mb-8 text-base">
              Estás a punto de descargar el documento oficial para pósteres virtuales. ¿Deseas continuar?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowPosteresDialog(false)}
                className="px-6 py-3 rounded-md border-2 border-gray-200 text-black hover:border-gray-300 hover:bg-gray-50 font-bold transition-all w-full sm:w-auto"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowPosteresDialog(false);
                  const link = document.createElement("a");
                  link.href = "/docs/Lineamientos_Convoctaroria_Pósteres.pdf";
                  link.download = "Lineamientos_Convoctaroria_Pósteres.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 hover:shadow-lg font-bold transition-all w-full sm:w-auto"
              >
                Descargar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
