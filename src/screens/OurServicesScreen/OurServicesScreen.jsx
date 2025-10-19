import React from "react";
import { Link } from "react-router-dom";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection";
import { OurServicesSubsection } from "./sections/OurServicesSubsection/OurServicesSubsection";

export const OurServicesScreen = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* ===== HEADER ===== */}
      <FrameWrapperSubsection />

      {/* ===== HERO SECTION ===== */}
      <section className="relative px-4 md:px-6 pt-6 pb-2 text-center">
        <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[48px] md:text-[80px] lg:text-[100px] mb-2 md:mb-4 leading-none animate-fade-in opacity-0 [--animation-delay:200ms]">
          Marketing
        </h1>

        <div className="mt-0 mb-0">
          <OurServicesSubsection />
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="relative px-6 md:px-12 py-14 md:py-20 max-w-5xl mx-auto bg-black border-t border-b border-[#3c3c3c] text-left md:text-center">
  <div className="space-y-6">
    <h2 className="[font-family:'Rockybilly-Regular',Helvetica] text-[#ffcc04] text-4xl md:text-6xl font-normal tracking-wide animate-fade-in opacity-0 [--animation-delay:300ms]">
      We Build Connection, Not Just Campaigns
    </h2>

    <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] text-white text-sm md:text-base lg:text-lg leading-relaxed md:leading-8 animate-fade-in opacity-0 [--animation-delay:500ms]">
      Marketing is more than a campaign — it’s how your brand declares its
      presence in the world. At <span className="text-[#ffcc04]">Maketa</span>, we combine
      digital precision and offline experiences to connect you to the right
      audience, wherever they are.
    </p>

    <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] text-white/80 text-sm md:text-base lg:text-lg leading-relaxed md:leading-8 animate-fade-in opacity-0 [--animation-delay:700ms]">
      From social platforms to city streets, from storytelling ads to bold
      activations — we design strategies that speak, engage, and inspire action.
    </p>
  </div>
</section>


      {/* ===== DIGITAL & OFFLINE MARKETING (Side-by-Side Always) ===== */}
      <section className="relative w-full px-2 sm:px-4 md:px-6 py-6">
        <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-10 max-w-6xl mx-auto">
          {/* DIGITAL */}
          <div className="flex flex-col items-center md:items-end w-[48%] min-w-[320px]">
            <h2 className="[font-family:'Bebas Neue',Helvetica] font-normal text-[#ffcc04] text-[28px] sm:text-[34px] md:text-[50px] leading-tight mb-3 text-center md:text-right">
              Digital<br />Marketing
            </h2>
            <FrameSubsection />
          </div>

          {/* OFFLINE */}
          <div className="flex flex-col items-center md:items-start w-[48%] min-w-[320px]">
            <h2 className="[font-family:'Bebas Neue',Helvetica] font-normal text-[#ffcc04] text-[28px] sm:text-[34px] md:text-[50px] leading-tight mb-3 text-center md:text-left">
              Offline<br />Marketing
            </h2>
            <DivWrapperSubsection />
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="relative px-4 md:px-6 py-6 md:py-8 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[18px] md:text-[26px] lg:text-[32px] leading-snug mb-3 md:mb-5 animate-fade-in opacity-0 [--animation-delay:1400ms]">
          READY TO DECLARE YOUR PRESENCE ACROSS EVERY CHANNEL?
        </h2>

        <Link
          to="/contact-us"
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[18px] md:text-[26px] lg:text-[32px] underline hover:text-[#ffcc04]/80 transition-colors animate-fade-in opacity-0 [--animation-delay:1600ms]"
        >
          LET&apos;S START YOUR CAMPAIGN
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <Group3Subsection />
    </div>
  );
};
