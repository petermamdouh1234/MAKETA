import React from "react";

export const Frame1Subsection = () => {
  return (
    <section className="relative w-full h-[350px] bg-black border-[3px] border-solid border-white translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="flex items-center justify-between h-full px-16">
        {/* Large number section */}
        <div className="flex-shrink-0">
          <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[350px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            02
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col w-[407px] items-start gap-[30px] ml-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[45px] tracking-[0] leading-[30px]">
            E-COMMERCE SOLUTIONS
          </h2>

          <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[41px]">
            Custom online stores designed to attract, engage, and convert
            shoppers.
          </p>
        </div>
      </div>
    </section>
  );
};
