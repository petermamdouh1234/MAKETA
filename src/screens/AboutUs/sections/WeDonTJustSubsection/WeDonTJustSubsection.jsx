import React from "react";

export const WeDonTJustSubsection = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="[font-family:'Bebas_Neue',Helvetica] font-normal text-[50px] md:text-[70px] leading-[0.87] tracking-wide">
          <span className="text-white reveal-stagger">
            We don&apos;t just deliver services,{" "}
          </span>
          <span className="text-[#ffcc04] reveal-stagger inline-block">
            We build connections.
          </span>
          <br />
          <span className="text-[#ffcc04] reveal-stagger inline-block">
            We don&apos;t just design campaigns,
          </span>
          <br />
          <span className="text-white reveal-stagger inline-block">
            We create movements
            <br />
            that audiences remember.
          </span>
        </h2>
      </div>
    </section>
  );
};
