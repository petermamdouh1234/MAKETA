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
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-2-1.png"
          />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-tight animate-fade-in opacity-0 [--animation-delay:200ms]">
            Media <br /> Production
          </h1>
          <div className="text-center [font-family:'Bebas_Neue',Helvetica] font-normal text-white max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto leading-tight">
        

        <h3 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] block text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] leading-[0.8]">
          SERVICES
        </h3>
      </div>
        </div>
    

      {/* ===== DESCRIPTION SECTION ===== */}
      <div className="mt-10 md:mt-16 px-4 sm:px-8 max-w-4xl mx-auto text-center relative z-10">
  {/* Subtle Divider Line */}
  <div className="h-[1px] w-16 bg-[#ffcc04]/60 mx-auto mb-6"></div>

  {/* First Paragraph */}
  <p
    className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold tracking-wide animate-fade-in opacity-0 [--animation-delay:200ms]"
    style={{ fontFamily: "Gilroy-SemiBold, Helvetica" }}
  >
    Powerful content is at the heart of every campaign. Our{" "}

      production team
      at  <span className="text-[#ffcc04] font-semibold">Maketa</span>
    {" "}
    creates visuals that inspire, engage, and tell your story with impact —
    transforming concepts into captivating moments that connect with your
    audience.
  </p>

  {/* Second Paragraph */}
  <p
    className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mt-6 animate-fade-in opacity-0 [--animation-delay:500ms]"
    style={{ fontFamily: "Gilroy-Medium, Helvetica" }}
  >
    From{" "}
   
      cinematic videos
   {" "}
    and{" "}
    
      striking photography
    {" "}
    to{" "}
   
      dynamic motion graphics
    
    — we make sure your brand{" "}
   
      shines everywhere it appears.
   
  </p>

  {/* Decorative Accent Glow */}
  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-[#ffcc04]/10 blur-3xl rounded-full"></div>
</div>


      
    </section>

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
