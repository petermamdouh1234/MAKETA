import React from "react";

export const OurServicesWrapperSubsection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen relative">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-center [font-family:'Bebas_Neue',Helvetica] font-normal text-[400px] leading-[400px] text-white tracking-[0]">
        <span className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] [font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[400px] tracking-[0] block">
          Our
        </span>
        <span className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] leading-[350px] block">
          services
        </span>
      </div>
    </section>
  );
};
