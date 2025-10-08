import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Frame4Subsection } from "./sections/Frame4Subsection/Frame4Subsection";
import { Frame5Subsection } from "./sections/Frame5Subsection/Frame5Subsection";
import { Frame6Subsection } from "./sections/Frame6Subsection/Frame6Subsection";
import { Frame7Subsection } from "./sections/Frame7Subsection/Frame7Subsection";
import { Frame8Subsection } from "./sections/Frame8Subsection/Frame8Subsection";
import { Group1Subsection } from "./sections/Group1Subsection/Group1Subsection";
import { OurServices1Subsection } from "./sections/OurServices1Subsection/OurServices1Subsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection"; // Import the standardized footer

export const OurServicesMedia = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* Header */}
      <Frame4Subsection />

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[50px] md:text-[80px] lg:text-[120px] tracking-[0] leading-[1.1] mb-4 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Media<br />Production
          </h1>
          
          <OurServices1Subsection />
        </div>

        {/* Background decorative image */}
        <img
          className="absolute top-0 right-0 w-[500px] md:w-[800px] lg:w-[1203px] h-[600px] md:h-[1000px] lg:h-[1452px] bg-blend-hard-light object-cover opacity-30"
          alt="Layer"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-2-1.png"
        />
      </section>

      {/* Description Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[24px] md:text-[35px] lg:text-[45px] text-center tracking-[0] leading-[1.2] mb-4 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] px-4">
            FROM CONCEPT TO CREATION — WE BRING YOUR IDEAS TO LIFE.
          </h2>

          <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-base md:text-xl lg:text-[25px] tracking-[0] leading-7 md:leading-9 lg:leading-10 max-w-4xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] px-4">
            {"Powerful content is at the heart of every campaign. Our production team <br/> creates visuals that inspire, engage, and tell your story with impact. <br/> From cinematic videos to striking photography and dynamic motion <br/> graphics, we make sure your brand shines everywhere it appears."
              .split('<br/>').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < "Powerful content is at the heart of every campaign. Our production team <br/> creates visuals that inspire, engage, and tell your story with impact. <br/> From cinematic videos to striking photography and dynamic motion <br/> graphics, we make sure your brand shines everywhere it appears."
                    .split('<br/>').length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="relative px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
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
      <section className="relative px-8 py-16 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[45px] text-center tracking-[0] leading-[30px] mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          YOUR STORY DESERVES TO BE SEEN — BEAUTIFULLY
        </h2>

        <Link
          to="/contact-us"
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[45px] text-center tracking-[0] leading-[30px] underline block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] hover:text-[#ffcc04]/80 transition-colors"
        >
          LET&apos;S CREATE TOGETHER
        </Link>
      </section>

      {/* Footer */}
      <Group3Subsection />
    </div>
  );
};
