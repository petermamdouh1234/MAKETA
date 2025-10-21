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
     <section className="relative flex flex-col items-center justify-center text-center py-10 md:py-20 px-4 overflow-hidden">
  {/* Background Image */}
  <img
    className="
      absolute 
      left-[-100px] 
      top-[-60px] 
      w-[350px]          /* 📱 fixed mobile size */
      sm:w-[350px]       
      md:w-[500px]       /* 💻 bigger on medium screens */
      lg:w-[650px]       /* 🖥️ even bigger on large desktops */
      h-auto 
      opacity-70 
      animate-pulse-slow
    "
    src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
    alt="Decorative background"
  />

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
     Branding 
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

  {/* DESCRIPTION */}
 <div className="mt-10 md:mt-16 px-4 sm:px-8 max-w-4xl mx-auto text-center relative z-10">
  {/* Subtle Divider Line */}
  <div className="h-[1px] w-16 bg-[#ffcc04]/60 mx-auto mb-6"></div>

  {/* First Paragraph */}
  <p
    className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold tracking-wide animate-fade-in opacity-0 [--animation-delay:200ms]"
    style={{ fontFamily: "Gilroy-SemiBold, Helvetica" }}
  >
    We help you craft a{" "}
    
      unique identity
    {" "}
    that makes your audience instantly{" "}
   
      recognize and trust you.
     {" "}
    From strategy to visuals, we ensure every detail reflects who you are and what you stand for.
  </p>

  {/* Second Paragraph */}
  <p
    className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mt-6 animate-fade-in opacity-0 [--animation-delay:500ms]"
    style={{ fontFamily: "Gilroy-Medium, Helvetica" }}
  >
    Your brand is more than a logo —{" "}
    it’s a{" "}
    <span className="text-[#ffcc04] font-semibold">
      story that lives in every color, word, and detail.
    </span>{" "}
    We build brands that{" "}
    
      speak clearly, connect emotionally,
    {" "}
    and{" "}
    
      stay unforgettable.
    
  </p>

  {/* Decorative Accent Glow */}
  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-[#ffcc04]/10 blur-3xl rounded-full"></div>
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
