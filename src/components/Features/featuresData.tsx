import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C9.05 0 0 9.05 0 20s9.05 20 20 20 20-9.05 20-20S30.95 0 20 0zm0 36c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm7-18h-6v-6h-2v6h-6v2h6v6h2v-6h6v-2z"/>
      </svg>
    ),
    title: "Innovación, Transferencia Tecnológica y Desarrollo",
    paragraph:
      "Este eje reúne a profesores, investigadores, empresas y especialistas en transferencia tecnológica para compartir avances, proyectos innovadores y experiencias en desarrollo tecnológico que impacten positivamente en la sociedad y economía.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18 18-8.06 18-18S29.94 2 20 2zm0 32c-7.73 0-14-6.27-14-14S12.27 6 20 6s14 6.27 14 14-6.27 14-14 14zm3.5-9c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm0-5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
      </svg>
    ),
    title: "Innovación Social e Impacto en la Sociedad",
    paragraph:
      "Este eje se enfoca en iniciativas de impacto social, vinculación comunitaria y soluciones innovadoras a problemas sociales. Espacio para que instituciones académicas, ONGs y entidades públicas compartan sus experiencias y mejores prácticas.",
  },
];
export default featuresData;
