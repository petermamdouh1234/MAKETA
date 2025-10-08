import React from "react";
import { Link } from "react-router-dom";

export const GroupWrapperSubsection = () => {
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
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-instagram.svg",
      text: "Instagram",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-linkedin.svg",
      text: "LinkedIn",
    },
  ];

  return (
    <footer className="relative w-full h-[370px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="flex justify-center pt-[87px] px-4">
        <div className="flex gap-[95px] max-w-[934px] w-full">
          {/* About Us Section */}
          <div className="flex flex-col gap-[53px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5">
              About Us
            </h3>
            <nav className="flex flex-col gap-[27.5px]">
              {aboutUsLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[18px] hover:text-[#ffcc04] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-[53px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5">
              Services
            </h3>
            <nav className="flex flex-col gap-[27.5px]">
                  {servicesLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[18px] hover:text-[#ffcc04] transition-colors whitespace-pre-line"
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
          <div className="flex flex-col gap-[53px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h3 className="[font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5">
              Contact Us
            </h3>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col gap-[53px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <h3 className="font-text-single-300-bold font-[number:var(--text-single-300-bold-font-weight)] text-[#ffcc04] text-[length:var(--text-single-300-bold-font-size)] tracking-[var(--text-single-300-bold-letter-spacing)] leading-[var(--text-single-300-bold-line-height)] [font-style:var(--text-single-300-bold-font-style)]">
              Follow us
            </h3>
            <div className="flex flex-col gap-[15px]">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-[10px] hover:opacity-80 transition-opacity"
                >
                  <img
                    className="w-[30px] h-[30px]"
                    alt={`${social.text} icon`}
                    src={social.icon}
                  />
                  <span className="font-text-single-200-regular font-[number:var(--text-single-200-regular-font-weight)] text-white text-[length:var(--text-single-200-regular-font-size)] tracking-[var(--text-single-200-regular-letter-spacing)] leading-[var(--text-single-200-regular-line-height)] [font-style:var(--text-single-200-regular-font-style)]">
                    {social.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-[64px] left-2 font-body-default font-[number:var(--body-default-font-weight)] text-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        Copyright © 2025 | All Rights Reserved
      </div>

      {/* Logo */}
      <img
        className="absolute top-0 left-0 h-[191px] w-[191px] object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
        alt="Logo copy"
        src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
      />
    </footer>
  );
};
