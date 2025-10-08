import React from "react";

export const Frame3Subsection = () => {
  return (
    <section className="relative w-full h-[350px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
      <div className="relative w-full h-full bg-black border-[3px] border-solid border-white">
        <div className="absolute top-1/2 left-[calc(50%-842px)] transform -translate-y-1/2 w-[340px] [font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[350px] tracking-[0] leading-[normal]">
          04
        </div>

        <div className="absolute top-1/2 left-[calc(50%+192px)] transform -translate-y-1/2 w-[407px] flex flex-col items-start gap-[30px]">
          <h3 className="w-[457px] [font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[45px] tracking-[0] leading-[30px]">
            UX/UI DESIGN
          </h3>

          <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[41px]">
            Intuitive interfaces and seamless navigation that keep users coming
            back.
          </p>
        </div>
      </div>
    </section>
  );
};
