import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame14Subsection = () => {
  const services = [
    {
      number: "1",
      category: "MARKETING",
      title: "Discover How We <br/> Build Brands",
      link: "/our-services-u45-marketing",
      image: "https://framerusercontent.com/images/0a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    },
    {
      number: "2",
      category: "BRANDING",
      title: "Discover the power <br/> of a strong identity",
      link: "/our-services-u45-branding",
      image: "https://framerusercontent.com/images/0a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    },
    {
      number: "3",
      category: "MEDIA PRODUCTION",
      title: "Discover how we bring <br/> ideas to life",
      link: "/our-services-u45-media-production",
      image: "https://framerusercontent.com/images/0a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    },
    {
      number: "4",
      category: "WEB & APP DEVELOPMENT",
      title: "Discover digital <br/> experiences",
      link: "/our-services-u45-web-u38-app",
      image: "https://framerusercontent.com/images/0a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    },
  ];

  return (
    <section className="w-full relative">
      {/* Mobile: Vertical Stack */}
      <div className="md:hidden flex flex-col gap-6 px-4">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative w-full h-[500px] bg-[#3c3c3c] border-none rounded-lg overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
            style={{ "--animation-delay": `${index * 200}ms` }}
          >
            <CardContent className="relative w-full h-full p-0 flex flex-col items-center justify-between">
              {/* Image at the top */}
              <div className="relative w-full h-[45%]">
                <img
                  className="w-full h-full object-cover"
                  alt={`${service.category} image`}
                  src={service.image}
                />
              </div>

              {/* Large number display */}
              <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 z-10">
                <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[180px] tracking-[0] leading-[180px] whitespace-nowrap">
                  {service.number}
                </div>
              </div>

              {/* Content at the bottom */}
              <div className="flex flex-col items-center justify-end w-full h-[55%] p-6 bg-[#3c3c3c] relative z-10">
                {/* Service category badge */}
                <div className="w-fit h-[30px] rounded-[50px] border border-solid border-white flex items-center justify-center px-3 mb-3">
                  <div className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[20px] whitespace-nowrap">
                    {service.category}
                  </div>
                </div>

                {/* Description text */}
                <p className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[24px] text-center mb-6 px-2">
                  {service.title.split('<br/>').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.title.split('<br/>').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>

                {/* Navigation button - full width */}
                <Link to={service.link} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full h-[50px] rounded-[15px] bg-[#ffcc04] text-black hover:bg-[#ffdd44] p-0 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-sm text-center tracking-[0] leading-[normal]">
                      Discover
                    </span>
                    <img
                      className="w-[20px] h-[20px] ml-2"
                      alt="Arrow right"
                      src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/arrow-right.svg"
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tablet: 2x2 Grid */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative w-full h-[600px] bg-[#3c3c3c] border-none rounded-lg overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
            style={{ "--animation-delay": `${index * 200}ms` }}
          >
            <CardContent className="relative w-full h-full p-0 flex flex-col items-center justify-between">
              {/* Image at the top */}
              <div className="relative w-full h-[45%]">
                <img
                  className="w-full h-full object-cover"
                  alt={`${service.category} image`}
                  src={service.image}
                />
              </div>

              {/* Large number display */}
              <div className="absolute top-[18%] left-1/2 transform -translate-x-1/2 z-10">
                <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[220px] tracking-[0] leading-[220px] whitespace-nowrap">
                  {service.number}
                </div>
              </div>

              {/* Content at the bottom */}
              <div className="flex flex-col items-center justify-end w-full h-[55%] p-6 bg-[#3c3c3c] relative z-10">
                {/* Service category badge */}
                <div className="w-fit h-[32px] rounded-[50px] border border-solid border-white flex items-center justify-center px-4 mb-4">
                  <div className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[22px] whitespace-nowrap">
                    {service.category}
                  </div>
                </div>

                {/* Description text */}
                <p className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[26px] text-center mb-6 px-2">
                  {service.title.split('<br/>').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.title.split('<br/>').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>

                {/* Navigation button - full width */}
                <Link to={service.link} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full h-[55px] rounded-[15px] bg-[#ffcc04] text-black hover:bg-[#ffdd44] p-0 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-sm text-center tracking-[0] leading-[normal]">
                      Discover
                    </span>
                    <img
                      className="w-[22px] h-[22px] ml-2"
                      alt="Arrow right"
                      src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/arrow-right.svg"
                    />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop: Horizontal Scroll */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative w-[480px] h-[902px] bg-[#3c3c3c] border-none rounded-none overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 flex-shrink-0"
              style={{ "--animation-delay": `${index * 200}ms` }}
            >
              <CardContent className="relative w-full h-full p-0 flex flex-col items-center justify-between">
                {/* Image at the top */}
                <img
                  className="w-full h-[50%] object-cover"
                  alt={`${service.category} image`}
                  src={service.image}
                />

                {/* Large number display */}
                <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 relative z-10">
                  <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[400px] tracking-[0] leading-[324px] whitespace-nowrap">
                    {service.number}
                  </div>
                </div>

                {/* Content at the bottom */}
                <div className="flex flex-col items-center justify-end w-full h-[50%] p-8 bg-[#3c3c3c] relative z-10">
                  {/* Service category badge */}
                  <div className="w-fit h-[35px] rounded-[50px] border border-solid border-white flex items-center justify-center px-4 mb-4">
                    <div className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[25px] whitespace-nowrap">
                      {service.category}
                    </div>
                  </div>

                  {/* Description text */}
                  <p className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-[28px] text-center mb-8 px-2">
                    {service.title.split('<br/>').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.title.split('<br/>').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>

                  {/* Navigation button - full width */}
                  <Link to={service.link} className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full h-[65px] rounded-[15px] bg-[#ffcc04] text-black hover:bg-[#ffdd44] p-0 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                    >
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-base text-center tracking-[0] leading-[normal]">
                        Discover
                      </span>
                      <img
                        className="w-[24px] h-[24px] ml-2"
                        alt="Arrow right"
                        src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/arrow-right.svg"
                      />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
