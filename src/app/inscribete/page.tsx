"use client";

import { useState } from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";
import { contactData } from "@/data/contactData";

const ParticipaPage = () => {
  const [copied, setCopied] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Bloque 1: Inscripción general */}
      <section
        id="inscripcion"
        className="py-[26px] md:py-[48px]"
      >
        <div className="container">
          <div className="mx-auto max-w-[700px]">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                Inscripción al congreso
              </h2>

            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDialog(true)}
                className="rounded-xs bg-primary px-8 sm:px-16 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white duration-300 ease-in-out hover:bg-primary/80 whitespace-nowrap text-center"
              >
                Inscríbete al congreso
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Bloque 5: Contacto */}
      <section
        id="contacto"
        className="py-5 md:py-[36px]"
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
                  <span>{copied ? "✓ Copiado" : contactData.email}</span>
                </button>
              </div>

              {/* Sección de Teléfono */}
              <div>
                <p className="mb-4 text-sm font-semibold text-black md:text-base lg:text-lg">
                  Teléfono (WhatsApp)
                </p>
                <a
                  href={contactData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-lg border-2 border-[#25D366] bg-white px-6 py-4 text-sm font-semibold text-[#25D366] duration-300 ease-in-out hover:bg-[#25D366]/10 md:text-base lg:text-lg"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span>{contactData.whatsappNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuadro de Diálogo de Confirmación */}
      {showDialog && (
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
              Inscripción al Congreso
            </h3>
            <p className="text-body-color mb-8 text-base">
              Estás a punto de ser redirigido al formulario oficial de inscripción para el congreso. ¿Deseas continuar?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowDialog(false)}
                className="px-6 py-3 rounded-md border-2 border-gray-200 text-black hover:border-gray-300 hover:bg-gray-50 font-bold transition-all w-full sm:w-auto"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowDialog(false);
                  window.open("https://inscripcioneventos.utpl.edu.ec/enrollment/eyJwZXJpb2RvIjogIjIwMjYwMiIsInByb2dyYW1hIjogIkNPU0VfUDAiLCJjYXJyZXJhIjogIkNWQzEiLCJtYXRlcmlhIjogIkNPU0UiLCJjdXJzbyI6ICIxMTU5Iiwibm9tYnJlQ3Vyc28iOiAiSVYgQ09OR1JFU08gVklOIENPTkVDVCAyMDI2Iiwic29icmVwYXNhckN1cG9zIjogIk4ifQ", "_blank", "noopener,noreferrer");
                }}
                className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 hover:shadow-lg font-bold transition-all w-full sm:w-auto"
              >
                Ir al formulario
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ParticipaPage;
