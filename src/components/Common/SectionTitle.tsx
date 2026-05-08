const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-4xl font-bold leading-tight! text-black sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h2>
        <p className="text-lg leading-relaxed! text-body-color md:text-xl lg:text-2xl">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
