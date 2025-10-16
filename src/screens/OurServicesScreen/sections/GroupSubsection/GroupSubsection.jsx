import React from "react";
import { Link } from "react-router-dom";

export const GroupSubsection = () => {
  const aboutUsLinks = [
    { text: "Story", href: "/about-us#our-story" },
    { text: "Our Clients", href: "/about-us#our-clients" },
    { text: "Team", href: "/about-us#our-team" },
  ];

  const servicesLinks = [
    { text: "Marketing", href: "/our-services-u45-marketing" },
    { text: "Branding & Design", href: "/our-services-u45-branding" },
    { text: "Media Production", href: "/our-services-u45-media-production" },
    { text: "Web & App Development", href: "/our-services-u45-web-u38-app" },
  ];

  const socialMediaLinks = [
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-facebook.svg",
      text: "Facebook",
      href: "https://www.facebook.com/share/1GDRYiwd6N/?mibextid=wwXIfr",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-instagram.svg",
      text: "Instagram",
      href: "https://www.instagram.com/maketaagency?igsh=aDgyaHhmYWl5bHR2",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-linkedin.svg",
      text: "LinkedIn",
      href: "https://www.linkedin.com/company/maketaagency/",
    },
  ];

  return (
    <footer className="relative w-full bg-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Logo Section */}
          <div className="lg:col-span-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <img
              className="w-48 h-48 object-cover"
              alt="Logo copy"
              src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
            />
          </div>

          {/* About Us Section */}
          <div className="lg:col-span-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5 mb-12">
              About Us
            </h3>
            <nav className="flex flex-col gap-7">
              {aboutUsLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg leading-[18px] hover:text-[#ffcc04] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5 mb-12">
              Services
            </h3>
            <nav className="flex flex-col gap-7">
                  {servicesLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg leading-[18px] hover:text-[#ffcc04] transition-colors"
                    >
                      {link.text === "Web & App Development" ? (
                        <>
                          Web &amp; App <br />
                          Development
                        </>
                      ) : (
                        link.text
                      )}
                    </Link>
                  ))}
                </nav>
              </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5">
              Contact Us
            </h3>
          </div>

          {/* Follow Us Section */}
          <div className="lg:col-span-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <h3 className="font-text-single-300-bold font-[number:var(--text-single-300-bold-font-weight)] text-[#ffcc04] text-[length:var(--text-single-300-bold-font-size)] tracking-[var(--text-single-300-bold-letter-spacing)] leading-[var(--text-single-300-bold-line-height)] [font-style:var(--text-single-300-bold-font-style)] mb-12">
              Follow us
            </h3>
            <nav className="flex flex-col gap-4">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <img
                    className="w-8 h-8"
                    alt="Social media icon"
                    src={social.icon}
                  />
                  <span className="font-text-single-200-regular font-[number:var(--text-single-200-regular-font-weight)] text-white text-[length:var(--text-single-200-regular-font-size)] tracking-[var(--text-single-200-regular-letter-spacing)] leading-[var(--text-single-200-regular-line-height)] [font-style:var(--text-single-200-regular-font-style)]">
                    {social.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <p className="font-body-default font-[number:var(--body-default-font-weight)] text-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
            Copyright © 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
