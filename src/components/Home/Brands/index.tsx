import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  const organizedBrands = brandsData.filter((b) => b.category === "organized");
  const supportedBrands = brandsData.filter((b) => b.category === "supported");

  return (
    <section className="py-5">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            Organizadores y Aliados
          </h2>
          <p className="text-body-color text-sm md:text-base lg:text-lg">
            Instituciones líderes comprometidas con la vinculación y el impacto social
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* Columna 1: Organizado por */}
          <div>
            <div className="mb-6 text-center">
              <h3 className="text-lg font-semibold text-black md:text-xl">
                Organizado por
              </h3>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center text-center rounded-xs px-2 py-4 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                  {organizedBrands.map((brand) => (
                    <SingleBrand key={brand.id} brand={brand} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Con el apoyo de */}
          <div>
            <div className="mb-6 text-center">
              <h3 className="text-lg font-semibold text-black md:text-xl">
                Con el apoyo de
              </h3>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center text-center rounded-xs px-2 py-4 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                  {supportedBrands.map((brand) => (
                    <SingleBrand key={brand.id} brand={brand} />
                  ))}
                </div>
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
