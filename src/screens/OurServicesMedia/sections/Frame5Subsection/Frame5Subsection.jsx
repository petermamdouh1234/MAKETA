import React from "react";

export const Frame5Subsection = () => {
  return (
    <section className="relative w-full min-h-[200px] md:min-h-[280px] lg:h-[350px] bg-black border-2 md:border-[3px] border-solid border-white">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between h-full px-4 md:px-8 lg:px-16 py-4 md:py-0 gap-2 md:gap-8">
        <div className="flex-shrink-0">
          <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[120px] md:text-[200px] lg:text-[350px] tracking-[0] leading-[1]">
            01
          </div>
        </div>

        <div className="flex flex-col w-full md:max-w-[407px] items-start gap-3 md:gap-[30px]">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[24px] md:text-[32px] lg:text-[45px] tracking-[0] leading-[1.2]">
            VIDEO PRODUCTION
          </h2>

          <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-base md:text-xl lg:text-3xl tracking-[0] leading-[1.5]">
            Commercials, promotional videos, and brand films that leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
};
