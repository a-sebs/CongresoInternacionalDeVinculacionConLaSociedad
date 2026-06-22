"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#021D58] pt-8 md:pt-10 lg:pt-12 pb-6">
      <div className="container">
        {/* Main Grid - 3 Columns */}
        <div className="-mx-4 flex flex-wrap mb-6">
          {/* Column 1: Logo & Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 mb-8 lg:mb-0">
            <div className="max-w-[300px]">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/logo/Logo blanco.png"
                  alt="Conexión 2026"
                  className="w-auto h-auto"
                  width={180}
                  height={60}
                />
              </Link>
              <h3 className="text-base font-semibold text-white mb-3 text-justify">
                IV Congreso Internacional de Vinculación con la Sociedad
              </h3>
              <p className="text-base leading-relaxed text-gray-300 text-justify">
                Un espacio académico e institucional para fortalecer la articulación entre universidades, sector público, empresas y actores sociales, promoviendo experiencias, proyectos y buenas prácticas de vinculación con impacto.
              </p>
            </div>
          </div>

          {/* Column 2: Secciones Principales */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 mb-8 lg:mb-0 mt-6 lg:mt-0">
            <div>
              <h2 className="mb-6 text-lg font-bold text-primary">
                Secciones Principales
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/inscribete#inscripcion"
                    className="text-base text-gray-300 hover:text-primary duration-300"
                  >
                    Inscríbete
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-base text-gray-300 hover:text-primary duration-300"
                  >
                    Sobre el Congreso
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agenda#agenda-congreso"
                    className="text-base text-gray-300 hover:text-primary duration-300"
                  >
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/panelistas#ponentes-panelistas"
                    className="text-base text-gray-300 hover:text-primary duration-300"
                  >
                    Ponencias
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agenda#feria"
                    className="text-base text-gray-300 hover:text-primary duration-300"
                  >
                    Feria
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contacto */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 mb-8 lg:mb-0 mt-6 lg:mt-0">
            <div>
              <h2 className="mb-6 text-lg font-bold text-primary">
                Contacto
              </h2>
              <ul className="space-y-4">
                <li>
                  <p className="text-sm text-gray-400 mb-1">Correo Electrónico</p>
                  <a
                    className="text-base text-gray-300 hover:text-primary duration-300"
                  >
                    direccion.vinculacion@epn.edu.ec
                  </a>
                </li>
                <li>
                  <p className="text-sm text-gray-400 mb-1">Teléfono</p>
                  <a
                    className="text-base text-gray-300 hover:text-primary duration-300"
                  >
                    (+593) 2 2976 300 extensión 1814
                  </a>
                </li>
                <li>
                  <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                  <p className="text-base text-gray-300">
                    Escuela Politécnica Nacional, EARME - Auditorio 2
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mb-6"></div>

        {/* Bottom Bar - Copyright Only */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div>
            <p className="text-xs text-white mb-2">
              © 2026 Congreso Internacional de Vinculación con la Sociedad – Conexión 2026. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-400">
              Escuela Politécnica Nacional | REUVIC | Dirección de Innovación y Vinculación
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
