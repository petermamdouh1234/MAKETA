import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SectionComponentNodeSubsection = () => {
  return (
    <section className="w-full h-[350px] relative">
      <Card className="w-full h-full bg-black border-white border-[3px] rounded-none">
        <CardContent className="p-0 h-full flex items-center justify-between relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="flex items-center justify-center w-[340px] h-full">
            <span className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[350px] tracking-[0] leading-[normal]">
              01
            </span>
          </div>

          <div className="flex-1 max-w-[498px] flex flex-col items-start gap-[30px] pr-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[45px] tracking-[0] leading-[30px] whitespace-nowrap">
              WEB DESIGN &amp; DEVELOPMENT
            </h2>

            <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[41px]">
              Responsive, modern websites that reflect your brand and deliver
              smooth user experiences.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
