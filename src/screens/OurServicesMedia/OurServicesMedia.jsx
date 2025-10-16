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
      {/* Header */}
      <Frame4Subsection />

      {/* Hero Section */}
     <section className="relative px-4 md:px-8 pt-12 pb-8 md:pt-16 md:pb-10">
  {/* Centered Background Image */}
  <div className="absolute top-8 left-[-60px] pointer-events-none opacity-30">
          <img
            className="w-[500px] sm:w-[650px] md:w-[750px] lg:w-[800px] h-auto object-contain"
            alt="Decorative background"
      src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-2-1.png"
    />
  </div>

  <div className="text-center relative z-10">
    <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[50px] md:text-[80px] lg:text-[110px] tracking-[0] leading-[1] mb-4 md:mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Media<br />Production
    </h1>

    <div className="mt-[-10px]">
      <OurServices1Subsection />
    </div>
  </div>
</section>


      {/* Description Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[22px] md:text-[32px] lg:text-[42px] tracking-[0] leading-tight mb-3 md:mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <br /> FROM CONCEPT TO CREATION <br /> 
          <h2
  className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[24px] md:text-[35px] lg:text-[45px] text-center tracking-[0] leading-[1.2] mb-6 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms] px-4"
>
  “ WE BRING YOUR IDEAS TO LIFE ”
</h2>

          </h2>

          <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-base md:text-lg lg:text-[22px] tracking-[0] leading-7 md:leading-8 lg:leading-9 max-w-3xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            {"Powerful content is at the heart of every campaign. Our production team <br/> creates visuals that inspire, engage, and tell your story with impact. <br/> From cinematic videos to striking photography and dynamic motion <br/> graphics, we make sure your brand shines everywhere it appears."
              .split('<br/>')
              .map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
        </div>
      </section>

     {/* Services List */}
<section className="relative px-4 md:px-8 py-12 md:py-20">
  <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
      <Frame5Subsection />
    </div>

    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
      <Frame6Subsection />
    </div>

    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
      <Frame7Subsection />
    </div>

    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
      <Frame8Subsection />
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="relative px-4 py-12 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[36px] md:text-[42px] tracking-[0] leading-[1.2] mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          YOUR STORY DESERVES TO BE SEEN BEAUTIFULLY
        </h2>

        <Link
          to="/contact-us"
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[36px] md:text-[42px] tracking-[0] underline block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] hover:text-[#ffcc04]/80 transition-colors"
        >
          LET&apos;S CREATE TOGETHER
        </Link>
      </section>

      {/* Footer */}
      <Group3Subsection />
    </div>
  );
};
