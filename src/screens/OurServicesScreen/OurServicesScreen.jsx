import React from "react";
import { Link } from "react-router-dom";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection/GroupSubsection";
import { OurServicesSubsection } from "./sections/OurServicesSubsection/OurServicesSubsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection";

export const OurServicesScreen = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* ===== HEADER ===== */}
      <FrameWrapperSubsection />

      {/* ===== HERO SECTION ===== */}
      <section className="relative px-4 md:px-8 py-10 md:py-14 text-center">
        <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[60px] md:text-[90px] lg:text-[110px] mb-6 md:mb-10 leading-none animate-fade-in opacity-0 [--animation-delay:200ms]">
          Marketing
        </h1>
        <OurServicesSubsection />
      </section>

      {/* ===== MARKETING INTRO SECTION ===== */}
      <section className="relative px-4 md:px-8 py-8 md:py-12 text-center max-w-5xl mx-auto">
        <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 lg:leading-9 animate-fade-in opacity-0 [--animation-delay:400ms]">
          Marketing is more than a campaign — it’s the way your brand declares its
          presence in the world. At Maketa, we combine the power of digital and
          offline strategies to build integrated experiences that reach audiences
          wherever they are.
          <br />
          <br />
          We don’t treat digital and offline as separate worlds — we connect them.
          From social platforms to city streets, from targeted ads to unforgettable
          activations, we design marketing that speaks, engages, and delivers real
          results.
        </p>
      </section>

      {/* ===== DIGITAL & OFFLINE MARKETING SECTION ===== */}
      <section className="relative px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-center">
          <div className="animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h2 className="[font-family:'Bebas Neue',Helvetica] font-normal text-[#ffcc04] text-[45px] md:text-[70px] lg:text-[90px] leading-[0.9]">
              Digital<br />Marketing
            </h2>
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:800ms]">
            <h2 className="[font-family:'Bebas Neue',Helvetica] font-normal text-[#ffcc04] text-[45px] md:text-[70px] lg:text-[90px] leading-[0.9]">
              Offline<br />Marketing
            </h2>
          </div>
        </div>
      </section>

      {/* ===== SERVICES LISTS ===== */}
      <section className="relative px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <FrameSubsection />
          </div>

          <div className="animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <DivWrapperSubsection />
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="relative px-4 md:px-8 py-10 md:py-14 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[22px] md:text-[30px] lg:text-[38px] leading-[1.3] mb-4 md:mb-6 animate-fade-in opacity-0 [--animation-delay:1400ms]">
          READY TO DECLARE YOUR PRESENCE ACROSS EVERY CHANNEL?
        </h2>

        <Link
          to="/contact-us"
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[22px] md:text-[30px] lg:text-[38px] underline hover:text-[#ffcc04]/80 transition-colors animate-fade-in opacity-0 [--animation-delay:1600ms]"
        >
          LET&apos;S START YOUR CAMPAIGN
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <Group3Subsection />
    </div>
  );
};
