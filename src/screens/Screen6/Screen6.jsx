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
      <section className="relative flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-10">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[45px] sm:text-[65px] md:text-[85px] lg:text-[100px] leading-[1.05] mb-3 animate-fade-in opacity-0 [--animation-delay:200ms]">
            Branding
          </h1>

          <div className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto">
            <OurServices2Subsection />
          </div>
        </div>

        {/* ===== BACKGROUND IMAGE ===== */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            className="absolute top-0 left-0 w-[300px] sm:w-[420px] md:w-[550px] lg:w-[650px] h-auto object-contain opacity-40"
            alt="Decorative background"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
          />
        </div>
      </section>

      {/* ===== DESCRIPTION SECTION ===== */}
      <section className="relative px-4 md:px-8 py-6 md:py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] leading-tight mb-2 animate-fade-in opacity-0 [--animation-delay:400ms]">
            YOUR BRAND IS MORE THAN A LOGO
          </h2>

          <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[22px] md:text-[32px] lg:text-[40px] text-center leading-[1.2] mb-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
            “ IT&apos;S A STORY ”
          </h3>

          <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-3xl mx-auto animate-fade-in opacity-0 [--animation-delay:800ms]">
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
      <section className="relative px-4 md:px-8 py-6 md:py-10">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
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
      <section className="relative px-4 md:px-8 py-8 md:py-10 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] leading-tight mb-2 animate-fade-in opacity-0 [--animation-delay:1600ms]">
          BUILD A BRAND THAT PEOPLE BELIEVE IN
        </h2>

        <Link
          to="/contact-us"
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] underline hover:text-[#ffdd33] transition-colors duration-300 animate-fade-in opacity-0 [--animation-delay:1800ms]"
        >
          LET&apos;S CRAFT YOUR IDENTITY
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <Group3Subsection />
    </div>
  );
};
