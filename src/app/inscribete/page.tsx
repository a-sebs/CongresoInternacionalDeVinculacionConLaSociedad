"use client";

import { useState } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";

const ParticipaPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("direccion.vinculacion@epn.edu.ec");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Bloque 1: Inscripción general */}
      <section
        id="inscripcion"
        className="py-16 md:py-[120px]"
      >
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                Inscripción al congreso
              </h2>
              <p className="mb-4 text-sm font-semibold text-primary">
                Registro para asistentes y participantes del evento
              </p>
              <p className="text-sm text-body-color md:text-base lg:text-lg text-justify">
                Completa tu registro para participar en las actividades académicas,
                la agenda del congreso y los espacios de articulación.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="rounded-xs bg-primary px-8 sm:px-32 py-6 sm:py-8 text-sm sm:text-base md:text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Inscríbete al congreso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 2: Pago en línea */}
      <section className="bg-gray-light py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Pago de inscripción
            </h2>
            <p className="mb-4 text-sm font-semibold text-primary">
              Accede a tarifas, categorías e instrucciones de pago
            </p>
            <p className="mb-8 text-sm text-body-color md:text-base lg:text-lg text-justify">
              Esta sección permitirá realizar el pago en línea y validar la participación en el
              congreso, una vez se definan oficialmente las tarifas.
            </p>
            <div className="flex items-center justify-center gap-6 min-h-32 flex-wrap">
              <a
                href="/inscribete"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs bg-primary px-8 sm:px-32 py-6 sm:py-8 text-sm sm:text-base md:text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Realiza tu pago
              </a>
              <a
                href="/inscribete"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs border-2 border-primary bg-white px-8 sm:px-32 py-6 sm:py-8 text-sm sm:text-base md:text-lg font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10 whitespace-nowrap text-center"
              >
                Ver tarifas
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Bloque 3: Postulación a la feria */}
      <section
        id="feria"
        className="py-16 md:py-[120px]"
      >
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                Postulación a la feria
              </h2>
              <p className="mb-4 text-sm font-semibold text-primary">
                Proyectos de vinculación, laboratorios y servicios especializados
              </p>
              <p className="text-sm text-body-color mb-8 md:text-base lg:text-lg text-justify">
                Espacio para iniciativas institucionales que busquen visibilizar capacidades,
                resultados y oportunidades de articulación.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <a
                href="https://forms.cloud.microsoft/r/CF7stCeNnM"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs bg-primary px-8 sm:px-32 py-6 sm:py-8 text-sm sm:text-base md:text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Postula a la Feria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 4: Fechas clave */}
      <section className="bg-gray-light py-16 md:py-[120px]">
        <div className="container">
          <SectionTitle
            title="Fechas importantes"
            paragraph="Convocatorias y participación"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Apertura de postulación de ponencias",
              "Cierre de postulación de ponencias",
              "Apertura de postulación a feria",
              "Cierre de postulación a feria",
              "Notificación de resultados",
            ].map((date, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 text-center"
              >
                <p className="text-sm font-semibold text-body-color md:text-base lg:text-lg">
                  {date}
                </p>
                <p className="mt-2 text-sm font-bold text-primary">Por definir</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque 5: Contacto */}
      <section
        id="contacto"
        className="py-16 md:py-[120px]"
      >
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-2 text-lg font-bold text-black md:text-xl">
              Contacto
            </h2>
            <p className="mb-8 text-sm font-semibold text-primary">
              Consultas sobre inscripciones, ponencias, feria, pagos y auspicios
            </p>

            {copied && (
              <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-700">
                Correo copiado al portapapeles
              </div>
            )}

            <div className="space-y-8">
              {/* Sección de Correo */}
              <div>
                <p className="mb-4 text-sm font-semibold text-black md:text-base lg:text-lg">
                  Correo electrónico
                </p>
                <button
                  onClick={handleCopyEmail}
                  className="group relative inline-flex items-center gap-3 rounded-lg border-2 border-primary bg-white px-6 py-4 text-sm font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10 md:text-base lg:text-lg"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{copied ? "✓ Copiado" : "direccion.vinculacion@epn.edu.ec"}</span>
                </button>
              </div>

              {/* Sección de Teléfono */}
              <div>
                <p className="mb-4 text-sm font-semibold text-black md:text-base lg:text-lg">
                  Teléfono
                </p>
                <p className="text-sm text-body-color md:text-base lg:text-lg">
                  xxx xxxx
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParticipaPage;
