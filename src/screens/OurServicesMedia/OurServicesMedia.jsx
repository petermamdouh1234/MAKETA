import React from "react";
import { Link } from "react-router-dom";
import { Frame4Subsection } from "./sections/Frame4Subsection/Frame4Subsection";
import { Frame5Subsection } from "./sections/Frame5Subsection/Frame5Subsection";
import { Frame6Subsection } from "./sections/Frame6Subsection/Frame6Subsection";
import { Frame7Subsection } from "./sections/Frame7Subsection/Frame7Subsection";
import { Frame8Subsection } from "./sections/Frame8Subsection/Frame8Subsection";
import { OurServices1Subsection } from "./sections/OurServices1Subsection/OurServices1Subsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection";

export const OurServicesMedia = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* ===== HEADER ===== */}
      <Frame4Subsection />

      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 py-16 md:py-24 overflow-hidden">
        {/* Background Decorative Image - Top Left */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            className="absolute top-0 left-0 w-[350px] sm:w-[450px] md:w-[600px] lg:w-[700px] h-auto object-contain opacity-40"
            alt="Decorative background"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-2-1.png"
          />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-tight animate-fade-in opacity-0 [--animation-delay:200ms]">
            Media <br /> Production
          </h1>
          <OurServices1Subsection />
        </div>
      </section>

      {/* ===== DESCRIPTION SECTION ===== */}
      <div className="max-w-5xl mx-auto text-center mb-6 md:mb-10 px-4 md:px-8">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] leading-tight mb-2 animate-fade-in opacity-0 [--animation-delay:400ms]">
          FROM CONCEPT TO CREATION
        </h2>

        <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[1.3] mb-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
          “ WE BRING YOUR IDEAS TO LIFE ”
        </h3>

        <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed max-w-3xl mx-auto animate-fade-in opacity-0 [--animation-delay:800ms]">
          Powerful content is at the heart of every campaign. Our production
          team creates visuals that inspire, engage, and tell your story with
          impact. From cinematic videos to striking photography and dynamic
          motion graphics, we make sure your brand shines everywhere it appears.
        </p>
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <section className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          <div className="animate-fade-in opacity-0 [--animation-delay:800ms]">
            <Frame5Subsection />
          </div>
          <div className="animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <Frame6Subsection />
          </div>
          <div className="animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <Frame7Subsection />
          </div>
          <div className="animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <Frame8Subsection />
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="relative px-4 py-16 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-[1.2] mb-5 animate-fade-in opacity-0 [--animation-delay:1600ms]">
          YOUR STORY DESERVES TO BE SEEN BEAUTIFULLY
        </h2>

        <Link
          to="/contact-us"
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] underline block animate-fade-in opacity-0 [--animation-delay:1800ms] hover:text-[#ffcc04]/80 transition-colors"
        >
          LET&apos;S CREATE TOGETHER
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <Group3Subsection />
    </div>
  );
};
