import SectionTitle from "@/components/Common/SectionTitle";
import PanelistasSlider from "@/components/Panelistas/PanelistasSlider";

export default function PanelistasPage() {
  return (
    <>
      <section
        id="ponentes-panelistas"
        className="py-[26px] md:py-8 lg:py-11"
      >
        <div className="container">
          <div className="w-full text-center">
            <SectionTitle
              title="Panelistas"
              paragraph="Un grupo de expertos nacionales e internacionales que compartirán sus conocimientos, experiencias y perspectivas en innovación, vinculación y desarrollo sostenible."
              center
            />
          </div>

          <PanelistasSlider />
        </div>
      </section>
    </>
  );
}
