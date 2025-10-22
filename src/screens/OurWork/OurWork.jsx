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
    link: "https://www.behance.net/gallery/229538167/CARBLESS-SOCIAL-MEDIA-CAMPAIGN"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-1.png", 
    alt: "TUYINGO",
    title: "TUYINGO",
    link: "https://www.behance.net/gallery/231061525/TUYINGO-BRANDING"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-2.png", 
    alt: "DIVINE",
    title: "DIVINE",
    link: "https://www.behance.net/gallery/230899023/BEAUTY-CLINICS-SOCIAL-MEDIA-CAMPAIGN"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-3.png", 
    alt: "RUE Haya",
    title: "RUE Haya",
    link: "https://www.behance.net/gallery/230971515/RUE-HAYA-BRANDING"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-4.png", 
    alt: "TWOOPTICS",
    title: "TWOOPTICS",
    link: "https://www.behance.net/gallery/230810395/TWOOPTICS-SOCIAL-MEDIA-CAMPAIGN"
  },
  { 
    src: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/rectangle-651-5.png", 
    alt: "Finomena",
    title: "Finomena",
    link: "https://www.behance.net/gallery/232043831/FINOMENA-BRANDING"
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black w-full min-h-screen relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        {/* HEADER */}
        <header className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 reveal-fade">
          <Link to="/">
            <img
              className="h-[80px] w-[90px] md:h-[100px] md:w-[120px] object-contain hover:scale-105 transition-transform duration-300"
              alt="Logo"
              src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[50px]">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-bold text-sm tracking-wide transition-colors ${
                  item.active ? "text-[#ffcc04]" : "text-white"
                } hover:text-[#ffcc04]`}
                style={{ fontFamily: "Gilroy-Bold, Helvetica" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#ffcc04] text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-[80px] right-4 bg-[#111] border border-[#ffcc04]/20 rounded-xl flex flex-col items-start p-4 gap-3 shadow-lg z-50">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-semibold text-white hover:text-[#ffcc04] transition-colors text-sm`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center text-center py-10 md:py-20 px-4 overflow-hidden">
          <img
  className="
    absolute 
    left-[-100px] 
    top-[-60px] 
    w-[350px]          /* 📱 fixed mobile size */
    sm:w-[350px]       /* keeps same size on small tablets */
    md:w-[500px]       /* 💻 bigger on medium screens (laptops) */
    lg:w-[650px]       /* 🖥️ even bigger on large desktops */
    h-auto 
    opacity-70 
    animate-pulse-slow
  "
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/layer-1-1-1.png"
            alt="Metallic Shape"
          />

          <h1
            className="text-[#C0C0C0]"
            style={{
              fontFamily: "Bebas Neue, Helvetica",
              fontSize: "clamp(40px, 12vw, 160px)",
              lineHeight: "0.9",
            }}
          >
            HOW WE
          </h1>

          <h2
            className="text-[#ffcc04] italic rotate-2 mt-[-10px]"
            style={{
              fontFamily: "Rockybilly-Regular, Helvetica",
              fontSize: "clamp(50px, 10vw, 140px)",
            }}
          >
            Our Work
          </h2>

          <h1
            className="text-[#C0C0C0] mt-[-10px]"
            style={{
              fontFamily: "Bebas Neue, Helvetica",
              fontSize: "clamp(50px, 11vw, 150px)",
              lineHeight: "0.9",
            }}
          >
            DID IT
          </h1>

          <div className="mt-8 md:mt-16 px-3 sm:px-8">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold">
              WE DON&apos;T JUST TALK ABOUT IMPACT —{" "}
              <span className="text-[#ffcc04] font-extrabold">WE CREATE IT</span>. EXPLORE HOW MAKETA HELPED BRANDS DECLARE THEIR PRESENCE THROUGH{" "}
              <span className="text-[#ffcc04] font-extrabold">DIGITAL AND OFFLINE STRATEGIES</span>.
            </p>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section className="px-4 sm:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-[1200px] mx-auto">
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
                      className="w-full h-[240px] sm:h-[320px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75" 
                      alt={item.alt} 
                      src={item.src} 
                    />
                    
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
                        <Button className="bg-[#ffcc04] hover:bg-[#ffdd44] text-black text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-[12px] transition-all duration-300 hover:scale-110">
                          View Project
                        </Button>
                      </a>
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}>
                      <h3 className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: "Bebas Neue, Helvetica" }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
