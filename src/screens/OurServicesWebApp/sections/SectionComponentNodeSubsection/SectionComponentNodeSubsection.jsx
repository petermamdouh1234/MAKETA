import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SectionComponentNodeSubsection = () => {
  return (
    <section className="w-full relative">
      <Card className="w-full bg-black border-2 border-white rounded-none hover:scale-[1.02] transition-transform duration-300 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          
          {/* Left Number */}
          <div className="flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <span className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[150px] sm:text-[180px] md:text-[200px] lg:text-[220px] leading-none">
              01
            </span>
          </div>

          {/* Right Text Content */}
          <div className="flex-1 flex flex-col items-start text-left gap-4 md:gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-tight">
              WEB DESIGN & DEVELOPMENT
            </h2>

            <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-[600px]">
              Responsive, modern websites that reflect your brand and deliver smooth, engaging user experiences across all devices.
            </p>
          </div>

        </CardContent>
      </Card>
    </section>
  );
};
