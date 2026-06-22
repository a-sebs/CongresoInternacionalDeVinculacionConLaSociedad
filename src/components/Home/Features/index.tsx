import SectionTitle from "@/components/Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-gray-light py-5 md:py-6 lg:py-[34px]">
        <div className="container">
          <SectionTitle
            title="Ejes Temáticos del Congreso"
            paragraph="El congreso se articula alrededor de dos pilares estratégicos que guían el desarrollo de todas las actividades, conferencias y espacios de networking."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
