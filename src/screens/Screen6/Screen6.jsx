import React from "react";
import { Link } from "react-router-dom";
import { Frame9Subsection } from "./sections/Frame9Subsection/Frame9Subsection";
import { Frame10Subsection } from "./sections/Frame10Subsection/Frame10Subsection";
import { Frame11Subsection } from "./sections/Frame11Subsection/Frame11Subsection";
import { Frame12Subsection } from "./sections/Frame12Subsection/Frame12Subsection";
import { Frame13Subsection } from "./sections/Frame13Subsection/Frame13Subsection";
import { OurServices2Subsection } from "./sections/OurServices2Subsection/OurServices2Subsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection";

export const Screen6 = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* ===== HEADER ===== */}
      <Frame9Subsection />

      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center justify-center px-4 md:px-8 py-10 md:py-14">
        <div className="text-center mb-6 md:mb-10">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] tracking-[0] leading-[1.1] mb-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
            Branding
          </h1>

          <div className="max-w-[85%] md:max-w-[65%] lg:max-w-[55%] mx-auto">
            <OurServices2Subsection />
          </div>
        </div>

        {/* ===== BACKGROUND IMAGE ===== */}
        <div className="absolute top-8 left-[-60px] pointer-events-none opacity-30">
          <img
            className="w-[500px] sm:w-[650px] md:w-[750px] lg:w-[800px] h-auto object-contain"
            alt="Decorative background"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
          />
        </div>
      </section>

      {/* ===== DESCRIPTION SECTION ===== */}
      <section className="relative px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-tight mb-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
            YOUR BRAND IS MORE THAN A LOGO IT&apos;S A STORY
          </h2>

          <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-relaxed md:leading-8 max-w-3xl mx-auto animate-fade-in opacity-0 [--animation-delay:600ms]">
            {"We help you craft a unique identity that makes your audience instantly <br/> recognize and trust you. From strategy to visuals, we ensure every <br/> detail reflects who you are and what you stand for."
              .split("<br/>")
              .map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="relative px-4 md:px-8 py-10 md:py-14">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          <div className="animate-fade-in opacity-0 [--animation-delay:800ms]">
            <Frame10Subsection />
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <Frame11Subsection />
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <Frame12Subsection />
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <Frame13Subsection />
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="relative px-4 md:px-8 py-10 md:py-14 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-tight mb-4 animate-fade-in opacity-0 [--animation-delay:1600ms]">
          BUILD A BRAND THAT PEOPLE BELIEVE IN
        </h2>

        <Link
          to="/contact-us"
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] underline hover:text-[#ffdd33] transition-colors duration-300 animate-fade-in opacity-0 [--animation-delay:1800ms]"
        >
          LET&apos;S CRAFT YOUR IDENTITY
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <Group3Subsection />
    </div>
  );
};
