import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame8Subsection = () => {
  return (
    <section className="w-full min-h-[200px] md:min-h-[280px] lg:h-[350px] relative">
      <Card className="w-full h-full bg-black border-white border-2 md:border-[3px] rounded-none">
        <CardContent className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between h-full p-0 relative">
          <div className="flex items-center justify-center py-4 md:py-0 md:pl-[84px]">
            <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[120px] md:text-[200px] lg:text-[350px] tracking-[0] leading-[1]">
              04
            </div>
          </div>

          <div className="flex flex-col w-full md:max-w-[407px] items-start gap-3 md:gap-[30px] px-4 md:px-0 md:pr-[194px] pb-4 md:pb-0">
            <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[24px] md:text-[32px] lg:text-[45px] tracking-[0] leading-[1.2]">
              CREATIVE DIRECTION
            </h2>

            <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-base md:text-xl lg:text-3xl tracking-[0] leading-[1.5]">
              Ensuring every piece of content aligns with your brand voice and vision.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
