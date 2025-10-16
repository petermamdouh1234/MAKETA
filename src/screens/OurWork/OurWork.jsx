import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const navigationItems = [
  { label: "HOME", href: "/", active: false },
  { label: "OUR WORK", href: "/our-work", active: true },
  { label: "ABOUT US", href: "/about-us", active: false },
  { label: "SERVICES", href: "/our-services-u45-main", active: false },
  { label: "CONTACT US", href: "/contact-us", active: false },
];


const portfolioItems = [
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651.png", 
    alt: "CARB LESS",
    title: "CARB LESS",
    link: "https://carbless.com"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-1.png", 
    alt: "TUYINGO",
    title: "TUYINGO",
    link: "https://tuyingo.com"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-2.png", 
    alt: "DIVINE",
    title: "DIVINE",
    link: "https://divine.com"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-3.png", 
    alt: "RUE Haya",
    title: "RUE Haya",
    link: "https://ruehaya.com"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-4.png", 
    alt: "TWOOPTICS",
    title: "TWOOPTICS",
    link: "https://twooptics.com"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-5.png", 
    alt: "Finomena",
    title: "Finomena",
    link: "https://finomena.com"
  },
];

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
  { icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-facebook.svg", label: "Facebook", href: "https://www.facebook.com/share/1GDRYiwd6N/?mibextid=wwXIfr" },
  { icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-instagram.svg", label: "Instagram", href: "https://www.instagram.com/maketaagency?igsh=aDgyaHhmYWl5bHR2" },
  { icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-linkedin.svg", label: "LinkedIn", href: "https://www.linkedin.com/company/maketaagency/" },
];

export const OurWork = () => {
  useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-black w-full min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="relative z-10 flex w-full items-center justify-between px-8 py-6 reveal-fade">
        <Link to="/">
          <img
            className="h-[100px] w-[120px] object-contain hover:scale-105 transition-transform duration-300"
            alt="Logo"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
          />
        </Link>

        <nav className="flex items-center gap-[60px]">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`relative font-bold text-sm tracking-wide transition-colors ${
                item.active ? "text-[#ffcc04]" : "text-white"
              } hover:text-[#ffcc04]`}
              style={{ fontFamily: "Gilroy-Bold, Helvetica" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 overflow-hidden">
        {/* Metallic Shape Background */}
        <img
          className="absolute left-[-80px] top-[-40px] w-[650px] h-[500px] object-contain opacity-80 reveal-left animate-pulse-slow"
          alt="Metallic Shape"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
        />

        {/* Top Text */}
        <h1
          className="relative z-10 text-silver leading-[0.8] reveal-stagger"
          style={{
            fontFamily: "Bebas Neue, Helvetica",
            fontSize: "clamp(110px,16vw,240px)",
            color: "#C0C0C0"
          }}
        >
          HOW WE
        </h1>

        {/* Middle Text (Our Work) */}
        <h2
          className="relative z-20 text-[#ffcc04] italic rotate-2 leading-none mt-[-30px] reveal-scale hover:scale-110 transition-transform duration-500"
          style={{
            fontFamily: "Rockybilly-Regular, Helvetica",
            fontSize: "clamp(120px,14vw,200px)"
          }}
        >
          Our Work
        </h2>

        {/* Bottom Text */}
        <h1
          className="relative z-10 text-silver leading-[0.8] mt-[-20px] reveal-stagger"
          style={{
            fontFamily: "Bebas Neue, Helvetica",
            fontSize: "clamp(110px,16vw,240px)",
            color: "#C0C0C0"
          }}
        >
          DID IT
        </h1>

        {/* Description */}
        <p
          className="mt-16 max-w-[800px] text-white text-sm md:text-base font-semibold z-10 reveal-fade"
          style={{ fontFamily: "Gilroy-SemiBold, Helvetica" }}
        >
          WE DON&apos;T JUST TALK ABOUT IMPACT — WE CREATE IT. EXPLORE HOW MAKETA HELPED BRANDS
          DECLARE THEIR PRESENCE THROUGH DIGITAL AND OFFLINE STRATEGIES.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] mx-auto">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-transparent border-none shadow-none group cursor-pointer reveal-stagger transform hover:-translate-y-2 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl hover:shadow-[#ffcc04]/20 transition-all duration-500">
                  <img 
                    className="w-full h-[320px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75" 
                    alt={item.alt} 
                    src={item.src} 
                  />
                  
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="transform transition-all duration-300"
                    >
                      <Button className="bg-[#ffcc04] hover:bg-[#ffdd44] text-black font-bold px-8 py-3 rounded-[15px] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ffcc04]/50 animate-bounce-subtle">
                        View Project
                      </Button>
                    </a>
                  </div>

                  {/* Project Title on Hover */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}>
                    <h3 className="text-white font-bold text-2xl" style={{ fontFamily: "Bebas Neue, Helvetica" }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-black py-16 mt-16">
        <div className="max-w-[1469px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Logo */}
            <div className="reveal-left">
              <img
                className="h-[191px] w-[191px] object-cover hover:scale-105 transition-transform duration-300"
                alt="Logo"
                src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
              />
            </div>

            {/* Footer Links Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-[158px]">
              {/* About Us */}
              <div className="reveal-stagger">
                <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5 mb-[53px]">
                  About Us
                </h3>
                <div className="flex flex-col gap-[27.5px]">
                  {aboutUsLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[18px] hover:text-[#ffcc04] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="reveal-stagger">
                <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5 mb-[53px]">
                  Services
                </h3>
                <div className="flex flex-col gap-[27.5px]">
                  {servicesLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[18px] hover:text-[#ffcc04] transition-colors"
                    >
                      {link.label === "Web & App Development" ? (
                        <>
                          Web &amp; App <br />
                          Development
                        </>
                      ) : (
                        link.label
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Us */}
              <div className="reveal-stagger">
                <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5">
                  Contact Us
                </h3>
              </div>

              {/* Follow Us */}
              <div className="reveal-stagger">
                <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5 mb-[53px]">
                  Follow us
                </h3>
                <div className="flex flex-col gap-[15px]">
                  {socialMediaLinks.map((social, index) => (
                    <Link
                      key={index}
                      to={social.href}
                      className="flex items-center gap-[10px] group"
                    >
                      <img
                        className="w-[30px] h-[30px] transition-transform group-hover:scale-110"
                        alt={`${social.label} icon`}
                        src={social.icon}
                      />
                      <span className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[18px] group-hover:text-[#ffcc04] transition-colors">
                        {social.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="reveal-fade">
            <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[18px]">
              Copyright © 2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
