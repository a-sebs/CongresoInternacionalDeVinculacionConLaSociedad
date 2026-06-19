import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

interface Panelista {
  id: number;
  nombre: string;
  perfil: string;
  pais: string;
  tema: string;
  correo: string;
  imagen: string;
  pendiente?: boolean;
}

const panelistas: Panelista[] = [
  {
    id: 1,
    nombre: "Juan Fernando Pacheco Duarte",
    perfil: "Rector Parque Científico de Innovación Social",
    pais: "Colombia",
    tema: "Gestión del conocimiento para la generación de innovaciones sociales",
    correo: "jpacheco@uniminuto.edu",
    imagen: "/images/blog/anonimo.png",
  },
  {
    id: 2,
    nombre: "Hecto Hidalgo",
    perfil: "CEO de innovación académica",
    pais: "Chile",
    tema: "Transferencia Tecnológica: Innovar desde la generación de conocimiento.",
    correo: "hhidalgo@gmail.com",
    imagen: "/images/blog/anonimo.png",
  },
  {
    id: 3,
    nombre: "Jairo Castañeda",
    perfil: "Ministerio de defensa de Colombia",
    pais: "Colombia",
    tema: "Transferencia de conocimiento e innovación desde la educación superior",
    correo: "JairoO.Castaneda@mindefensa.gov.co",
    imagen: "/images/blog/anonimo.png",
  },
];

const locationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline h-4 w-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const emailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3.5 w-3.5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-light relative z-10 py-5 md:py-6 lg:py-[34px]">
      <div className="container">
        <SectionTitle
          title="Ponentes y panelistas"
          paragraph="Expertos nacionales e internacionales que compartirán sus conocimientos y perspectivas."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {panelistas.map((panelista) => (
            <div key={panelista.id} className="group w-full">
              <div className="shadow-two hover:shadow-one rounded-lg border border-primary/20 bg-white p-8 text-center duration-300 hover:border-primary/50">
                {/* Imagen circular */}
                <div className="mb-5 flex justify-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-primary/30 transition-all duration-300 group-hover:border-primary">
                    <Image
                      src={panelista.imagen}
                      alt={panelista.nombre}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Nombre */}
                <h3 className="mb-1 text-lg font-bold text-dark">
                  {panelista.nombre}
                </h3>

                {/* Perfil */}
                <p className="mb-1 text-sm font-semibold text-primary">
                  {panelista.perfil}
                </p>

                {/* País */}
                <p className="mb-3 flex items-center justify-center gap-1 text-sm text-body-color">
                  {locationIcon}
                  {panelista.pais}
                </p>

                {/* Tema */}
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                    {panelista.tema}
                  </span>
                </div>

                {/* Correo */}
                {panelista.correo && (
                  <a
                    href={`mailto:${panelista.correo}`}
                    className="inline-flex items-center gap-1 text-xs text-body-color transition-colors hover:text-primary"
                  >
                    {emailIcon}
                    {panelista.correo}
                  </a>
                )}

                {/* Línea decorativa */}
                <div className="mx-auto mt-5 h-0.5 w-10 bg-gradient-to-r from-primary to-primary/40 transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A7B5" />
              <stop offset="1" stopColor="#00A7B5" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A7B5" />
              <stop offset="1" stopColor="#00A7B5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A7B5" stopOpacity="0" />
              <stop offset="1" stopColor="#00A7B5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A7B5" stopOpacity="0" />
              <stop offset="1" stopColor="#00A7B5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A7B5" stopOpacity="0" />
              <stop offset="1" stopColor="#00A7B5" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A7B5" stopOpacity="0" />
              <stop offset="1" stopColor="#00A7B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
