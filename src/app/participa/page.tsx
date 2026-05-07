"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";

const ParticipaPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Breadcrumb pageName="Participa" description="Explora las diferentes formas de participar en Conexión 2026" />
      
      {/* Bloque 1: Introducción */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
              Participa en Conexión 2026
            </h1>
            <p className="mb-4 text-xl text-body-color dark:text-body-color-dark">
              Inscripción, postulación de ponencias, feria y pago en un solo lugar.
            </p>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Aquí encontrarás los accesos para registrarte como asistente, postular una ponencia, 
              aplicar a la feria y realizar tu pago en línea.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque 2: Inscripción general */}
      <section className="bg-gray-light py-16 dark:bg-gray-dark md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
                Inscripción al congreso
              </h2>
              <p className="mb-4 text-lg font-semibold text-primary">
                Registro para asistentes y participantes del evento
              </p>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Completa tu registro para participar en las actividades académicas, 
                la agenda del congreso y los espacios de articulación.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="rounded-xs bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Inscríbete al congreso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 3: Postulación a ponencias */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
                Postulación a ponencias
              </h2>
              <p className="mb-4 text-lg font-semibold text-primary">
                Experiencias, resultados y buenas prácticas en vinculación con la sociedad
              </p>
              <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                Convocatoria abierta para docentes, investigadores y gestores que deseen 
                presentar ponencias alineadas a los ejes temáticos del congreso.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-6">
              <a
                href="https://docs.google.com/forms/..."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs bg-primary px-32 py-8 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Postula tu Ponencia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 4: Postulación a la feria */}
      <section className="bg-gray-light py-16 dark:bg-gray-dark md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
                Postulación a la feria
              </h2>
              <p className="mb-4 text-lg font-semibold text-primary">
                Proyectos de vinculación, laboratorios y servicios especializados
              </p>
              <p className="text-base text-body-color dark:text-body-color-dark mb-8">
                Espacio para iniciativas institucionales que busquen visibilizar capacidades, 
                resultados y oportunidades de articulación.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <a
                href="https://docs.google.com/forms/..."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs bg-primary px-32 py-8 text-xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Postula a la Feria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 5: Pago en línea */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-2 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
              Pago de inscripción
            </h2>
            <p className="mb-4 text-lg font-semibold text-primary">
              Accede a tarifas, categorías e instrucciones de pago
            </p>
            <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
              Esta sección permitirá realizar el pago en línea y validar la participación en el 
              congreso, una vez se definan oficialmente las tarifas.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-xs bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
                Realiza tu pago
              </button>
              <Link
                href="#"
                className="rounded-xs border border-primary px-6 py-3 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
              >
                Ver tarifas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 6: Fechas clave */}
      <section className="bg-gray-light py-16 dark:bg-gray-dark md:py-[120px]">
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
                className="rounded-lg bg-white p-6 text-center dark:bg-gray-dark-2"
              >
                <p className="text-base font-semibold text-body-color dark:text-body-color-dark">
                  {date}
                </p>
                <p className="mt-2 text-lg font-bold text-primary">Por definir</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque 7: Contacto */}
      <section className="py-16 md:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-2 text-2xl font-bold text-black dark:text-white md:text-3xl">
              Contacto
            </h2>
            <p className="mb-8 text-lg font-semibold text-primary">
              Consultas sobre inscripciones, ponencias, feria, pagos y auspicios
            </p>
            
            {submitted && (
              <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-700">
                Gracias por tu mensaje. Te contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mb-8 text-left">
              <div className="mb-4">
                <label className="mb-2 block text-base font-semibold text-black dark:text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full border border-gray-3 bg-transparent px-4 py-3 text-black outline-none duration-300 placeholder:text-body-color/40 focus:border-primary dark:border-gray-5 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xs bg-primary px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Escríbenos
              </button>
            </form>

            <Link
              href="#"
              className="rounded-xs border border-primary px-6 py-3 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParticipaPage;
