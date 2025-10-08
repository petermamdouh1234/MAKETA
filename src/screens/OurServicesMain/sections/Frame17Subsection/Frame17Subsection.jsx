import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame17Subsection = () => {
  return (
    <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
      <Card className="w-[480px] h-[902px] bg-[#3c3c3c] border-none rounded-none relative overflow-hidden">
        <CardContent className="relative w-full h-full p-0 flex flex-col items-center justify-between">
          {/* Image at the top */}
          <img
            className="w-full h-[50%] object-cover"
            alt="Web & App Development image"
            src="https://framerusercontent.com/images/0a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" // New Web & App Development image
          />

          {/* Large number display */}
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 relative z-10">
            <span className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[400px] tracking-[0] leading-[324px] whitespace-nowrap">
              4
            </span>
          </div>

          {/* Content at the bottom */}
          <div className="flex flex-col items-center justify-end w-full h-[50%] p-8 bg-[#3c3c3c] relative z-10">
            {/* Service category badge */}
            <div className="w-fit h-[35px] rounded-[50px] border border-solid border-white flex items-center justify-center px-4 mb-4">
              <span className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[25px] whitespace-nowrap">
                WEB &amp; APP DEVELOPMENT
              </span>
            </div>

            {/* Description text */}
            <p className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-[28px] text-center mb-8 px-2">
              {"Discover digital <br/> experiences".split('<br/>').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < "Discover digital <br/> experiences".split('<br/>').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>

            {/* Navigation button - full width */}
            <Link to="/our-services-u45-web-u38-app" className="w-full">
              <Button
                variant="ghost"
                className="w-full h-[65px] rounded-[15px] bg-[#ffcc04] text-black hover:bg-[#ffdd44] p-0 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-base text-center tracking-[0] leading-[normal]">
                  Discover
                </span>
                <img
                  className="w-[24px] h-[24px] ml-2"
                  alt="Arrow right"
                  src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/arrow-right.svg"
                />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
