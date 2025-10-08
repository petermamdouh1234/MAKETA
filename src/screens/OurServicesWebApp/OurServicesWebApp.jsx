import React from "react";
import { Link } from "react-router-dom";
import { AtMaketaWeBelieveSubsection } from "../AboutUs/sections/AtMaketaWeBelieveSubsection/AtMaketaWeBelieveSubsection";
import { ComponentSubsection } from "../AboutUs/sections/ComponentSubsection/ComponentSubsection";
import { Frame19Subsection } from "../AboutUs/sections/Frame19Subsection/Frame19Subsection";
import { Frame20Subsection } from "../AboutUs/sections/Frame20Subsection/Frame20Subsection";
import { Group4Subsection } from "../AboutUs/sections/Group4Subsection/Group4Subsection";
import { WeDonTJustSubsection } from "../AboutUs/sections/WeDonTJustSubsection/WeDonTJustSubsection";
import { Frame14Subsection } from "../OurServicesMain/sections/Frame14Subsection/Frame14Subsection";
import { Frame15Subsection } from "../OurServicesMain/sections/Frame15Subsection/Frame15Subsection";
import { Frame16Subsection } from "../OurServicesMain/sections/Frame16Subsection/Frame16Subsection";
import { Frame17Subsection } from "../OurServicesMain/sections/Frame17Subsection/Frame17Subsection";
import { Frame18Subsection } from "../OurServicesMain/sections/Frame18Subsection/Frame18Subsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection";
import { WhatWeDoSubsection } from "../OurServicesMain/sections/WhatWeDoSubsection/WhatWeDoSubsection";
import { Frame4Subsection } from "../OurServicesMedia/sections/Frame4Subsection/Frame4Subsection";
import { Frame5Subsection } from "../OurServicesMedia/sections/Frame5Subsection/Frame5Subsection";
import { Frame6Subsection } from "../OurServicesMedia/sections/Frame6Subsection/Frame6Subsection";
import { Frame7Subsection } from "../OurServicesMedia/sections/Frame7Subsection/Frame7Subsection";
import { Frame8Subsection } from "../OurServicesMedia/sections/Frame8Subsection/Frame8Subsection";
import { Group1Subsection } from "../OurServicesMedia/sections/Group1Subsection/Group1Subsection";
import { OurServices1Subsection } from "../OurServicesMedia/sections/OurServices1Subsection/OurServices1Subsection";
import { DivWrapperSubsection } from "../OurServicesScreen/sections/DivWrapperSubsection/DivWrapperSubsection";
import { FrameSubsection } from "../OurServicesScreen/sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "../OurServicesScreen/sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GroupSubsection } from "../OurServicesScreen/sections/GroupSubsection/GroupSubsection";
import { OurServicesSubsection } from "../OurServicesScreen/sections/OurServicesSubsection/OurServicesSubsection";
import { Frame9Subsection } from "../Screen6/sections/Frame9Subsection/Frame9Subsection";
import { Frame10Subsection } from "../Screen6/sections/Frame10Subsection/Frame10Subsection";
import { Frame11Subsection } from "../Screen6/sections/Frame11Subsection/Frame11Subsection";
import { Frame12Subsection } from "../Screen6/sections/Frame12Subsection/Frame12Subsection";
import { Frame13Subsection } from "../Screen6/sections/Frame13Subsection/Frame13Subsection";
import { Group2Subsection } from "../Screen6/sections/Group2Subsection/Group2Subsection";
import { OurServices2Subsection } from "../Screen6/sections/OurServices2Subsection/OurServices2Subsection";
import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection/Frame2Subsection";
import { Frame3Subsection } from "./sections/Frame3Subsection/Frame3Subsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection/GroupWrapperSubsection";
import { OurServicesWrapperSubsection } from "./sections/OurServicesWrapperSubsection/OurServicesWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";
// import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection"; // This import is not needed if Group3Subsection is already imported or not used directly here

export const OurServicesWebApp = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* Header */}
      <DivSubsection />

      {/* Hero Section */}
      <section className="relative px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[90px] tracking-[0] leading-[normal] mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Web &amp;<br />App Development
          </h1>
          
          <OurServicesWrapperSubsection />
        </div>

        {/* Background decorative image */}
        <img
          className="absolute top-0 right-0 w-[782px] h-[754px] bg-blend-difference object-cover opacity-30"
          alt="Img"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/d81a8ffdbe47a72b1026097b90a62ed9-copy-1-1.png"
        />
      </section>

      {/* Description Section */}
      <section className="relative px-8 py-16">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[45px] text-center tracking-[0] leading-[30px] mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            SEAMLESS, SMART, AND BUILT FOR GROWTH.
          </h2>

          <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-[25px] tracking-[0] leading-10 max-w-4xl mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            {"Your website or app isn't just a tool — it's the core of your <br/> digital presence. At Maketa, we design and develop platforms that are <br/> beautiful, user-friendly, and built to scale with your business."
              .split('<br/>').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < "Your website or app isn't just a tool — it's the core of your <br/> digital presence. At Maketa, we design and develop platforms that are <br/> beautiful, user-friendly, and built to scale with your business."
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
            <SectionComponentNodeSubsection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <Frame1Subsection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <Frame2Subsection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <Frame3Subsection />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative px-8 py-16 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[45px] text-center tracking-[0] leading-[30px] mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          LET&apos;S BUILD DIGITAL EXPERIENCES THAT MOVE YOUR BUSINESS FORWARD
        </h2>

        <Link
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[45px] text-center tracking-[0] leading-[30px] underline block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] hover:text-[#ffdd44] transition-colors duration-300"
          to="/contact-us"
        >
          START YOUR PROJECT TODAY
        </Link>
      </section>

      {/* Footer */}
      <Group3Subsection />
    </div>
  );
};
