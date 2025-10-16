import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame7Subsection = () => {
  return (
    <section className="w-full min-h-[200px] md:min-h-[280px] lg:h-[350px]">
      <Card className="relative w-full h-full bg-black border-white border-2 md:border-[3px] rounded-none">
        <CardContent className="relative w-full h-full p-0 flex items-center">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between w-full h-full px-4 md:px-8 lg:px-16 py-4 md:py-0 gap-2 md:gap-8">
            <div className="flex-shrink-0">
              <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[120px] md:text-[200px] lg:text-[350px] tracking-[0] leading-[1]">
                03
              </div>
            </div>

            <div className="flex flex-col w-full md:max-w-[407px] items-start gap-3 md:gap-[30px]">
               <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-tight">
                MOTION GRAPHICS
              </h2>

              <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-base md:text-xl lg:text-3xl tracking-[0] leading-[1.5]">
                Animations and graphics that simplify complex ideas and capture attention.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
