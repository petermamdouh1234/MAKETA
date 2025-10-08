import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Frame14Subsection } from "./sections/Frame14Subsection/Frame14Subsection";
import { Frame15Subsection } from "./sections/Frame15Subsection/Frame15Subsection";
import { Frame16Subsection } from "./sections/Frame16Subsection/Frame16Subsection";
import { Frame17Subsection } from "./sections/Frame17Subsection/Frame17Subsection";
import { Frame18Subsection } from "./sections/Frame18Subsection/Frame18Subsection";
import { Group3Subsection } from "./sections/Group3Subsection/Group3Subsection";
import { WhatWeDoSubsection } from "./sections/WhatWeDoSubsection/WhatWeDoSubsection";

export const OurServicesMain = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* Header */}
      <Frame18Subsection />

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[60px] md:text-[90px] lg:text-[120px] tracking-[0] leading-[normal] mb-4 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Our Services
          </h1>
          
          <WhatWeDoSubsection />
        </div>

        {/* Background decorative image */}
        <img
          className="absolute top-0 left-0 w-[400px] md:w-[600px] lg:w-[813px] h-[460px] md:h-[690px] lg:h-[940px] bg-blend-difference object-cover opacity-30"
          alt="Img"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d7a872adcd971a2d4d125cd7b4b0b2fb-copy-1.png"
        />
      </section>

      {/* Description Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
          <p className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-base md:text-lg lg:text-xl text-center tracking-[0] leading-[24px] md:leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] px-4">
            FROM STRATEGY TO EXECUTION, WE PROVIDE EVERYTHING YOUR BRAND NEEDS TO
            STAND OUT
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <Frame14Subsection />
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="[font-family:'Bebas_Neue',Helvetica] font-normal text-[#ffcc04] text-[120px] md:text-[200px] lg:text-[280px] tracking-[0] leading-[normal] mb-4 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
                Custom
              </h2>

              <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-base md:text-xl lg:text-[25px] tracking-[0] leading-7 md:leading-9 lg:leading-10 mb-6 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                Need more? We&#39;ll create a Program that&#39;s just right for you.
                Precision crafted solutions tailored to your unique brand needs.
                Elevating your digital experience and evolving your digital marketing
                strategies to drive radical results.
              </p>

              <Button
                asChild
                className="inline-flex items-center justify-center gap-[5px] px-8 md:px-12 py-3 md:py-[15px] rounded-[15px] border-2 border-solid border-[#ffcc04] bg-transparent text-white hover:bg-[#ffcc04] hover:text-black transition-colors h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]"
              >
                <Link
                  to="/contact-us"
                  className="[font-family:'Poppins',Helvetica] font-medium text-sm md:text-base text-center tracking-[0] leading-[normal]"
                >
                  Let&apos;s Discuss
                </Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
              <img
                className="w-full h-auto object-cover"
                alt="Custom solutions"
                src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d81a8ffdbe47a72b1026097b90a62ed9-copy-1-1.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Group3Subsection />
    </div>
  );
};
