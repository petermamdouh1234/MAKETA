import React from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "../../components/MobileMenu";
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
      {/* ===== HEADER ===== */}
      <header className="flex items-center justify-between w-full px-4 md:px-8 py-4 md:py-6 relative min-h-[80px] md:min-h-[100px] z-50">
        <div className="reveal-left">
          <Link to="/">
            <img
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] object-cover hover:scale-105 transition-transform duration-300"
              alt="Maketa Agency Logo"
              src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block reveal-down">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6 lg:gap-12">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      className={`relative font-bold text-sm tracking-wide transition-all duration-300 hover:text-[#ffcc04] ${
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

        {/* Mobile Nav */}
        <div className="md:hidden reveal-fade">
          <MobileMenu navigationItems={navigationItems} />
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <main className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 py-12 md:py-24 overflow-hidden">
        <img
          className="absolute left-[-60px] top-[-40px] w-[300px] sm:w-[380px] md:w-[520px] lg:w-[650px] h-auto opacity-70 animate-pulse-slow"
          alt="Metallic Shape"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
        />

        <div className="hidden md:flex absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 flex-col items-center gap-4 reveal-right">
          <span className="font-medium text-white text-sm rotate-90 whitespace-nowrap">
            Follow us <br /> <br />
          </span>
          {socialMediaLinks.map((social, index) => (
            <Link key={index} to={social.href} className="group">
              <img
                className="w-[28px] h-[28px] transition-transform group-hover:scale-110"
                alt={`${social.label} icon`}
                src={social.icon}
              />
            </Link>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex justify-end md:justify-end text-right reveal-up">
          <div>
            <h1 className="font-normal text-white text-[52px] sm:text-[68px] md:text-[90px] lg:text-[110px] leading-[0.9] mb-6">
              <span className="block">DECLARE</span>
              <span className="block text-[#ffcc04] italic transform rotate-[-4deg] inline-block ml-2 md:ml-8 font-serif">
                Presence
              </span>
              <span className="block">YOUR</span>
            </h1>
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg leading-6 md:leading-8 max-w-3xl">
              WE ARE A FULL-SERVICE EGYPT MARKETING AGENCY, CREATING HIGH IMPACT
              EXPERIENCES FOR BRANDS. FROM STRATEGY AND DESIGN TO DIGITAL AND
              OFFLINE CAMPAIGNS, WE HELP BUSINESSES DECLARE THEIR PRESENCE,
              CONNECT WITH THEIR AUDIENCE, AND GROW WITH CONFIDENCE.
            </p>
          </div>
        </div>
      </main>

      {/* ===== WHY MAKETA ===== */}
      <section className="w-full bg-black py-18 px-4 sm:px-6 md:px-6 overflow-hidden reveal-fade">
        <h2 className="font-bold text-white text-[45px] sm:text-[70px] md:text-[100px] leading-[1] mb-6 text-center md:text-left reveal-up">
          WHY <span className="text-[#FFCC04]">MAKETA</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap md:flex-nowrap gap-4 md:gap-6 reveal-fade delay-200">
          {[
            "STRATEGIES THAT AMPLIFY YOUR VOICE",
            "CREATIVE VISUALS THAT GET NOTICED",
            "DIGITAL + OFFLINE PRESENCE",
            "GROWING BRANDS INTO LEADERS",
          ].map((text, i, arr) => (
            <React.Fragment key={i}>
              <div className="border border-[#FFCC04] rounded-full px-4 md:px-6 py-2 md:py-3 flex-shrink-0 text-center reveal-up delay-100">
                <p className="text-white text-[10px] sm:text-[11px] md:text-[12px] lg:text-sm font-semibold uppercase whitespace-nowrap">
                  {text}
                </p>
              </div>

              {i < arr.length - 1 && (
                <span className="text-[#FFCC04] text-[50px] md:text-[30px] font-bold hidden md:inline-block">
                  *
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ===== DESCRIPTION ===== */}
     <section className="relative px-4 md:px-12 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
  {/* Background Accent (soft glow behind text) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,4,0.08),transparent_70%)] pointer-events-none"></div>

  {/* Section Content */}
  <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left space-y-8">
    <h2 className="text-[40px] sm:text-[60px] md:text-[80px] font-bold text-white [font-family:'Bebas_Neue',Helvetica] leading-[1] tracking-tight reveal-up">
      <span className="text-[#FFCC04]">STORIES</span> THAT TURN INTO <br className="hidden md:block" /> <span className="text-[#FFCC04]">MOVEMENTS</span>
    </h2>

    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 font-medium [font-family:'Gilroy-Medium-Medium',Helvetica] reveal-fade">
      Every brand has a story. But in a crowded market, stories can get lost.{" "}
      <span className="text-[#FFCC04] font-semibold">That’s where we step in.</span> 
      At <span className="text-[#FFCC04] font-semibold">Maketa</span>, we believe presence is more than just being seen—it’s about 
      being remembered, respected, and chosen.
    </p>

    <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 reveal-fade delay-200">
      We combine <span className="text-[#FFCC04]">strategic thinking</span>, 
      <span className="text-[#FFCC04]"> creative design</span>, and 
      <span className="text-[#FFCC04]"> bold marketing</span> to transform brands 
      into experiences audiences connect with on every level. From launching 
      startups that want to make their first impression, to helping established 
      companies reinvent their identity — we craft tailored solutions that 
      <span className="text-[#FFCC04] font-semibold"> declare your presence</span> 
      with impact.
    </p>

    <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 reveal-fade delay-400">
      Our approach blends <span className="text-[#FFCC04]">digital innovation</span> 
      with <span className="text-[#FFCC04]">offline activations</span>, ensuring 
      your brand lives wherever your audience does — online, in print, at events, 
      and beyond. <br /><br />
      With <span className="text-[#FFCC04] font-semibold">Maketa</span>, you don’t 
      just run campaigns — <span className="text-[#FFCC04] font-bold uppercase tracking-wide">
      you build movements</span> that inspire loyalty, spark conversations, and drive growth.
    </p>
  </div>
</section>
      {/* ===== DISCOVER WHO WE ARE ===== */}
      <section className="relative px-2 py-10 text-center flex flex-col items-center justify-center overflow-hidden reveal-up">
        <Link
          to="/about-us"
          className="inline-block relative group z-10 max-w-full"
        >
          <h2 className="font-normal text-white text-[40px] sm:text-[60px] md:text-[80px] leading-[1] reveal-up">
            DISCOVER <span className="text-[#ffcc04] ml-3">WHO WE ARE</span>
          </h2>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ffcc04] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black py-12 sm:py-16 mt-14 px-4 reveal-fade">
        <div className="max-w-[1469px] mx-auto flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-16">
            <div className="reveal-left flex justify-center lg:justify-start">
              <Link to="/">
                <img
                  className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] object-cover hover:scale-105 transition-transform duration-300"
                  alt="Logo"
                  src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
                />
              </Link>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left reveal-up">
              <div>
                <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">
                  About Us
                </h3>
                <div className="flex flex-col gap-4">
                  {aboutUsLinks.map((link, i) => (
                    <Link
                      key={i}
                      to={link.href}
                      className="text-white text-sm sm:text-lg hover:text-[#ffcc04]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">
                  Services
                </h3>
                <div className="flex flex-col gap-4">
                  {servicesLinks.map((link, i) => (
                    <Link
                      key={i}
                      to={link.href}
                      className="text-white text-sm sm:text-lg hover:text-[#ffcc04]"
                    >
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
                <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">
                  Contact Us
                </h3>
              </div>

              <div>
                <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">
                  Follow Us
                </h3>
                <div className="flex flex-col gap-3">
                  {socialMediaLinks.map((social, i) => (
                    <Link
                      key={i}
                      to={social.href}
                      className="flex items-center justify-center lg:justify-start gap-3 group"
                    >
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

          <p className="text-center text-white text-xs sm:text-base mt-6 reveal-fade delay-300">
            © 2025 | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};
