import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "../../components/MobileMenu";



import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const AboutUs = () => {
  useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navigationItems = [
    { label: "HOME", href: "/home", isActive: false },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: true },
    { label: "SERVICES", href: "/our-services-u45-main", isActive: false },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

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
      quote: "I'm your partner <br/>  consider <br/> me part of your team",
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
      title: "UI & UX Designer",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-6.svg",
      quote: "I design journeys <br/> people enjoy",
      delay: "800ms",
    },
    {
      name: "NOURHAN OSAMA",
      title: " Content Creator",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-10.svg",
      quote: " I'm here to keep<br/>  your brand  always <br/> alive and engaging",
      delay: "900ms",
    },
    {
      name: "PETER MAMDOUH",
      title: "Web Developer",
      image: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-18-2.svg",
      quote: "I build the digital home <br/> for your brand",
      delay: "1000ms",
    },
    
  ];

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

  const silverLightFoods = {
    logoSrc: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/group-6.png",
    width: "w-[96.35px]",
    height: "h-[77.9px]",
  };

  const finomenaData = {
    logoSrc: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/group-7.png",
    width: "w-[142.68px]",
    height: "h-[37.68px]",
  };

  const aboutUsLinks = [
    { label: "Story", href: "/about-us#our-story" },
    { label: "Our Clients", href: "/about-us#our-clients" },
    { label: "Team", href: "/about-us#our-team" },
  ];

  const servicesLinks = [
    { label: "Marketing", href: "/our-services-u45-marketing" },
    { label: "Branding & Design", href: "/our-services-u45-branding" },
    { label: "Media Production", href: "/our-services-u45-media-production" },
    { label: "Web & App Development", href: "/our-services-u45-web-u38-app" },
  ];

  const socialMediaLinks = [
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-facebook.svg",
      label: "Facebook",
      href: "https://www.facebook.com/share/1GDRYiwd6N/?mibextid=wwXIfr",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-instagram.svg",
      label: "Instagram",
      href: "https://www.instagram.com/maketaagency?igsh=aDgyaHhmYWl5bHR2",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-linkedin.svg",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/maketaagency/",
    },
  ];

  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* Header */}
      <header
        className="flex items-center justify-between w-full px-4 md:px-8 py-4 md:py-6 relative min-h-[80px] md:min-h-[120px] reveal-fade z-50"
      >
        <div className="reveal-left">
          <Link to="/">
            <img
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-cover hover:scale-105 transition-transform duration-300"
              alt="Maketa Agency Logo"
              src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
            />
          </Link>
        </div>

        {/* Desktop Navigation (hidden on small screens) */}
        <div className="hidden md:block">
          <NavigationMenu className="reveal-right">
            <NavigationMenuList className="flex items-center gap-4 lg:gap-[60px]">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      className={`relative w-fit [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-xs lg:text-sm tracking-[0] leading-[normal] transition-all duration-300 hover:text-[#ffcc04] hover:scale-105 ${
                        item.isActive ? "text-[#ffcc04]" : "text-white"
                      }`}
                      to={item.href}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu (visible only on small screens) */}
        <div className="md:hidden">
          {/* pass navigationItems so MobileMenu can mark active item if implemented */}
          <MobileMenu navigationItems={navigationItems} />
        </div>
      </header>

      {/* Hero Section - Our Story */}
    <main className="bg-black text-white overflow-hidden">
      {/* === Hero Section === */}
      <section className="relative flex flex-col items-center justify-center text-center md:text-left px-4 md:px-8 py-16 md:py-28 overflow-hidden">
        <img
          className="absolute right-[-60px] top-[-40px] w-[480px] sm:w-[380px] md:w-[520px] lg:w-[700px] h-auto opacity-60 animate-pulse-slow"
          alt="Metallic Shape"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-3-1.png"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto flex justify-start reveal-up">
          <div className="max-w-3xl">
            <h1 className="font-normal text-white text-[48px] sm:text-[64px] md:text-[90px] lg:text-[100px] leading-[0.9] mb-6">
              <span className="block">About Us</span>
              <span className="block text-[#ffcc04] italic transform rotate-[-3deg] inline-block ml-2 md:ml-6 font-serif">
                Our Story
              </span>
            </h1>
            <p className="text-gray-200 font-medium text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-2xl">
              <span className="text-[#ffcc04] font-semibold">AT MAKETA,</span> WE
              BELIEVE THAT EVERY BRAND DESERVES TO BE SEEN AND HEARD. FOUNDED
              WITH A PASSION FOR CREATIVITY AND STRATEGY, WE HELP BUSINESSES IN
              EGYPT AND BEYOND DECLARE THEIR PRESENCE IN A CROWDED MARKET.{" "}
              <br />
              <br />
              OUR GOAL IS SIMPLE: TO TRANSFORM IDEAS INTO BOLD CAMPAIGNS THAT
              LEAVE A LASTING IMPACT. WHETHER IT’S A STARTUP OR AN ESTABLISHED
              BRAND, WE CREATE TAILORED SOLUTIONS THAT BUILD RECOGNITION AND
              TRUST.
            </p>
          </div>
        </div>
      </section>

      {/* === "We Don't Just" Section === */}
      <section className="relative px-4 md:px-8 py-16 text-center reveal-fade border-t border-[#2b2b2b]">
        <div className="max-w-5xl mx-auto">
          <h2 className="[font-family:'Bebas_Neue',Helvetica] font-normal text-[42px] md:text-[64px] leading-[1] tracking-wide">
            <span className="block text-white">We don&apos;t just deliver services,</span>
            <span className="block text-[#ffcc04] mt-2">We build connections.</span>
            <span className="block text-[#ffcc04] mt-4">
              We don&apos;t just design campaigns,
            </span>
            <span className="block text-white mt-2">
              We create movements that audiences remember.
            </span>
          </h2>
        </div>
      </section>

      {/* === Team Section === */}
      <section
        id="our-team"
        className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 py-20 md:py-28 overflow-hidden border-t border-[#2b2b2b]"
      >
        {/* Title */}
        <div className="w-full max-w-[1440px] mb-12 md:mb-16">
          <h2 className="[font-family:'Bebas_Neue',Helvetica] text-white font-normal leading-[0.9] text-[80px] sm:text-[120px] md:text-[160px] text-left">
            Our
          </h2>
          <h2 className="[font-family:'Bebas_Neue',Helvetica] text-[#FFCC04] font-normal leading-[0.9] text-[80px] sm:text-[120px] md:text-[160px] mt-[-40px] text-center">
            Team
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto reveal-up mb-16">
          <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
            BEHIND <span className="text-[#FFCC04] font-bold">MAKETA</span> IS A
            GROUP OF STRATEGISTS, DESIGNERS, AND STORYTELLERS WHO SHARE ONE
            MISSION: TO HELP BRANDS SHINE. WE COMBINE DIFFERENT SKILLS TO CRAFT
            WORK THAT IS FRESH, RELEVANT, AND EFFECTIVE.
          </p>
        </div>

        {/* Team Cards */}
        <div className="reveal-fade w-full">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-10 pb-4">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[280px] bg-transparent border-none shadow-none"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <CardContent className="p-0 flex flex-col gap-4 relative">
                    {/* Front */}
                    <div
                      className={`relative w-full h-[320px] overflow-hidden rounded-[18px] transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <img
                        className="w-full h-full object-cover"
                        alt={member.name}
                        src={member.image}
                      />
                    </div>

                    {/* Back (Quote) */}
                    <div
                      className={`absolute inset-0 w-full h-[320px] rounded-[18px] bg-[#ffcc04] flex items-center justify-center p-4 text-center transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-black text-xl leading-tight">
                        {member.quote.split("<br/>").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < member.quote.split("<br/>").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>

                    {/* Name + Title */}
                    <div className="flex flex-col gap-1 px-3">
                      <Badge
                        variant="outline"
                        className="w-fit rounded-[20px] border-white text-white bg-transparent px-3 py-0.5 font-extrabold text-base tracking-[2px]"
                      >
                        {member.name}
                      </Badge>
                      <p className="text-white text-sm opacity-80">{member.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* === Clients Section === */}
      <section
        id="our-clients"
        className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 py-20 md:py-28 border-t border-[#2b2b2b]"
      >
        <div className="w-full max-w-[1440px] mb-12 md:mb-16">
          <h2 className="[font-family:'Bebas_Neue',Helvetica] text-white font-normal leading-[0.9] text-[80px] sm:text-[120px] md:text-[160px] text-left">
            Our
          </h2>
          <h2 className="[font-family:'Bebas_Neue',Helvetica] text-[#FFCC04] font-normal leading-[0.9] text-[80px] sm:text-[120px] md:text-[160px] mt-[-40px] text-center">
            Clients
          </h2>
        </div>

        <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed opacity-90 mb-10">
          WE’VE PARTNERED WITH AMBITIOUS BRANDS THAT TRUSTED US TO DECLARE THEIR
          PRESENCE. FROM LOCAL BUSINESSES TO INTERNATIONAL NAMES, OUR CLIENTS
          SHOW THAT WHEN CREATIVITY MEETS STRATEGY — AMAZING THINGS HAPPEN.
        </p>

        {/* Two Marquee Rows */}
        <div className="relative mt-5 reveal-fade">
      <section className="w-full h-32 overflow-hidden relative">
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
          <div className={`relative ${silverLightFoods.width} ${silverLightFoods.height} flex-shrink-0`}>
            <img
              className="absolute w-[43.07%] h-[55.26%] top-0 left-[32.17%]"
              alt="Silver Light Foods logo"
              src={silverLightFoods.logoSrc}
            />
            <div className="absolute w-[102.08%] h-[20.54%] top-[62.25%] left-0">
              <div className="absolute w-[42.70%] h-full top-0 left-0 [font-family:'Playfair_Display',Helvetica] font-bold text-white text-xs">
                SILVER
              </div>
              <div className="absolute w-[39.65%] h-full top-0 left-[56.28%] [font-family:'Playfair_Display',Helvetica] font-bold text-white text-xs">
                LIGHT
              </div>
            </div>
            <div className="absolute w-[42.55%] h-[20.54%] top-[79.46%] left-[31.18%] [font-family:'Playfair_Display',Helvetica] font-medium text-white text-xs">
              FOODS
            </div>
          </div>

          {/* Finomena component */}
          <div className={`relative ${finomenaData.width} ${finomenaData.height} flex-shrink-0`}>
            <div className="absolute w-[67.98%] h-[42.46%] top-[53.85%] left-[29.21%] [font-family:'Roboto_Slab',Helvetica] font-normal text-white text-xs">
              We&apos;ve been there
            </div>
            <div className="absolute w-[40.65%] h-[42.46%] top-[30.89%] left-[29.21%] [font-family:'Roboto_Slab',Helvetica] font-medium text-white text-xs">
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
        </div>
      </section>
    </div>
     <div className="relative mt-5 reveal-fade">
      <section className="w-full h-32 overflow-hidden relative">
        <div
          className="flex items-center gap-[23px] px-0 py-[22px] h-32 animate-marquee"
          style={{
            width: "max-content",
            "--duration": "10s",
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
          <div className={`relative ${silverLightFoods.width} ${silverLightFoods.height} flex-shrink-0`}>
            <img
              className="absolute w-[43.07%] h-[55.26%] top-0 left-[32.17%]"
              alt="Silver Light Foods logo"
              src={silverLightFoods.logoSrc}
            />
            <div className="absolute w-[102.08%] h-[20.54%] top-[62.25%] left-0">
              <div className="absolute w-[42.70%] h-full top-0 left-0 [font-family:'Playfair_Display',Helvetica] font-bold text-white text-xs">
                SILVER
              </div>
              <div className="absolute w-[39.65%] h-full top-0 left-[56.28%] [font-family:'Playfair_Display',Helvetica] font-bold text-white text-xs">
                LIGHT
              </div>
            </div>
            <div className="absolute w-[42.55%] h-[20.54%] top-[79.46%] left-[31.18%] [font-family:'Playfair_Display',Helvetica] font-medium text-white text-xs">
              FOODS
            </div>
          </div>

          {/* Finomena component */}
          <div className={`relative ${finomenaData.width} ${finomenaData.height} flex-shrink-0`}>
            <div className="absolute w-[67.98%] h-[42.46%] top-[53.85%] left-[29.21%] [font-family:'Roboto_Slab',Helvetica] font-normal text-white text-xs">
              We&apos;ve been there
            </div>
            <div className="absolute w-[40.65%] h-[42.46%] top-[30.89%] left-[29.21%] [font-family:'Roboto_Slab',Helvetica] font-medium text-white text-xs">
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
        </div>
      </section>
    </div>
  
  
      </section>
    </main>
  
  

      {/* Footer */}
      <div className="mt-2">
          {/* FOOTER */}
        <footer className="bg-black py-12 sm:py-16 mt-16 px-4">
          <div className="max-w-[1469px] mx-auto flex flex-col gap-12 sm:gap-16">
            <div className="flex flex-col lg:flex-row gap-10 sm:gap-16">
              <div className="reveal-left flex justify-center lg:justify-start">
                <img
                  className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] object-cover hover:scale-105 transition-transform duration-300"
                  alt="Logo"
                  src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
                />
              </div>

              <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">About Us</h3>
                  <div className="flex flex-col gap-4">
                    {aboutUsLinks.map((link, i) => (
                      <Link key={i} to={link.href} className="text-white text-sm sm:text-lg hover:text-[#ffcc04]">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">Services</h3>
                  <div className="flex flex-col gap-4">
                    {servicesLinks.map((link, i) => (
                      <Link key={i} to={link.href} className="text-white text-sm sm:text-lg hover:text-[#ffcc04]">
                        {link.label === "Web & App Development" ? (
                          <>
                            Web &amp; App <br /> Development
                          </>
                        ) : (
                          link.label
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">Contact Us</h3>
                </div>

                <div>
                  <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">Follow Us</h3>
                  <div className="flex flex-col gap-3">
                    {socialMediaLinks.map((social, i) => (
                      <Link key={i} to={social.href} className="flex items-center gap-3 group">
                        <img
                          className="w-[24px] h-[24px] transition-transform group-hover:scale-110"
                          alt={`${social.label} icon`}
                          src={social.icon}
                        />
                        <span className="text-white text-sm sm:text-lg group-hover:text-[#ffcc04]">
                          {social.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-white text-xs sm:text-base mt-6">
              © 2025 | All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
