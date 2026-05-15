import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  const organizedBrands = brandsData.filter((b) => b.category === "organized");
  const supportedBrands = brandsData.filter((b) => b.category === "supported");

  return (
    <section className="bg-gray-light py-16" style={{
      backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
            Organizadores y Aliados
          </h2>
          <p className="text-body-color text-lg md:text-xl lg:text-2xl">
            Instituciones líderes comprometidas con la vinculación y el impacto social
          </p>
        </div>

        {/* Fila 1: Organizado por */}
        <div className="mb-12">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold text-black md:text-3xl">
              Organizado por
            </h3>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center text-center rounded-xs px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                {organizedBrands.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fila 2: Con el apoyo de */}
        <div>
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold text-black md:text-3xl">
              Con el apoyo de
            </h3>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center text-center rounded-xs px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                {supportedBrands.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name, size = "medium" } = brand;

  // Tamaños para las imágenes
  const sizeMap = {
    small: { width: 100, height: 60 },
    medium: { width: 150, height: 80 },
    large: { width: 200, height: 100 },
  };

  const dimensions = sizeMap[size];

  // Ancho del contenedor según el tamaño
  const widthClass = size === "large" ? "w-full md:w-1/2" : "w-1/2 md:w-1/3 lg:w-1/4";

  return (
    <div className={`flex items-center justify-center px-3 py-[15px] ${widthClass}`}>
      <Image src={image} alt={name} width={dimensions.width} height={dimensions.height} />
    </div>
  );
};
