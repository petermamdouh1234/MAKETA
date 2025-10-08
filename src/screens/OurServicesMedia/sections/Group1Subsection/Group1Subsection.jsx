import React from "react";
import { Link } from "react-router-dom";

export const Group1Subsection = () => {
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
      href: "#",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-instagram.svg",
      text: "Instagram",
      href: "#",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-linkedin.svg",
      text: "LinkedIn",
      href: "#",
    },
  ];

  return (
    <footer className="relative w-full bg-transparent">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 px-8 py-12 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <img
              className="h-[191px] w-[191px] object-cover"
              alt="Logo copy"
              src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 flex-1 justify-center">
            {/* About Us Section */}
            <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5 mb-[53px]">
                About Us
              </h3>
              <ul className="flex flex-col gap-[27.5px]">
                {aboutUsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[18px] hover:text-[#ffcc04] transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services Section */}
            <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5 mb-[53px]">
                Services
              </h3>
              <ul className="flex flex-col gap-[27.5px]">
                  {servicesLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[18px] hover:text-[#ffcc04] transition-colors"
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
                    </li>
                  ))}
                </ul>
              </nav>

            {/* Contact Us Section */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5">
                Contact Us
              </h3>
            </div>

            {/* Follow Us Section */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
              <h3 className="font-text-single-300-bold font-[number:var(--text-single-300-bold-font-weight)] text-[#ffcc04] text-[length:var(--text-single-300-bold-font-size)] tracking-[var(--text-single-300-bold-letter-spacing)] leading-[var(--text-single-300-bold-line-height)] [font-style:var(--text-single-300-bold-font-style)] mb-[53px]">
                Follow us
              </h3>
              <ul className="flex flex-col gap-[15.1px]">
                {socialMediaLinks.map((social, index) => (
                  <li key={index} className="flex items-center gap-[10.1px]">
                    <img
                      className="w-[30.3px] h-[30.3px]"
                      alt="Social media icon"
                      src={social.icon}
                    />
                    <a
                      href={social.href}
                      className="font-text-single-200-regular font-[number:var(--text-single-200-regular-font-weight)] text-white text-[length:var(--text-single-200-regular-font-size)] text-center tracking-[var(--text-single-200-regular-letter-spacing)] leading-[var(--text-single-200-regular-line-height)] [font-style:var(--text-single-200-regular-font-style)] hover:text-[#ffcc04] transition-colors"
                    >
                      {social.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-8 pb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <p className="font-body-default font-[number:var(--body-default-font-weight)] text-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
            Copyright © 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
