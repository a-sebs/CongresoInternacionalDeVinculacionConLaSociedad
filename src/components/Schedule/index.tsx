import SectionTitle from "../Common/SectionTitle";

const Schedule = () => {
  return (
    <section id="schedule" className="bg-gray-light py-5 md:py-6 lg:py-[34px]">
      <div className="container">
        <SectionTitle
          title="Cronograma General"
          paragraph="Conozca el cronograma del congreso 28 y 29 de octubre de 2026."
          center
        />
        <div className="text-center">
          <p className="text-sm text-body-color md:text-base lg:text-lg">
            Próximamente se compartirán más detalles del cronograma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
