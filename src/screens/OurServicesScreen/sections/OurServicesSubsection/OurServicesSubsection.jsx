import React from "react";

export const OurServicesSubsection = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-20">
      <div className="text-center [font-family:'Bebas_Neue',Helvetica] font-normal text-white tracking-[0]">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <span className="block text-[200px] md:text-[300px] lg:text-[400px] leading-[0.8] [font-family:'Bebas_Neue',Helvetica] font-normal text-white tracking-[0]">
            OUR
          </span>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <span className="block text-[200px] md:text-[300px] lg:text-[400px] leading-[0.8] text-yellow-400">
            Marketing
          </span>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <span className="block text-[200px] md:text-[300px] lg:text-[400px] leading-[0.8] [font-family:'Bebas_Neue',Helvetica] font-normal text-white tracking-[0]">
            SERVICES
          </span>
        </div>
      </div>
    </section>
  );
};
