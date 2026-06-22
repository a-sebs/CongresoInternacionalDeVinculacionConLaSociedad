"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { panelistas } from "@/data/panelistasData";

export default function PanelistasSlider() {
  return (
    <>
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
            <div
              className={`group rounded-lg border p-8 text-center transition-all duration-300 ${
                panelista.pendiente
                  ? "border-dashed border-body-color/30 bg-white/3 opacity-60"
                  : "border-primary/20 bg-white/5 backdrop-blur-sm hover:border-primary/50 hover:bg-white/10"
              }`}
            >
              <div className="mb-6 flex justify-center">
                <div
                  className={`relative h-40 w-40 overflow-hidden rounded-full border-4 transition-all duration-300 ${
                    panelista.pendiente
                      ? "border-body-color/20"
                      : "border-primary/30 group-hover:border-primary"
                  }`}
                >
                  <Image
                    src={panelista.imagen}
                    alt={panelista.nombre}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h3 className="mb-1 text-lg font-bold text-black md:text-xl">
                {panelista.nombre}
              </h3>
              <p className="mb-1 text-sm font-semibold text-primary md:text-base">
                {panelista.perfil}
              </p>
              <p className="mb-4 flex items-center justify-center gap-1 text-sm text-body-color">
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
                {panelista.pais}
              </p>
              <div className="mb-4">
                <div className="inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-primary md:text-base">
                  {panelista.tema}
                </div>
              </div>
              {panelista.correo && (
                <a
                  href={`mailto:${panelista.correo}`}
                  className="inline-flex items-center gap-1 text-xs text-body-color transition-colors hover:text-primary"
                >
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
                  {panelista.correo}
                </a>
              )}
              {!panelista.pendiente && (
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
    </>
  );
}
