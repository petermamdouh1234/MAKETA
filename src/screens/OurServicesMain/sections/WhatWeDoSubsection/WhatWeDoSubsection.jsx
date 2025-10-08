import React from "react";

export const WhatWeDoSubsection = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-8 md:py-12 lg:py-20">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] [font-family:'Bebas_Neue',Helvetica] font-normal text-white text-center">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <span className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[100px] md:text-[200px] lg:text-[300px] xl:text-[400px] tracking-[0] leading-[0.9] block">
            what
          </span>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] text-[100px] md:text-[200px] lg:text-[300px] xl:text-[400px] leading-[0.8] md:pl-[4ch] lg:pl-[6ch] xl:pl-[8ch]">
          we do
        </div>
      </div>
    </section>
  );
};
