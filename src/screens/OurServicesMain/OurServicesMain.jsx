import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Frame14Subsection } from "./sections/Frame14Subsection/Frame14Subsection";
import { Frame18Subsection } from "./sections/Frame18Subsection/Frame18Subsection";
import { Group3Subsection } from "./sections/Group3Subsection/Group3Subsection";

export const OurServicesMain = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* ===== HEADER ===== */}
      <Frame18Subsection />

      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 py-20 md:py-32 overflow-hidden">
        {/* Background Decorative Image - top left */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            className="absolute top-0 left-0 w-[600px] sm:w-[500px] md:w-[800px] lg:w-[900px] h-auto object-contain opacity-40"
            alt="Decorative background"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d7a872adcd971a2d4d125cd7b4b0b2fb-copy-1.png"
          />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-tight mb-2 animate-fade-in opacity-0 [--animation-delay:200ms]">
            Our Services
          </h1>

          <h2 className="[font-family:'Bebas Neue',Helvetica] font-normal text-white text-[45px] sm:text-[65px] md:text-[85px] lg:text-[100px] tracking-wide leading-[1.1] animate-fade-in opacity-0 [--animation-delay:400ms]">
            What
            <br />We Do  <br /> <br />
          </h2>
        </div>
      </section>

      {/* ===== DESCRIPTION SECTION ===== */}
      <section className="relative px-4 md:px-8 pb-0 pt-2">
        <div className="max-w-5xl mx-auto text-center">
          <p className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed animate-fade-in opacity-0 [--animation-delay:400ms]">
             <br />FROM STRATEGY TO EXECUTION, WE PROVIDE EVERYTHING YOUR BRAND NEEDS TO
            STAND OUT
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID SECTION ===== */}
      <section className="relative px-4 md:px-8 pt-0 pb-12 md:pb-20">
        <div className="translate-y-[-0.5rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <Frame14Subsection />
        </div>
      </section>

      {/* ===== CUSTOM SOLUTIONS SECTION ===== */}
      <section className="relative px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <h2 className="[font-family:'Bebas Neue',Helvetica] font-normal text-[#ffcc04] text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] leading-[1] mb-6 animate-fade-in opacity-0 [--animation-delay:800ms]">
              Custom
            </h2>

            <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in opacity-0 [--animation-delay:1000ms]">
              Need more? We&#39;ll create a program that&#39;s just right for you.
              Precision-crafted solutions tailored to your unique brand needs.
              Elevating your digital experience and evolving your digital marketing
              strategies to drive radical results.
            </p>

            <Button
              asChild
              className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-3 md:py-[15px] rounded-[15px] border-2 border-solid border-[#ffcc04] bg-transparent text-white hover:bg-[#ffcc04] hover:text-black transition-colors animate-fade-in opacity-0 [--animation-delay:1200ms]"
            >
              <Link
                to="/contact-us"
                className="[font-family:'Poppins',Helvetica] font-medium text-sm md:text-base text-center"
              >
                Let&apos;s Discuss
              </Link>
            </Button>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <img
              className="w-full h-auto object-contain"
              alt="Custom solutions"
              src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d81a8ffdbe47a72b1026097b90a62ed9-copy-1-1.png"
            />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Group3Subsection />
    </div>
  );
};
