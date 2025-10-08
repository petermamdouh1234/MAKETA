import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../../../hooks/useScrollReveal"; // Assuming useScrollReveal is available

export const Group3Subsection = () => {
  useScrollReveal(); // Initialize ScrollReveal for this component

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
      href: "#",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-instagram.svg",
      label: "Instagram",
      href: "#",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/social-media-icon-square-linkedin.svg",
      label: "LinkedIn",
      href: "#",
    },
  ];

  return (
    <footer className="relative w-full bg-black py-16 mt-16">
      <div className="max-w-[1469px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Logo */}
          <div className="reveal-left">
            <Link to="/">
              <img
                className="h-[191px] w-[191px] object-cover hover:scale-105 transition-transform duration-300"
                alt="Logo"
                src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
              />
            </Link>
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
  );
};
