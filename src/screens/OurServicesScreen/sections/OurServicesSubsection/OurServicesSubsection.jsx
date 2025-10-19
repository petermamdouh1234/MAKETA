import React from "react";

export const OurServicesSubsection = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center py-8 md:py-10 lg:py-14 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <img
      className="absolute top-0 left-0 w-[500px] sm:w-[400px] md:w-[700px] lg:w-[800px] h-auto object-contain opacity-40"
      alt="Decorative background"
      src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d7a872adcd971a2d4d125cd7b4b0b2fb-copy-1.png"
    />
  </div>
      {/* Text Content */}
      <div className="relative text-center z-10 [font-family:'Bebas_Neue',Helvetica] font-normal text-white tracking-[0] space-y-2">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <span className="block text-[90px] md:text-[160px] lg:text-[200px] leading-[0.85] text-white drop-shadow-md">
            OUR
          </span>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <span className="block text-[90px] md:text-[160px] lg:text-[200px] leading-[0.85] text-[#ffcc04] drop-shadow-lg">
            MARKETING
          </span>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <span className="block text-[90px] md:text-[160px] lg:text-[200px] leading-[0.85] text-white drop-shadow-md">
            SERVICES
          </span>
        </div>
      </div>
    </section>
  );
};
