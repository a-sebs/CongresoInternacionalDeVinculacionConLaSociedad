import Image from "next/image";
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/brands/eje1.png"
        alt="Innovación y Transferencia Tecnológica"
        width={120}
        height={120}
        className="w-auto h-auto"
      />
    ),
    title: "Transferencia Tecnológica y Desarrollo",
    paragraph:
      "Este eje reúne a profesores, investigadores, empresas y especialistas en transferencia tecnológica para compartir avances, proyectos innovadores y experiencias en desarrollo tecnológico que impacten positivamente en la sociedad y economía.",
  },
  {
    id: 2,
    icon: (
      <Image
        src="/images/brands/eje2.png"
        alt="Innovación Social e Impacto"
        width={120}
        height={120}
        className="w-auto h-auto"
      />
    ),
    title: "Innovación Social e Impacto en la Sociedad",
    paragraph:
      "Este eje se enfoca en iniciativas de impacto social, vinculación comunitaria y soluciones innovadoras a problemas sociales. Espacio para que instituciones académicas, ONGs y entidades públicas compartan sus experiencias y mejores prácticas.",
  },
];
export default featuresData;
