export interface Panelista {
  id: number;
  nombre: string;
  perfil: string;
  pais: string;
  tema: string;
  correo: string;
  imagen: string;
  pendiente?: boolean;
}

export const panelistas: Panelista[] = [
  {
    id: 1,
    nombre: "Juan Fernando Pacheco Duarte",
    perfil: "Rector Parque Científico de Innovación Social",
    pais: "Colombia",
    tema: "Gestión del conocimiento para la generación de innovaciones sociales",
    correo: "jpacheco@uniminuto.edu",
    imagen: "/images/blog/Juan Fernando Pacheco Duarte.png",
  },
  {
    id: 2,
    nombre: "Hector Hidalgo",
    perfil: "CEO de innovación académica",
    pais: "Chile",
    tema: "Transferencia Tecnológica: Innovar desde la generación de conocimiento.",
    correo: "hhidalgo@gmail.com",
    imagen: "/images/blog/Hector Hidalgo.png",
  },
  {
    id: 3,
    nombre: "Jairo Castañeda",
    perfil: "Ministerio de defensa de Colombia",
    pais: "Colombia",
    tema: "Transferencia de conocimiento e innovación desde la educación superior",
    correo: "JairoO.Castaneda@mindefensa.gov.co",
    imagen: "/images/blog/Jairo Castañeda-modified.png",
  },
  {
    id: 4,
    nombre: "Pendiente",
    perfil: "Perfil por confirmar",
    pais: "—",
    tema: "Tema por confirmar",
    correo: "",
    imagen: "/images/blog/anonimo.png",
    pendiente: true,
  },
];
