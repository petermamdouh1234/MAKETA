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
      
   {/* ===== OUR MARKETING SERVICES SECTION (PERFECT STYLE) ===== */}
<section className="relative flex flex-col items-center justify-center text-center py-10 md:py-20 px-4 overflow-hidden">
  {/* Background Image */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <img
      className="
        absolute 
        left-[-100px] 
        top-[-60px] 
        w-[350px]          /* 📱 fixed mobile size */
        sm:w-[350px]       /* same size on small tablets */
        md:w-[500px]       /* 💻 bigger on laptops */
        lg:w-[650px]       /* 🖥️ even bigger on desktops */
        h-auto 
        opacity-70 
        animate-pulse-slow
      "
      alt="Decorative background"
      src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d7a872adcd971a2d4d125cd7b4b0b2fb-copy-1.png"
    />
  </div>

  {/* HERO TEXT */}
  <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
    <h1
      className="text-white leading-[0.85] drop-shadow-md"
      style={{
        fontFamily: "Bebas Neue, Helvetica",
        fontSize: "clamp(50px, 11vw, 200px)",
      }}
    >
      OUR
    </h1>

    <h1
      className="text-[#ffcc04] leading-[0.85] drop-shadow-lg italic rotate-1"
      style={{
        fontFamily: "Bebas Neue, Helvetica",
        fontSize: "clamp(50px, 11vw, 200px)",
      }}
    >
      MARKETING
    </h1>

    <h1
      className="text-white leading-[0.85] drop-shadow-md"
      style={{
        fontFamily: "Bebas Neue, Helvetica",
        fontSize: "clamp(50px, 11vw, 200px)",
      }}
    >
      SERVICES
    </h1>
  </div>

  {/* DESCRIPTION BELOW HERO */}
 {/* ===== CREATIVE DESCRIPTION SECTION ===== */}
<div className="mt-10 md:mt-16 px-4 sm:px-8 max-w-4xl mx-auto text-center relative z-10">
  {/* Subtle Divider Line */}
  <div className="h-[1px] w-16 bg-[#ffcc04]/60 mx-auto mb-6"></div>

  {/* First Paragraph */}
  <p
    className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold tracking-wide animate-fade-in opacity-0 [--animation-delay:200ms]"
    style={{ fontFamily: "Gilroy-SemiBold, Helvetica" }}
  >
    Marketing is more than a campaign —{" "}
    <span className="text-[#ffcc04] font-extrabold">
      it’s your voice to the world.
    </span>{" "}
    At <span className="text-[#ffcc04] font-extrabold">Maketa</span>, we
    transform strategies into emotions and data into experiences — blending
    creativity and precision to reach your audience wherever they are.
  </p>

  {/* Second Paragraph */}
  <p
    className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mt-6 animate-fade-in opacity-0 [--animation-delay:500ms]"
    style={{ fontFamily: "Gilroy-Medium, Helvetica" }}
  >
    From{" "}
   
      social platforms
    {" "}
    to{" "}
    
      city streets
   
    , from storytelling ads to bold activations — we design strategies that{" "}
   
      speak, engage, and inspire action.
   
  </p>

  {/* Decorative Accent Glow */}
  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-[#ffcc04]/10 blur-3xl rounded-full"></div>
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
