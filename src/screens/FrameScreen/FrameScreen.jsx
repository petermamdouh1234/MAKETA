import React from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "../../components/MobileMenu"; // adjust path if needed

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const FrameScreen = () => {
  useScrollReveal();
  
  const navigationItems = [
    { label: "HOME", href: "/", isActive: true },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: false },
    { label: "SERVICES", href: "/our-services-u45-main", isActive: false },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

  const featureItems = [
    { text: "Strategies that amplify your voice" },
    { text: "Creative visuals that get noticed" },
    { text: "Digital + Offline presence" },
    { text: "Growing brands into leaders" },
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

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)] px-4 md:px-8 py-8 md:py-16 flex items-center justify-center text-center">
        {/* Metallic Shape */}
        <img
          className="absolute left-[8%] md:left-[1%] top-[0%] w-[100px] md:w-[450px] lg:w-[900px] h-[300px] md:h-[400px] lg:h-[500px] object-contain opacity-80 animate-pulse-slow"
          alt="Metallic Shape"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
        />

        {/* Social Media Icons (Left Side) - Hidden on mobile */}
        <div className="hidden md:flex absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 flex-col items-center gap-4 reveal-left">
          <span className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-l tracking-[0] leading-[normal] rotate-90 whitespace-nowrap">
            Follow us <br /><br />
          </span>
          {socialMediaLinks.map((social, index) => (
            <Link key={index} to={social.href} className="group">
              <img
                className="w-[30px] h-[40px] transition-transform group-hover:scale-110"
                alt={`${social.label} icon`}
                src={social.icon}
              />
            </Link>
          ))}
        </div>

        {/* Main Heading */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex justify-end">
  <div className="text-right">
    <h1 className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-responsive-hero tracking-[0] leading-[0.8] mb-4 md:mb-8 reveal-scale">
      <span className="block">DECLARE</span>
      <span className="block text-[#ffcc04] [font-family:'Rockybilly-Regular',Helvetica] italic transform rotate-[-5deg] inline-block ml-2 md:ml-8">
        Presence
      </span>
      <span className="block">YOUR</span>
    </h1>

    {/* Description */}
    <p className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-responsive-small tracking-[0] leading-6 md:leading-8 max-w-3xl reveal-up">
      WE ARE A FULL-SERVICE EGYPT MARKETING AGENCY, CREATING HIGH IMPACT EXPERIENCES FOR BRANDS.
      FROM STRATEGY AND DESIGN TO DIGITAL AND OFFLINE CAMPAIGNS, WE HELP BUSINESSES DECLARE THEIR PRESENCE, CONNECT WITH THEIR AUDIENCE, AND GROW WITH CONFIDENCE.
    </p>
  </div>
</div>

      </main>

      {/* Why Maketa Section */}
   <section className="w-full bg-black py-16 px-6 md:px-16 overflow-x-auto">
  {/* === Title === */}
  <h2 className="[font-family:'Bebas_Neue',Helvetica] text-white text-[90px] md:text-[110px] leading-[1] mb-10 text-left">
    WHY <span className="text-[#FFCC04]">MAKETA</span>
  </h2>

  {/* === Feature Row === */}
  <div className="flex items-center justify-start gap-[24px] whitespace-nowrap">
    {/* 1️⃣ Feature */}
    <div className="border border-[#FFCC04] rounded-full px-6 py-2 inline-block">
      <p className="text-white text-[11px] tracking-[0.8px] font-semibold uppercase">
        STRATEGIES THAT AMPLIFY YOUR VOICE
      </p>
    </div>

    {/* ⭐ */}
    <span className="text-[#FFCC04] text-[40px] font-black leading-none inline-block">
      *
    </span>

    {/* 2️⃣ Feature */}
    <div className="border border-[#FFCC04] rounded-full px-6 py-2 inline-block">
      <p className="text-white text-[11px] tracking-[0.8px] font-semibold uppercase">
        CREATIVE VISUALS THAT GET NOTICED
      </p>
    </div>

    {/* ⭐ */}
    <span className="text-[#FFCC04] text-[40px] font-black leading-none inline-block">
      *
    </span>

    {/* 3️⃣ Feature */}
    <div className="border border-[#FFCC04] rounded-full px-6 py-2 inline-block">
      <p className="text-white text-[11px] tracking-[0.8px] font-semibold uppercase">
        DIGITAL + OFFLINE PRESENCE
      </p>
    </div>

    {/* ⭐ */}
    <span className="text-[#FFCC04] text-[40px] font-black leading-none inline-block">
      *
    </span>

    {/* 4️⃣ Feature */}
    <div className="border border-[#FFCC04] rounded-full px-6 py-2 inline-block">
      <p className="text-white text-[11px] tracking-[0.8px] font-semibold uppercase">
        GROWING BRANDS INTO LEADERS
      </p>
    </div>
  </div>
</section>






      {/* Detailed Description Section */}
      <section className="px-4 md:px-8 py-8 md:py-16">
        <p className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-responsive-small tracking-[0] leading-6 md:leading-8 max-w-5xl mx-auto reveal-fade">
          Every brand has a story. But in a crowded market, stories can get lost. That's where we step in.
          At Maketa, we believe presence is more than just being seen—it's about being remembered, respected, and chosen. We combine strategic thinking, creative design, and bold marketing to transform brands into experiences that audiences connect with on every level. 
          From launching startups that want to make their first impression, to helping established companies reinvent their identity, we craft tailored solutions that declare your presence with impact. Our approach blends digital innovation with offline activations, ensuring your brand lives wherever your audience does—online, in print, at events, and beyond.
          <br /><br />
          With Maketa, you don't just run campaigns—you build movements that inspire loyalty, spark conversations, and drive growth.
        </p>
      </section>

      {/* Discover Who We Are Section */}
      <section className="relative px-1 py-5 text-center flex flex-col items-center justify-center">
        {/* Background decorative image */}
        <img
          className="absolute right-0 bottom-0 w-[300px] h-[250px] object-contain opacity-70 reveal-right animate-pulse-slow"
          alt="Metallic Shape"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
        />
        <Link
  to="/about-us"
  className="inline-block relative group reveal-scale z-10"
>
  <h2 className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[80px] md:text-[100px] tracking-[0] leading-[normal] relative inline-block">
    DISCOVER 
    <span className="text-[#ffcc04] ml-4">WHO WE ARE</span>
  </h2>

  {/* Animated yellow underline appearing from outside */}
  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ffcc04] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
</Link>
      </section>

      {/* Footer */}
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
  );
};
