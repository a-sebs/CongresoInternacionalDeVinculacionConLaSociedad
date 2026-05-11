import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="overflow-hidden py-16 md:py-20 lg:py-28"
      style={{
        backgroundImage: "url('/images/hero/background_portal_transparente_2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            {/* Sección removida */}
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* NewsLatterBox removida */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
