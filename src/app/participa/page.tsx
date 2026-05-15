"use client";

import { useState } from "react";
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
      {/* Bloque 1: Introducción */}
      <section 
        className="py-16 md:py-[120px]"
        style={{
          backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
              Participa en Conexión 2026
            </h1>
            <p className="mb-4 text-lg text-body-color md:text-xl lg:text-2xl">
              Inscripción, postulación de ponencias, feria y pago en un solo lugar.
            </p>
            <p className="text-lg text-body-color md:text-xl lg:text-2xl">
              Aquí encontrarás los accesos para registrarte como asistente, postular una ponencia, 
              aplicar a la feria y realizar tu pago en línea.
            </p>
          </div>
        </div>
      </section>

      {/* Bloque 2: Inscripción general */}
      <section 
        className="bg-gray-light py-16 md:py-[120px]"
        style={{
          backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
                Inscripción al congreso
              </h2>
              <p className="mb-4 text-lg font-semibold text-primary">
                Registro para asistentes y participantes del evento
              </p>
              <p className="text-lg text-body-color md:text-xl lg:text-2xl">
                Completa tu registro para participar en las actividades académicas, 
                la agenda del congreso y los espacios de articulación.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="rounded-xs bg-primary px-6 py-3 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 md:text-xl lg:text-2xl"
              >
                Inscríbete al congreso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 4: Postulación a la feria */}
      <section className="bg-gray-light py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
                Postulación a la feria
              </h2>
              <p className="mb-4 text-lg font-semibold text-primary">
                Proyectos de vinculación, laboratorios y servicios especializados
              </p>
              <p className="text-lg text-body-color mb-8 md:text-xl lg:text-2xl">
                Espacio para iniciativas institucionales que busquen visibilizar capacidades, 
                resultados y oportunidades de articulación.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <a
                href="https://docs.google.com/forms/..."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs bg-primary px-32 py-8 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 md:text-xl lg:text-2xl"
              >
                Postula a la Feria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 5: Pago en línea */}
      <section className="py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-2 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
              Pago de inscripción
            </h2>
            <p className="mb-4 text-lg font-semibold text-primary">
              Accede a tarifas, categorías e instrucciones de pago
            </p>
            <p className="mb-8 text-lg text-body-color md:text-xl lg:text-2xl">
              Esta sección permitirá realizar el pago en línea y validar la participación en el 
              congreso, una vez se definan oficialmente las tarifas.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-xs bg-primary px-6 py-3 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 md:text-xl lg:text-2xl">
                Realiza tu pago
              </button>
              <Link
                href="#"
                className="rounded-xs border border-primary px-6 py-3 text-lg font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10 md:text-xl lg:text-2xl"
              >
                Ver tarifas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloque 6: Fechas clave */}
      <section className="bg-gray-light py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
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
                <p className="text-lg font-semibold text-body-color md:text-xl lg:text-2xl">
                  {date}
                </p>
                <p className="mt-2 text-lg font-bold text-primary">Por definir</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloque 7: Contacto */}
      <section className="py-16 md:py-[120px]" style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-2 text-2xl font-bold text-black md:text-3xl">
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
                <label className="mb-2 block text-lg font-semibold text-black md:text-xl lg:text-2xl">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full border border-gray-3 bg-transparent px-4 py-3 text-black outline-none duration-300 placeholder:text-body-color/40 focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xs bg-primary px-6 py-3 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 md:text-xl lg:text-2xl"
              >
                Escríbenos
              </button>
            </form>

            <Link
              href="#"
              className="rounded-xs border border-primary px-6 py-3 text-lg font-semibold text-primary duration-300 ease-in-out hover:bg-primary/10 md:text-xl lg:text-2xl"
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
