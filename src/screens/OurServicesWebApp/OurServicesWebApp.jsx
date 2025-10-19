import React from "react";
import { Link } from "react-router-dom";
import { OurServicesWrapperSubsection } from "./sections/OurServicesWrapperSubsection/OurServicesWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection/Frame3Subsection";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection";

export const OurServicesWebApp = () => {
  return (
    <div
      className="bg-black min-h-screen w-full relative overflow-hidden
      [img]:object-cover [img]:object-center"
      style={{ zoom: 0.95 }} // Slightly zoomed out look
    >
      {/* ===== HEADER ===== */}
      <DivSubsection />

      {/* ===== HERO SECTION ===== */}
      <section className="relative px-4 md:px-8 py-12 md:py-20 overflow-hidden">
        {/* Background Decorative Image */}
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <img
            className="absolute top-0 left-0 w-[300px] sm:w-[420px] md:w-[550px] lg:w-[650px] h-auto object-contain opacity-40"
            alt="Decorative background"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[50px] sm:text-[70px] md:text-[90px] leading-tight mb-8 animate-fade-in opacity-0 [--animation-delay:200ms]">
            Web &amp;<br />App Development
          </h1>
          <OurServicesWrapperSubsection />
        </div>
      </section>

      {/* ===== DESCRIPTION SECTION ===== */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[28px] sm:text-[35px] md:text-[45px] leading-[1.2] mb-6 animate-fade-in opacity-0 [--animation-delay:400ms]">
          Seamless, Smart, and Built for Growth
        </h2>

        <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-[16px] sm:text-[20px] md:text-[25px] leading-relaxed max-w-4xl mx-auto animate-fade-in opacity-0 [--animation-delay:600ms]">
          {"Your website or app is more than a tool — it's the foundation of your digital presence. At Maketa, we craft platforms that are beautiful, intuitive, and designed to grow with your business."
            .split('. ')
            .map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && '.'}
                <br />
              </React.Fragment>
            ))}
        </p>
      </div>

      {/* ===== SERVICES LIST ===== */}
      <section className="relative px-4 md:px-8 py-12 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
          <div className="animate-fade-in opacity-0 [--animation-delay:800ms]">
            <SectionComponentNodeSubsection />
          </div>
          <div className="animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <Frame1Subsection />
          </div>
          <div className="animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <Frame2Subsection />
          </div>
          <div className="animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <Frame3Subsection />
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="relative px-4 sm:px-8 py-12 sm:py-16 text-center overflow-hidden">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[28px] sm:text-[35px] md:text-[45px] leading-tight mb-6 animate-fade-in opacity-0 [--animation-delay:1600ms]">
          Let’s Create Digital Experiences That Drive Your Business Forward
        </h2>

        <Link
          to="/contact-us"
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[22px] sm:text-[28px] md:text-[35px] leading-[30px] underline block animate-fade-in opacity-0 [--animation-delay:1800ms] hover:text-[#ffdd44] transition-colors duration-300"
        >
          START YOUR PROJECT TODAY
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <Group3Subsection />
    </div>
  );
};
