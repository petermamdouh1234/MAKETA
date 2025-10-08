import React from "react";

export const Frame2Subsection = () => {
  return (
    <section className="relative w-full h-[350px]">
      <div className="flex items-center relative w-full h-full">
        <div className="relative w-full h-full bg-black border-[3px] border-solid border-white" />

        <div className="absolute left-[calc(50%-842px)] top-1/2 -translate-y-1/2 w-[340px] [font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[350px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          03
        </div>
      </div>

      <div className="flex flex-col w-[407px] items-start gap-[30px] absolute top-1/2 -translate-y-1/2 left-[calc(50%+195px)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="relative w-[418px] h-[41px] -mt-1 -mr-[11px] [font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[45px] tracking-[0] leading-[30px]">
          APP DEVELOPMENT
        </h2>

        <p className="relative w-[459px] -mr-[52px] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[41px]">
          Mobile apps that provide value and keep your customers connected on
          the go.
        </p>
      </div>
    </section>
  );
};
