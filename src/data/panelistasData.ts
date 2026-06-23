export interface Panelista {
  id: number;
  nombre: string;
  perfil: string;
  pais: string;
  tema: string;
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
    imagen: "/images/blog/Juan Fernando Pacheco Duarte.png",
  },
  {
    id: 2,
    nombre: "Hector Hidalgo",
    perfil: "CEO de innovación académica",
    pais: "Chile",
    tema: "Transferencia Tecnológica: Innovar desde la generación de conocimiento.",
    imagen: "/images/blog/Hector Hidalgo.png",
  },
  {
    id: 3,
    nombre: "Jairo Castañeda",
    perfil: "Ministerio de defensa de Colombia",
    pais: "Colombia",
    tema: "Transferencia de conocimiento e innovación desde la educación superior",
    imagen: "/images/blog/Jairo Castañeda-modified.png",
  },
  {
    id: 4,
    nombre: "Pendiente",
    perfil: "Perfil por confirmar",
    pais: "—",
    tema: "Tema por confirmar",
    imagen: "/images/blog/anonimo.png",
    pendiente: true,
  },
];
