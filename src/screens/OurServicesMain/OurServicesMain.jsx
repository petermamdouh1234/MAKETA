import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Frame14Subsection } from "./sections/Frame14Subsection/Frame14Subsection";
import { Frame18Subsection } from "./sections/Frame18Subsection/Frame18Subsection";
import { Group3Subsection } from "./sections/Group3Subsection/Group3Subsection";

export const OurServicesMain = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* ===== HEADER ===== */}
      <Frame18Subsection />

      {/* ===== HERO SECTION ===== */}
    {/* ===== HERO SECTION ===== */}
<section className="relative flex flex-col items-center justify-center text-center py-10 md:py-20 px-4 overflow-hidden">
  {/* Background Decorative Image */}
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
    src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d7a872adcd971a2d4d125cd7b4b0b2fb-copy-1.png"
  />

  {/* Hero Text */}
  <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
    <h1
      className="text-[#ffcc04] animate-fade-in opacity-0 [--animation-delay:200ms]"
      style={{
        fontFamily: "Rockybilly-Regular, Helvetica",
        fontSize: "clamp(50px, 12vw, 130px)",
        lineHeight: "0.9",
      }}
    >
      Our Services
    </h1>

    <h2
      className="text-[#ffcc04] animate-fade-in opacity-0 [--animation-delay:400ms]"
      style={{
        fontFamily: "Rockybilly-Regular, Helvetica",
        fontSize: "clamp(50px, 11vw, 120px)",
        lineHeight: "0.9",
      }}
    >
      What
      <br />
      We Do
    </h2>
  </div>

  {/* ===== DESCRIPTION SECTION ===== */}
  <div className="mt-12 md:mt-16 px-3 sm:px-8 max-w-2xl mx-auto ">
    <p
      className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold"
      style={{ fontFamily: "Gilroy-SemiBold, Helvetica" }}
    >
      FROM STRATEGY TO EXECUTION, WE PROVIDE EVERYTHING YOUR BRAND NEEDS TO{" "}
      <span className="text-[#ffcc04] font-extrabold">STAND OUT</span>.
    </p>
  </div>
</section>




      {/* ===== SERVICES GRID SECTION ===== */}
      <section className="relative px-4 md:px-8 pt-4 pb-8 md:pb-12">
        <div className="translate-y-[-0.5rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <Frame14Subsection />
        </div>
      </section>

      {/* ===== CUSTOM SOLUTIONS SECTION ===== */}
    <section className="relative px-4 sm:px-6 md:px-12 py-10 md:py-20 bg-black overflow-hidden">
  <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 md:gap-12 flex-nowrap">
    
    {/* LEFT — Text Column */}
    <div className="flex-1 text-left min-w-[200px]">
      <h2 className="[font-family:'Bebas Neue',Helvetica] font-normal text-[#ffcc04] text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-[1] mb-4 animate-fade-in opacity-0 [--animation-delay:800ms]">
        Custom
      </h2>

      <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed mb-6 animate-fade-in opacity-0 [--animation-delay:1000ms] max-w-lg">
        Need more? We&#39;ll create a program that&#39;s just right for you.
        Precision-crafted solutions tailored to your unique brand needs.
        Elevating your digital experience and evolving your marketing strategies
        to drive radical results.
      </p>

      <Button
        asChild
        className="inline-flex items-center justify-center gap-2 px-8 md:px-12 py-3 md:py-[15px] rounded-[15px] border-2 border-[#ffcc04] bg-transparent text-white hover:bg-[#ffcc04] hover:text-black transition-colors animate-fade-in opacity-0 [--animation-delay:1200ms]"
      >
        <Link
          to="/contact-us"
          className="[font-family:'Poppins',Helvetica] font-medium text-sm md:text-base text-center"
        >
          Let&apos;s Discuss
        </Link>
      </Button>
    </div>

    {/* RIGHT — Image Column */}
    <div className="flex justify-center flex-shrink-0 w-[40%] md:w-[35%] animate-fade-in opacity-0 [--animation-delay:1400ms]">
      <img
       className="w-[80%] sm:w-[80%] md:w-[80%] max-w-[420px] h-auto object-contain"
        alt="Custom solutions"
        src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d81a8ffdbe47a72b1026097b90a62ed9-copy-1-1.png"
      />
    </div>
  </div>
</section>


      {/* ===== FOOTER ===== */}
      <Group3Subsection />
    </div>
  );
};
