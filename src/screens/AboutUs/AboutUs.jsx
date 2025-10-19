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
      <section id="our-story" className="relative px-4 md:px-8 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12 reveal-up">
          <h1 className="[font-family:'Rockybilly-Regular',Helvetica] font-normal text-[#ffcc04] text-responsive-title tracking-[0] leading-[normal] mb-4 md:mb-6">
            About Us
          </h1>
          
          <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-responsive-hero tracking-[0] leading-[0.8]">
            <div className="reveal-scale">
              <span className="block reveal-stagger">Our</span>
              <span className="block reveal-stagger">Story</span>
            </div>
          </div>
        </div>

        {/* Background decorative image */}
        <img
          className="absolute top-0 right-0 w-[400px] md:w-[600px] lg:w-[800px] h-[450px] md:h-[675px] lg:h-[900px] bg-blend-difference object-cover opacity-50"
          alt="Layer"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-3-1.png"
        />
      </section>

      {/* About Content - At Maketa We Believe */}
      <section className="relative px-8 py-12 reveal-up">
        <div className="max-w-5xl mx-auto">
          <div className="w-full max-w-3xl mx-auto px-4 py-6">
            <div className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
              <p className="font-medium leading-[24px] mb-4 reveal-stagger">
                AT MAKETA, WE BELIEVE THAT EVERY BRAND DESERVES TO BE SEEN AND HEARD.
                FOUNDED WITH A PASSION FOR CREATIVITY AND STRATEGY, WE SET OUT TO HELP
                BUSINESSES IN EGYPT AND BEYOND DECLARE THEIR PRESENCE IN A CROWDED
                MARKET.
              </p>

              <p className="font-medium leading-[24px] mb-4 reveal-stagger">
                FROM DAY ONE, OUR GOAL HAS BEEN SIMPLE: TO TRANSFORM IDEAS INTO BOLD
                CAMPAIGNS AND EXPERIENCES THAT LEAVE A LASTING IMPACT. WHETHER
                IT&apos;S A STARTUP TAKING ITS FIRST STEP OR A WELL-KNOWN COMPANY
                READY FOR A FRESH VOICE, WE CREATE TAILORED SOLUTIONS THAT AMPLIFY
                THEIR PRESENCE ACROSS EVERY TOUCHPOINT.
              </p>

              <p className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold leading-[24px] reveal-stagger">
                PRESENCE IS MORE THAN VISIBILITY—IT&apos;S ABOUT INFLUENCE,
                RECOGNITION, AND TRUST. THAT&apos;S WHY WE APPROACH EVERY PROJECT WITH
                A MIX OF STRATEGY, CREATIVITY, AND EXECUTION.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We Don't Just Section */}
      <section className="relative px-8 py-12 reveal-fade">
        <div className="w-full py-12 px-4">
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
        </div>
      </section>

      {/* Team Section */}
      <section id="our-team" className="relative px-8 py-12">
        <div className="text-center mb-12 reveal-scale">
          <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[120px] md:text-[180px] lg:text-[240px] tracking-[0] leading-[0.8]">
{/* === Our Team Title === */}
<div className="relative w-full max-w-[1440px] mx-auto mb-16">
  {/* "Our" — aligned to left */}
  <div 
    className="reveal-stagger"
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: "0",
    }}
  >
    <h2
      className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white tracking-[0] leading-[0.8]"
      style={{ fontSize: "250px", margin: 0, whiteSpace: "nowrap", lineHeight: 1 }}
    >
      Our
    </h2>
  </div>

  {/* "Team" — centered under "Our" */}
  <div 
    className="reveal-stagger"
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "-40px", // smaller gap
    }}
  >
    <h2
      className="[font-family:'Bebas_Neue',Helvetica] font-normal text-[#FFCC04] tracking-[0] leading-[0.8]"
      style={{ fontSize: "250px", margin: 0, whiteSpace: "nowrap", lineHeight: 1 }}
    >
      Team
    </h2>
  </div>
</div>

          </div>
        </div>

      {/* === Description under Our Team === */}
<div 
  className="reveal-up"
  style={{
    maxWidth: "700px",
    margin: "60px auto 0 auto",
    textAlign: "center",
  }}
>
  <p 
    className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg md:text-xl tracking-[0] leading-[32px] opacity-90"
    style={{
      lineHeight: "1.6",
    }}
  >
    BEHIND <span className="text-[#FFCC04] font-bold">MAKETA</span> IS A GROUP OF 
    STRATEGISTS, DESIGNERS, STORYTELLERS, AND INNOVATORS WHO SHARE ONE MISSION: 
    TO HELP BRANDS SHINE. OUR TEAM THRIVES ON COLLABORATION, BRINGING DIFFERENT 
    SKILLS AND PERSPECTIVES TOGETHER TO CRAFT WORK THAT IS FRESH, RELEVANT, AND EFFECTIVE.<br/> <br/> <br/> 
  </p>
</div>


        <div className="reveal-fade">
          <section className="w-full relative">
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex gap-[54px] pb-4">
                {teamMembers.map((member, index) => (
                  <Card
                    key={`team-member-${index}`}
                    className="flex-shrink-0 w-[292px] bg-transparent border-none shadow-none"
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
                          loading="lazy"
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
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        </div>
      </section>

     {/* Clients Section */}
<section id="our-clients" className="relative px-8 py-32 bg-black min-h-[1000px] overflow-hidden">
  <div className="relative max-w-[1440px] mx-auto">
    
    {/* === "Our" text === */}
 {/* === OUR / CLIENTS Section === */}
<div 
  style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: '100px 0',
  }}
>
  {/* OUR - Left aligned */}
  <div 
    className="reveal-stagger"
    style={{ 
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start', 
    }}
  >
    <h2
      className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white"
      style={{ 
        fontSize: '250px', 
        margin: 0,
        lineHeight: 1,
        paddingLeft: '100px' // adjust this to move closer or further left
      }}
    >
      OUR
    </h2>
  </div>

  {/* CLIENTS - Center aligned under OUR */}
  <div 
    className="reveal-stagger"
    style={{ 
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '-40px', // reduces the gap between OUR and CLIENTS
    }}
  >
    <h2
      className="[font-family:'Bebas_Neue',Helvetica] font-normal text-[#FFCC04]"
      style={{ 
        fontSize: '250px', 
        margin: 0,
        lineHeight: 1,
      }}
    >
      CLIENTS
    </h2>
  </div>

  {/* Paragraph */}
  <div 
    className="reveal-up"
    style={{ 
      width: '100%',
      maxWidth: '800px',
      marginTop: '40px',
      textAlign: 'center',
    }}
  >
    <p 
      className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg md:text-xl tracking-[0] leading-[30px] opacity-90"
    >
      OVER THE YEARS, WE&apos;VE PARTNERED WITH AMBITIOUS BRANDS THAT TRUSTED
      US TO DECLARE THEIR PRESENCE. FROM LOCAL BUSINESSES TO INTERNATIONAL
      NAMES, OUR CLIENTS ARE PROOF THAT WHEN CREATIVITY MEETS STRATEGY,
      AMAZING THINGS HAPPEN.
    </p>
  </div>
</div>



    {/* === Client Logos === */}
    <div className="relative mt-20 reveal-fade">
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
  </div>
</section>

      {/* Footer */}
      <div className="mt-32">
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
