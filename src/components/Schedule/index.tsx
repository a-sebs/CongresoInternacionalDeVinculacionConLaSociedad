import SectionTitle from "../Common/SectionTitle";

const Schedule = () => {
  return (
    <section id="schedule" className="bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Cronograma General"
          paragraph="Conozca el cronograma del congreso 28 y 29 de octubre de 2026."
          center
        />
        <div className="text-center">
          <p className="text-lg text-body-color md:text-xl lg:text-2xl">
            Próximamente se compartirán más detalles del cronograma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
