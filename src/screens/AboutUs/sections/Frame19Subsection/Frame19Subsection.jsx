import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const Frame19Subsection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamMembers = [
    {
      name: "MINA FAWZY",
      title: "Founder & CEO",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18.svg",
      quote: "I'm here to turn your <br/> vision into reality",
      delay: "0ms",
    },
    {
      name: "MARINA BAHGAT",
      title: "Operation Manager",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-8.svg",
      quote: "I'll make sure your <br/> brand  grows in the <br/> right direction",
      delay: "100ms",
    },
    {
      name: "HADEER SLAMA",
      title: "Account Manager",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-9.svg",
      quote: "I'm your partner <br/> consider me part of your team",
      delay: "200ms",
    },
    {
      name: "ABDELHALIM AHMED",
      title: "Business Development Team Leader",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-5.svg",
      quote: "I open doors for your <br/> next opportunity",
      delay: "300ms",
    },
    {
      name: "YASMEEN SAKR",
      title: "Social Media Specialist",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-1.svg",
      quote: "I connect you with <br/> your community",
      delay: "400ms",
    },
    {
      name: "AMANY YOUSRY",
      title: "Social Media Specialist",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-4.svg",
      quote: "I connect you with <br/> your community",
      delay: "500ms",
    },
    {
      name: "ZAIN FAWZI",
      title: "Senior Graphic Designer",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-7.svg",
      quote: "I turn your ideas <br/> into designs that stick",
      delay: "600ms",
    },
    {
      name: "JASMIN AYMAN",
      title: "Junior Graphic Designer",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-3.svg",
      quote: "I tell your story through <br/> visuals and designs",
      delay: "700ms",
    },
    {
      name: "MALAK ABDELRAZIK",
      title: "MidLevel Graphic Designer / UX & UI Designer",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-6.svg",
      quote: "I design journeys <br/> people enjoy",
      delay: "800ms",
    },
    {
      name: "NOURHAN OSAMA",
      title: "Senior Content Creator",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-10.svg",
      quote: "I'm here to keep your brand <br/> always alive and engaging",
      delay: "900ms",
    },
    {
      name: "PETER MAMDOUH",
      title: "Web Developer",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-2.svg",
      quote: "I build the digital home <br/> for your brand",
      delay: "1000ms",
    },
    {
      name: "ALAA ABDELNABY",
      title: "Account Manager",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-9.svg", // Placeholder image, replace if needed
      quote: "I'm your partner <br/> consider me part of your team",
      delay: "1100ms",
    },
  ];

  return (
    <section className="w-full relative px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pb-4 max-w-[1400px] mx-auto">
        {teamMembers.map((member, index) => (
          <Card
            key={`team-member-${index}`}
            className="w-full bg-transparent border-none shadow-none reveal-stagger"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardContent className="p-0 flex flex-col gap-4 relative">
              {/* Front of the card (image) */}
              <div className={`relative w-full h-[336px] overflow-hidden rounded-[20px] transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-0' : 'opacity-100'
              }`}>
                <img
                  className="w-full h-full object-cover"
                  alt={`${member.name} profile`}
                  src={member.image}
                />
              </div>

              {/* Back of the card (quote) */}
              <div className={`absolute inset-0 w-full h-[336px] rounded-[20px] bg-[#ffcc04] flex items-center justify-center p-4 text-center transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <p className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-black text-2xl leading-tight">
                  {member.quote.split('<br/>').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < member.quote.split('<br/>').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* Name and Title */}
              <div className="flex flex-col gap-2 px-4">
                <Badge
                  variant="outline"
                  className="w-fit rounded-[20px] border-white text-white bg-transparent px-3 py-0.5 [font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-base tracking-[2.00px] leading-5"
                >
                  {member.name}
                </Badge>

                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-[28.8px]">
                  {member.title}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
