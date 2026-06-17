import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Ejes Temáticos del Congreso"
          paragraph="El congreso se articula alrededor de dos pilares estratégicos que guían el desarrollo de todas las actividades, conferencias y espacios de networking."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
          {/* Eje 1 */}
          <div className="w-full">
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <div className="bg-primary/10 text-primary mb-10 flex h-[140px] w-[140px] items-center justify-center rounded-full mx-auto">
                <Image
                  src="/images/brands/eje1.png"
                  alt="Innovación y Transferencia Tecnológica"
                  width={120}
                  height={120}
                  className="w-auto h-auto"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">
                Innovación, Transferencia Tecnológica y Desarrollo
              </h3>
              <p className="text-body-color pr-[10px] text-lg leading-relaxed font-medium text-center md:text-xl lg:text-2xl">
                Este eje reúne a profesores, investigadores, empresas y especialistas en transferencia tecnológica para compartir avances, proyectos innovadores y experiencias en desarrollo tecnológico que impacten positivamente en la sociedad y economía.
              </p>
            </div>
          </div>

          {/* Eje 2 */}
          <div className="w-full">
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <div className="bg-primary/10 text-primary mb-10 flex h-[140px] w-[140px] items-center justify-center rounded-full mx-auto">
                <Image
                  src="/images/brands/eje2.png"
                  alt="Innovación Social e Impacto"
                  width={120}
                  height={120}
                  className="w-auto h-auto"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl text-center">
                Innovación Social e Impacto en la Sociedad
              </h3>
              <p className="text-body-color pr-[10px] text-lg leading-relaxed font-medium text-center md:text-xl lg:text-2xl">
                Este eje se enfoca en iniciativas de impacto social, vinculación comunitaria y soluciones innovadoras a problemas sociales. Espacio para que instituciones académicas, ONGs y entidades públicas compartan sus experiencias y mejores prácticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
