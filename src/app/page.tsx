import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import FairAndNetworking from "@/components/FairAndNetworking";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IV Congreso Internacional de Vinculación con Sociedad - Conexión 2026",
  description: "Articulación, Innovación e Impacto. 28 y 29 de octubre de 2026. EPN y Centro de convenciones Eugenio Espejo.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />
      <FairAndNetworking />
      <Brands />
      <Contact />
    </>
  );
}
