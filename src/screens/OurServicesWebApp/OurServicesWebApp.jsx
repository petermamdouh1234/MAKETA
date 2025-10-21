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
    <section className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 py-16 md:py-24 overflow-hidden">
  {/* ===== BACKGROUND DECORATIVE IMAGE ===== */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <img
      className="
        absolute 
        left-[-100px] 
        top-[-60px] 
        w-[350px]          /* 📱 fixed mobile size */
        sm:w-[350px]       /* keeps same size on small tablets */
        md:w-[500px]       /* 💻 bigger on medium screens (laptops) */
        lg:w-[650px]       /* 🖥️ even bigger on large desktops */
        h-auto 
        opacity-70 
        animate-pulse-slow
      "
      alt="Decorative background"
      src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
    />
  </div>

  {/* ===== HERO TEXT ===== */}
  <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
    <h1
      className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-tight animate-fade-in opacity-0 [--animation-delay:200ms]"
    >
      Web &amp;<br />App Development
    </h1>

    <div className="text-center [font-family:'Bebas_Neue',Helvetica] font-normal text-white max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto leading-tight">
      <h3
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] block text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] leading-[0.8]"
      >
        SERVICES
      </h3>
    </div>
  </div>

  {/* ===== DESCRIPTION SECTION ===== */}
  <div className="mt-12 md:mt-20 px-4 sm:px-8 max-w-4xl mx-auto text-center relative z-10">
    {/* Subtle Divider Line */}
    <div className="h-[1px] w-16 bg-[#ffcc04]/60 mx-auto mb-6"></div>

    {/* Highlight Heading */}
    <h2
      className="[font-family:'Gilroy-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] leading-tight mb-6 animate-fade-in opacity-0 [--animation-delay:400ms]"
      style={{ fontSize: "clamp(26px, 3vw, 45px)" }}
    >
      Seamless, Smart, and Built for Growth
    </h2>

    {/* Description Text */}
    <p
      className="[font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-white text-sm sm:text-base md:text-lg leading-relaxed tracking-wide animate-fade-in opacity-0 [--animation-delay:600ms]"
    >
      Your website or app is more than a tool —{" "}
      
        it's the foundation of your digital presence.
      
      At <span className="text-[#ffcc04] font-extrabold">Maketa</span>, we craft
      platforms that are{" "}
     beautiful,{" "}
      intuitive, and{" "}
     designed to grow with
      your business.
    </p>

    {/* Decorative Glow */}
    <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-[#ffcc04]/10 blur-3xl rounded-full"></div>
  </div>
</section>

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
