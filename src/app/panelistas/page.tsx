"use client";

import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Panelista {
  id: number;
  nombre: string;
  descripcion: string;
  tema: string;
  imagen: string;
}

const panelistas: Panelista[] = [
  {
    id: 1,
    nombre: "Dr. Roberto García",
    descripcion: "Catedrático, Universidad Nacional",
    tema: "Innovación y Transferencia Tecnológica",
    imagen: "/images/testimonials/auth-01.png",
  },
  {
    id: 2,
    nombre: "Dra. María López",
    descripcion: "Directora de Investigación, Instituto Tecnológico",
    tema: "Transformación Digital en Educación Superior",
    imagen: "/images/testimonials/auth-02.png",
  },
  {
    id: 3,
    nombre: "Ing. Carlos Rodríguez",
    descripcion: "CEO, Empresa Innovadora",
    tema: "Emprendimiento e Impacto Social",
    imagen: "/images/testimonials/auth-03.png",
  },
  {
    id: 4,
    nombre: "Lic. Patricia Martínez",
    descripcion: "Gestora de Vinculación, Institución Pública",
    tema: "Articulación Público-Privada",
    imagen: "/images/testimonials/author-01.png",
  },
  {
    id: 5,
    nombre: "Prof. David Fernández",
    descripcion: "Especialista en Desarrollo Sostenible",
    tema: "Innovación Social para el Desarrollo Sostenible",
    imagen: "/images/testimonials/author-02.png",
  },
  {
    id: 6,
    nombre: "Dra. Alejandra Cruz",
    descripcion: "Investigadora Principal, Centro de Estudios",
    tema: "Ecosistemas de Innovación Regional",
    imagen: "/images/testimonials/author-03.png",
  },
];

export default function PanelistasPage() {
  return (
    <>

      <section
        id="ponentes-panelistas"
        className="py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="w-full text-center">
            <SectionTitle
              title="Panelistas y Ponentes"
              paragraph="Un grupo de expertos nacionales e internacionales que compartirán sus conocimientos, experiencias y perspectivas en innovación, vinculación y desarrollo sostenible."
              center
            />
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="panelistas-swiper"
          >
            {panelistas.map((panelista) => (
              <SwiperSlide key={panelista.id}>
                <div className="group rounded-lg border border-primary/20 bg-white/5 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-primary/50 hover:bg-white/10">
                  {/* Imagen circular */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/30 transition-all duration-300 group-hover:border-primary">
                      <Image
                        src={panelista.imagen}
                        alt={panelista.nombre}
                        width={160}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Nombre */}
                  <h3 className="mb-2 text-2xl font-bold text-black md:text-3xl">
                    {panelista.nombre}
                  </h3>

                  {/* Descripción/Cargo */}
                  <p className="mb-4 text-lg text-body-color md:text-xl">
                    {panelista.descripcion}
                  </p>

                  {/* Tema de Ponencia */}
                  <div className="mb-4">
                    <div className="inline-block rounded-full bg-primary/20 px-4 py-2 text-base font-semibold text-primary md:text-lg">
                      {panelista.tema}
                    </div>
                  </div>

                  {/* Línea decorativa */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Estilos personalizados para Swiper */}
          <style>{`
            .panelistas-swiper {
              padding: 20px 0 60px 0;
            }
            .panelistas-swiper .swiper-button-next,
            .panelistas-swiper .swiper-button-prev {
              color: var(--color-primary, #00A7B5);
              background-color: rgba(0, 167, 181, 0.1);
              width: 50px;
              height: 50px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
            }
            .panelistas-swiper .swiper-button-next:hover,
            .panelistas-swiper .swiper-button-prev:hover {
              background-color: rgba(0, 167, 181, 0.2);
            }
            .panelistas-swiper .swiper-button-next::after,
            .panelistas-swiper .swiper-button-prev::after {
              font-size: 20px;
            }
            .panelistas-swiper .swiper-pagination-bullet {
              background-color: rgba(0, 167, 181, 0.3);
              opacity: 1;
            }
            .panelistas-swiper .swiper-pagination-bullet-active {
              background-color: var(--color-primary, #00A7B5);
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
