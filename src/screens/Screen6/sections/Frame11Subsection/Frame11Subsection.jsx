import React from "react";

export const Frame11Subsection = () => {
  const descriptionText = "Designing logos, colors, and typography that create an unforgettable image.";
  const titleText = "VISUAL IDENTITY";

  return (
    <section className="relative w-full min-h-[250px] md:min-h-[300px] lg:h-[350px] bg-black border-2 md:border-[3px] border-solid border-white translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-8 lg:px-16 py-6 md:py-0 gap-4 md:gap-8">
        <div className="flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[150px] md:text-[250px] lg:text-[350px] tracking-[0] leading-[1]">
            02
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[407px] items-start gap-4 md:gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[28px] md:text-[35px] lg:text-[45px] tracking-[0] leading-[1.2]">
            {titleText}
          </h2>

          <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg md:text-2xl lg:text-3xl tracking-[0] leading-[1.4] md:leading-[1.3]">
            {descriptionText}
          </p>
        </div>
      </div>
    </section>
  );
};
