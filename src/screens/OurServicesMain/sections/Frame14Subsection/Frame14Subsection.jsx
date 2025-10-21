import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// ✅ Import your images
import img1 from "../../../../assets/images/1.png";
import img2 from "../../../../assets/images/2.png";
import img3 from "../../../../assets/images/3.png";
import img4 from "../../../../assets/images/4.png";

export const Frame14Subsection = () => {
  const services = [
    {
      number: "1",
      category: "MARKETING",
      title: "Discover How We <br/> Build Brands",
      link: "/our-services-u45-marketing",
      image: img1,
    },
    {
      number: "2",
      category: "BRANDING",
      title: "Discover the power <br/> of a strong identity",
      link: "/our-services-u45-branding",
      image: img2,
    },
    {
      number: "3",
      category: "MEDIA PRODUCTION",
      title: "Discover how we bring  ideas to life",
      link: "/our-services-u45-media-production",
      image: img3,
    },
    {
      number: "4",
      category: "WEB DEVELOPMENT",
      title: "Discover digital <br/> experiences",
      link: "/our-services-u45-web-u38-app",
      image: img4,
    },
  ];

  return (
    <section className="w-full bg-transparent py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center ">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative w-full max-w-[420px] border-none rounded-none bg-transparent shadow-none hover:scale-[1.03] transition-transform duration-300"
          >
            <CardContent className="relative w-full p-0 flex flex-col items-center bg-transparent">
              {/* Image */}
              <div className="w-full">
                <img
                  className="w-full h-auto object-contain"
                  alt={`${service.category} image`}
                  src={service.image}
                />
              </div>

              {/* Large number overlay */}
              <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 z-10">
                <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[250px] leading-[200px] opacity-20 select-none">
                  {service.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-end w-full p-8 bg-transparent relative z-10">
                {/* Category badge */}
                <div className="w-fit h-[35px] rounded-[50px] border border-solid border-white flex items-center justify-center px-4 mb-4">
                  <div className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-2xl leading-[25px] whitespace-nowrap">
                    {service.category}
                  </div>
                </div>

                {/* Title text */}
                <p className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-[22px] leading-[28px] text-center mb-8 px-2">
                  {service.title.split("<br/>").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < service.title.split("<br/>").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>

                {/* Button */}
                <Link to={service.link} className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full h-[65px] rounded-[15px] bg-[#ffcc04] text-black hover:bg-[#ffdd44] transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-base text-center">
                      Discover
                    </span>
                   
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
