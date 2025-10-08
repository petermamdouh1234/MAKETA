import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameSubsection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { 
      number: "01", 
      title: "SOCIAL MEDIA", 
      description: "We design and manage social media campaigns that keep your audience connected with your brand. From storytelling posts to interactive campaigns, we make your platforms a space where engagement thrives." 
    },
    { 
      number: "02", 
      title: "PAID ADS", 
      description: "Get noticed by the right people at the right time. Whether through Google Ads, Meta, or other platforms, we create targeted campaigns that maximize your ROI and drive real business growth." 
    },
    { 
      number: "03", 
      title: "SEO", 
      description: "Stand out in search. Our SEO strategies boost your visibility and ranking so your audience finds you first. With optimized content and technical expertise, we turn searches into opportunities." 
    },
    { 
      number: "04", 
      title: "CONTENT", 
      description: "Stand out in search. Our SEO strategies boost your visibility and ranking so your audience finds you first. With optimized content and technical expertise, we turn searches into opportunities." 
    },
  ];

  return (
    <section className="w-full max-w-[687px] mx-auto space-y-[5px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      {services.map((service, index) => (
        <Card
          key={`service-${index}`}
          className={`bg-black border-2 md:border-4 border-[#3c3c3c] overflow-hidden transition-all duration-300 ${
            hoveredIndex === index ? 'h-auto min-h-[200px] md:min-h-[250px]' : 'h-[100px] md:h-[134px]'
          }`}
          style={{ "--animation-delay": `${400 + index * 200}ms` }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardContent className="flex flex-col justify-center h-full p-0">
            <div className="px-4 md:pl-14 py-4 md:py-0 [font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-3xl md:text-5xl lg:text-6xl text-right tracking-[0] leading-[1.2] md:leading-[25px]">
              <span className="block md:inline">{service.number}</span> <span className="block md:inline">{service.title}</span>
            </div>
            {hoveredIndex === index && (
              <div className="px-4 md:px-14 pb-4 md:pt-4 text-white text-sm md:text-base text-left [font-family:'Gilroy-Medium-Medium',Helvetica] leading-5 md:leading-6 transition-opacity duration-300 opacity-100">
                {service.description}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
