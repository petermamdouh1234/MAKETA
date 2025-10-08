import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperSubsection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      number: "01",
      title: "EVENTS / PR",
      description: "From product launches to press conferences and media coverage, we craft events and public relations strategies that put your brand in the spotlight. Every moment is designed to engage the right audience and generate meaningful buzz.",
      delay: "0ms",
    },
    {
      number: "02",
      title: "ACTIVATIONS",
      description: "From product launches to press conferences and media coverage, we craft events and public relations strategies that put your brand in the spotlight. Every moment is designed to engage the right audience and generate meaningful buzz.",
      delay: "200ms",
    },
    {
      number: "03",
      title: "PRINT CAMPAIGNS",
      description: "From product launches to corporate gatherings, we plan and execute events that leave lasting impressions. Every detail is crafted to align with your brand and engage your audience face-to-face.",
      delay: "400ms",
    },
  ];

  return (
    <section className="w-full max-w-[685px] mx-auto">
      <div className="flex flex-col gap-[5px]">
        {services.map((service, index) => (
          <Card
            key={`service-${index}`}
            className={`translate-y-[-1rem] animate-fade-in opacity-0 bg-black border-2 md:border-4 border-[#3c3c3c] rounded-none overflow-hidden transition-all duration-300 ${
              hoveredIndex === index ? 'h-auto min-h-[200px] md:min-h-[250px]' : 'h-[100px] md:h-[134px]'
            }`}
            style={{ "--animation-delay": service.delay }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent className="flex flex-col justify-center h-full p-0 pr-4 md:pr-6">
              <h3 className="px-4 md:px-0 py-4 md:py-0 [font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-3xl md:text-5xl lg:text-6xl text-right tracking-[0] leading-[1.2] md:leading-[25px]">
                <span className="block md:inline">{service.number}</span> <span className="block md:inline">{service.title}</span>
              </h3>
              {hoveredIndex === index && (
                <div className="px-4 md:px-14 pb-4 md:pt-4 text-white text-sm md:text-base text-right [font-family:'Gilroy-Medium-Medium',Helvetica] leading-5 md:leading-6 transition-opacity duration-300 opacity-100">
                  {service.description}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
