import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[140px] w-[140px] items-center justify-center rounded-full mx-auto">
          {icon}
        </div>
        <h3 className="mb-5 text-lg font-bold text-black sm:text-xl lg:text-lg xl:text-xl text-center">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-sm leading-relaxed font-medium md:text-base lg:text-lg text-justify">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
