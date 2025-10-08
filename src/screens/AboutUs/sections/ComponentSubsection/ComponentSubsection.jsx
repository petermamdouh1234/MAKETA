import React from "react";

export const ComponentSubsection = () => {
  // Client logos data for the marquee
  const clientLogos = [
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/clip-path-group.png",
      alt: "Client logo",
      width: "w-[143.42px]",
      height: "h-[23.79px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/clip-path-group-1.png",
      alt: "Client logo",
      width: "w-[179.53px]",
      height: "h-[21.79px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle.png",
      alt: "Client logo",
      width: "w-[124.48px]",
      height: "h-[39.68px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-1.png",
      alt: "Client logo",
      width: "w-[90.97px]",
      height: "h-[51.92px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/group.png",
      alt: "Client logo",
      width: "w-[128.2px]",
      height: "h-[47.5px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/group-1.png",
      alt: "Client logo",
      width: "w-[99.45px]",
      height: "h-[40.97px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-2.png",
      alt: "Client logo",
      width: "w-[125px]",
      height: "h-[34.7px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-3.png",
      alt: "Client logo",
      width: "w-[81.92px]",
      height: "h-[81.92px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-4.png",
      alt: "Client logo",
      width: "w-[153.6px]",
      height: "h-[84px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/group-2.png",
      alt: "Client logo",
      width: "w-[73.6px]",
      height: "h-[65.5px]",
    },
    {
      src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/clip-path-group-2.png",
      alt: "Client logo",
      width: "w-[130.81px]",
      height: "h-[47.43px]",
    },
  ];

  // Silver Light Foods component data
  const silverLightFoods = {
    logoSrc: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/group-6.png",
    width: "w-[96.35px]",
    height: "h-[77.9px]",
  };

  // Finomena component data
  const finomenaData = {
    logoSrc: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/group-7.png",
    width: "w-[142.68px]",
    height: "h-[37.68px]",
  };

  return (
    <section className="w-full h-32 overflow-hidden relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      <div
        className="flex items-center gap-[23px] px-0 py-[22px] h-32 animate-marquee"
        style={{
          width: "max-content",
          "--duration": "30s",
          "--gap": "23px",
        }}
      >
        {/* First set of logos */}
        {clientLogos.map((logo, index) => (
          <img
            key={`logo-${index}`}
            className={`relative ${logo.width} ${logo.height} flex-shrink-0`}
            alt={logo.alt}
            src={logo.src}
          />
        ))}

        {/* Silver Light Foods component */}
        <div
          className={`relative ${silverLightFoods.width} ${silverLightFoods.height} flex-shrink-0`}
        >
          <img
            className="absolute w-[43.07%] h-[55.26%] top-0 left-[32.17%]"
            alt="Silver Light Foods logo"
            src={silverLightFoods.logoSrc}
          />
          <div className="absolute w-[102.08%] h-[20.54%] top-[62.25%] left-0">
            <div className="absolute w-[42.70%] h-full top-0 left-0 [font-family:'Playfair_Display',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal]">
              SILVER
            </div>
            <div className="absolute w-[39.65%] h-full top-0 left-[56.28%] [font-family:'Playfair_Display',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal]">
              LIGHT
            </div>
          </div>
          <div className="absolute w-[42.55%] h-[20.54%] top-[79.46%] left-[31.18%] [font-family:'Playfair_Display',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
            FOODS
          </div>
        </div>

        {/* Finomena component */}
        <div
          className={`relative ${finomenaData.width} ${finomenaData.height} flex-shrink-0`}
        >
          <div className="absolute w-[67.98%] h-[42.46%] top-[53.85%] left-[29.21%] [font-family:'Roboto_Slab',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
            We&apos;ve been there
          </div>
          <div className="absolute w-[40.65%] h-[42.46%] top-[30.89%] left-[29.21%] [font-family:'Roboto_Slab',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
            Finomena
          </div>
          <img
            className="absolute w-[26.41%] h-full top-0 left-0"
            alt="Finomena logo"
            src={finomenaData.logoSrc}
          />
        </div>

        {/* Duplicate set for seamless loop */}
        {clientLogos.map((logo, index) => (
          <img
            key={`logo-duplicate-${index}`}
            className={`relative ${logo.width} ${logo.height} flex-shrink-0`}
            alt={logo.alt}
            src={logo.src}
          />
        ))}

        {/* Duplicate Silver Light Foods component */}
        <div
          className={`relative ${silverLightFoods.width} ${silverLightFoods.height} flex-shrink-0`}
        >
          <img
            className="absolute w-[43.07%] h-[55.26%] top-0 left-[32.17%]"
            alt="Silver Light Foods logo"
            src={silverLightFoods.logoSrc}
          />
          <div className="absolute w-[102.08%] h-[20.54%] top-[62.25%] left-0">
            <div className="absolute w-[42.70%] h-full top-0 left-0 [font-family:'Playfair_Display',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal]">
              SILVER
            </div>
            <div className="absolute w-[39.65%] h-full top-0 left-[56.28%] [font-family:'Playfair_Display',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal]">
              LIGHT
            </div>
          </div>
          <div className="absolute w-[42.55%] h-[20.54%] top-[79.46%] left-[31.18%] [font-family:'Playfair_Display',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
            FOODS
          </div>
        </div>

        {/* Duplicate Finomena component */}
        <div
          className={`relative ${finomenaData.width} ${finomenaData.height} flex-shrink-0`}
        >
          <div className="absolute w-[67.98%] h-[42.46%] top-[53.85%] left-[29.21%] [font-family:'Roboto_Slab',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
            We&apos;ve been there
          </div>
          <div className="absolute w-[40.65%] h-[42.46%] top-[30.89%] left-[29.21%] [font-family:'Roboto_Slab',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
            Finomena
          </div>
          <img
            className="absolute w-[26.41%] h-full top-0 left-0"
            alt="Finomena logo"
            src={finomenaData.logoSrc}
          />
        </div>
      </div>
    </section>
  );
};
