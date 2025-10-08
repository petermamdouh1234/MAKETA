import React from "react";
import { Link } from "react-router-dom";
import { Frame9Subsection } from "./sections/Frame9Subsection/Frame9Subsection";
import { Frame10Subsection } from "./sections/Frame10Subsection/Frame10Subsection";
import { Frame11Subsection } from "./sections/Frame11Subsection/Frame11Subsection";
import { Frame12Subsection } from "./sections/Frame12Subsection/Frame12Subsection";
import { Frame13Subsection } from "./sections/Frame13Subsection/Frame13Subsection";
import { Group2Subsection } from "./sections/Group2Subsection/Group2Subsection";
import { OurServices2Subsection } from "./sections/OurServices2Subsection/OurServices2Subsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection"; // Import the standardized footer

export const Screen6 = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* Header */}
      <Frame9Subsection />

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[60px] md:text-[90px] lg:text-[120px] tracking-[0] leading-[normal] mb-4 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Branding
          </h1>
          
          <OurServices2Subsection />
        </div>

        {/* Background decorative image */}
        <img
          className="absolute top-0 right-0 w-[400px] md:w-[650px] lg:w-[883px] h-[500px] md:h-[800px] lg:h-[1122px] bg-blend-difference object-cover opacity-30"
          alt="Layer"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
        />
      </section>

      {/* Description Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[24px] md:text-[35px] lg:text-[45px] text-center tracking-[0] leading-[1.2] mb-4 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] px-4">
            YOUR BRAND IS MORE THAN A LOGO — IT&apos;S A STORY
          </h2>

          <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-base md:text-xl lg:text-[25px] tracking-[0] leading-7 md:leading-9 lg:leading-10 max-w-4xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] px-4">
            {"We help you craft a unique identity that makes your audience instantly <br/> recognize and trust you. From strategy to visuals, we ensure every <br/> detail reflects who you are and what you stand for."
              .split('<br/>').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < "We help you craft a unique identity that makes your audience instantly <br/> recognize and trust you. From strategy to visuals, we ensure every <br/> detail reflects who you are and what you stand for."
                    .split('<br/>').length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto space-y-4 md:space-y-8">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <Frame10Subsection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <Frame11Subsection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <Frame12Subsection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <Frame13Subsection />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative px-4 md:px-8 py-8 md:py-16 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[24px] md:text-[35px] lg:text-[45px] text-center tracking-[0] leading-[1.2] mb-6 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms] px-4">
          BUILD A BRAND THAT PEOPLE BELIEVE IN
        </h2>

        <Link
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[24px] md:text-[35px] lg:text-[45px] text-center tracking-[0] leading-[1.2] underline block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] hover:text-[#ffdd33] transition-colors duration-300 px-4"
          to="/contact-us"
        >
          LET&apos;S CRAFT YOUR IDENTITY
        </Link>
      </section>

      {/* Footer */}
      <Group3Subsection />
    </div>
  );
};
