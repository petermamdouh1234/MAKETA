import React from "react";
import { Link } from "react-router-dom";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection/GroupSubsection";
import { OurServicesSubsection } from "./sections/OurServicesSubsection/OurServicesSubsection";
import { Group3Subsection } from "../OurServicesMain/sections/Group3Subsection/Group3Subsection"; // Import the standardized footer

export const OurServicesScreen = () => {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* Header */}
      <FrameWrapperSubsection />

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-[60px] md:text-[90px] lg:text-[120px] tracking-[0] leading-[normal] mb-4 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Marketing
          </h1>
          
          <OurServicesSubsection />
        </div>
      </section>

      {/* Marketing Types Section */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
          <div className="text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h2 className="[font-family:'Bebas_Neue',Helvetica] font-normal text-[#ffcc04] text-[80px] md:text-[120px] lg:text-[150px] tracking-[0] leading-[0.9] mb-4 md:mb-8">
              Digital<br />Marketing
            </h2>
          </div>
          
          <div className="text-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h2 className="[font-family:'Bebas_Neue',Helvetica] font-normal text-[#ffcc04] text-[80px] md:text-[120px] lg:text-[150px] tracking-[0] leading-[0.9] mb-4 md:mb-8">
              Offline<br />Marketing
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16 px-4">
          <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-base md:text-xl lg:text-[25px] tracking-[0] leading-7 md:leading-9 lg:leading-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            {"Marketing is more than a campaign — it's the way your brand <br/> declares its presence in the world. At Maketa, we combine the power of <br/> digital and offline strategies to build integrated experiences that <br/> reach audiences wherever they are. <br/><br/> We don't treat digital and offline as separate worlds — we connect <br/> them. From social platforms to city streets, from targeted ads to <br/> unforgettable activations, we design marketing that speaks, engages, and <br/> delivers real results."
              .split('<br/>').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < "Marketing is more than a campaign — it's the way your brand <br/> declares its presence in the world. At Maketa, we combine the power of <br/> digital and offline strategies to build integrated experiences that <br/> reach audiences wherever they are. <br/><br/> We don't treat digital and offline as separate worlds — we connect <br/> them. From social platforms to city streets, from targeted ads to <br/> unforgettable activations, we design marketing that speaks, engages, and <br/> delivers real results."
                    .split('<br/>').length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
        </div>
      </section>

      {/* Services Lists */}
      <section className="relative px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <FrameSubsection />
          </div>
          
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <DivWrapperSubsection />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative px-4 md:px-8 py-8 md:py-16 text-center">
        <h2 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-white text-[24px] md:text-[35px] lg:text-[45px] text-center tracking-[0] leading-[1.2] mb-6 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] px-4">
          READY TO DECLARE YOUR PRESENCE ACROSS EVERY CHANNEL?
        </h2>

        <Link
          className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-[24px] md:text-[35px] lg:text-[45px] text-center tracking-[0] leading-[1.2] underline block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms] hover:text-[#ffcc04]/80 transition-colors px-4"
          to="/contact-us"
        >
          LET&apos;S START YOUR CAMPAIGN
        </Link>
      </section>

      {/* Footer */}
      <Group3Subsection />
    </div>
  );
};
