import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperSubsection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      number: "01",
      title: "EVENTS / PR",
      description:
        "From product launches to press conferences and media coverage, we craft events and public relations strategies that put your brand in the spotlight. Every moment is designed to engage the right audience and generate meaningful buzz.",
      delay: "0ms",
    },
    {
      number: "02",
      title: "ACTIVATIONS",
      description:
        "We bring your brand to life with creative on-ground activations that connect emotionally with your audience — ensuring unforgettable experiences that drive engagement.",
      delay: "200ms",
    },
    {
      number: "03",
      title: "PRINT CAMPAIGNS",
      description:
        "From posters to billboards, we design and produce impactful print campaigns that communicate your message with clarity, creativity, and precision.",
      delay: "400ms",
    },
  ];

  return (
    <section className="w-full max-w-[685px] mx-auto space-y-[4px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      {services.map((service, index) => (
        <Card
          key={`service-${index}`}
          className={`bg-black border-2 md:border-4 border-[#3c3c3c] overflow-hidden transition-all duration-300 ${
            hoveredIndex === index
              ? "h-auto min-h-[180px] md:min-h-[230px]"
              : "h-[85px] md:h-[120px]"
          }`}
          style={{ "--animation-delay": service.delay }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardContent className="flex flex-col justify-center h-full p-0">
            {/* Title */}
            <h3 className="px-4 md:pl-14 py-4 md:py-0 font-semibold text-white text-2xl md:text-4xl text-right leading-tight [font-family:'Gilroy-SemiBold-SemiBold',Helvetica]">
              <span className="block md:inline">{service.number}</span>{" "}
              <span className="block md:inline">{service.title}</span>
            </h3>

            {/* Description on hover */}
            {hoveredIndex === index && (
              <div className="px-4 md:px-14 pb-4 md:pt-4 text-white text-sm md:text-base text-left leading-5 md:leading-6 transition-opacity duration-300 opacity-100 [font-family:'Gilroy-Medium-Medium',Helvetica]">
                {service.description}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
