    "use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-slate-900 pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        {/* Main Grid - 4 Columns */}
        <div className="-mx-4 flex flex-wrap mb-12">
          {/* Column 1: Logo & Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-3/12 mb-12 lg:mb-0">
            <div className="max-w-[300px]">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/logo/logo_conexion_blanco.png"
                  alt="Conexión 2026"
                  className="w-auto h-auto"
                  width={180}
                  height={60}
                />
              </Link>
              <h3 className="text-base font-semibold text-white mb-3">
                Congreso Internacional de Vinculación con la Sociedad
              </h3>
              <p className="text-base leading-relaxed text-gray-300">
                Un espacio académico e institucional para fortalecer la articulación entre universidades, sector público, empresas y actores sociales, promoviendo experiencias, proyectos y buenas prácticas de vinculación con impacto.
              </p>
            </div>
          </div>

          {/* Column 2: Participa */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 mb-12 lg:mb-0">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#00A7B5]"
                >
                  <circle cx="12" cy="8" r="4" fill="currentColor" />
                  <path d="M6 20c0-3.313 2.686-6 6-6s6 2.687 6 6M16 8h4M18 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <h2 className="text-lg font-bold text-[#00A7B5]">
                  Participa
                </h2>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/participa"
                    className="text-base text-gray-300 hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00A7B5] rounded-full"></span>
                    Inscríbete
                  </Link>
                </li>
                <li>
                  <Link
                    href="/participa"
                    className="text-base text-gray-300 hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00A7B5] rounded-full"></span>
                    Presenta tu Ponencia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/participa"
                    className="text-base text-gray-300 hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00A7B5] rounded-full"></span>
                    Feria y Networking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/participa"
                    className="text-base text-gray-300 hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00A7B5] rounded-full"></span>
                    Auspicios
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Congreso */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 mb-12 lg:mb-0">
            <div>
              <h2 className="mb-8 text-lg font-bold text-[#00A7B5]">
                Congreso
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-base text-gray-300 hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00A7B5] rounded-full"></span>
                    Sobre el Congreso
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agenda"
                    className="text-base text-gray-300 hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00A7B5] rounded-full"></span>
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-base text-gray-300 hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00A7B5] rounded-full"></span>
                    Ponentes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-base text-gray-300 hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00A7B5] rounded-full"></span>
                    Galería
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contacto */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12 mb-12 lg:mb-0">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#00A7B5]"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <h2 className="text-lg font-bold text-[#00A7B5]">
                  Contacto
                </h2>
              </div>
              <p className="text-base text-gray-300 mb-6">
                Consultas sobre inscripciones, ponencias, feria, pagos y auspicios
              </p>
              <div className="mb-4">
                <p className="text-base text-gray-300 mb-2">Correo electrónico:</p>
                <a
                  href="mailto:congresovinculacion@epn.edu.ec"
                  className="text-base text-[#00A7B5] hover:text-[#00B5E2] duration-300 flex items-center gap-2"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#00A7B5]"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  congresovinculacion@epn.edu.ec
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00A7B5] to-transparent mb-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Globe Icon, Copyright & Institutions */}
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white flex-shrink-0 mt-1"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12h20M12 2a4.5 4.5 0 010 20 4.5 4.5 0 010-20z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div>
                <p className="text-xs text-white mb-2">
                  © 2026 Congreso Internacional de Vinculación con la Sociedad – Conexión 2026. Todos los derechos reservados.
                </p>
                <p className="text-xs text-gray-400">
                  Escuela Politécnica Nacional | Universidad Libertadores | REUVIC | Red de Vinculación con la Sociedad
                </p>
              </div>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 duration-300 flex items-center justify-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
              </svg>
            </a>
            <a
              href="/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 duration-300 flex items-center justify-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="/"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 duration-300 flex items-center justify-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white text-white hover:bg-white hover:text-slate-900 duration-300 flex items-center justify-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 4c2.21 0 2.469.009 3.33.048 2.052.094 3.278 1.315 3.372 3.372.04.861.048 1.12.048 3.33s-.008 2.469-.048 3.33c-.094 2.052-1.315 3.278-3.372 3.372-.861.04-1.12.048-3.33.048s-2.469-.008-3.33-.048c-2.052-.094-3.278-1.315-3.372-3.372-.04-.861-.048-1.12-.048-3.33s.008-2.469.048-3.33c.094-2.052 1.315-3.278 3.372-3.372.861-.04 1.12-.048 3.33-.048zm0 2.235c-1.878 0-3.4 1.522-3.4 3.4s1.522 3.4 3.4 3.4 3.4-1.522 3.4-3.4-1.522-3.4-3.4-3.4zm4.418-.858a.794.794 0 110 1.588.794.794 0 010-1.588zm-4.418 2.277c-1.295 0-2.345 1.05-2.345 2.345s1.05 2.345 2.345 2.345 2.345-1.05 2.345-2.345-1.05-2.345-2.345-2.345z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
