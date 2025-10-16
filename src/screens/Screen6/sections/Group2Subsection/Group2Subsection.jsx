import React from "react";
import { Link } from "react-router-dom";

export const Group2Subsection = () => {
  // Footer navigation data
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

  const socialLinks = [
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
    <footer className="relative w-full h-[370px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      {/* Logo */}
      <img
        className="absolute top-0 left-0 h-[191px] w-[191px] object-cover"
        alt="Logo copy"
        src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
      />

      {/* Main footer content */}
      <div className="absolute top-[87px] left-[533px] w-[934px] h-[283px] flex translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {/* About Us Section */}
        <nav className="mt-0 w-[109.31px] h-[282.8px] ml-0 flex flex-col gap-[53px]">
          <h3 className="w-[107.31px] h-[25.25px] [font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold text-[#ffcc04] text-xl tracking-[0] leading-5">
            About Us
          </h3>

          <ul className="ml-0 w-[92px] h-[204.53px] flex flex-col gap-[27.5px]">
            {aboutUsLinks.map((link, index) => (
              <li
                key={`about-${index}`}
                className="inline-flex relative items-start"
              >
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] hover:text-[#ffcc04] transition-colors"
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[18px] whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <img className="w-[67px] h-[18px] relative" alt="Link" />
            </li>
          </ul>
        </nav>

        {/* Services Section */}
        <nav className="w-[155px] h-[278.08px] ml-[158.7px] flex-col gap-[53px] mt-0 flex">
          <h3 className="w-[98.48px] [font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold h-[25.25px] text-[#ffcc04] text-xl tracking-[0] leading-5">
            Services
          </h3>

          <ul className="w-[153px] h-[199.8px] ml-0 flex flex-col">
                  {servicesLinks.map((link, index) => (
                    <li
                      key={`service-${index}`}
                      className={`inline-flex ml-0 relative items-start ${index > 0 ? "mt-[27.5px]" : ""}`}
                    >
                      <Link
                        to={link.href}
                        className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] hover:text-[#ffcc04] transition-colors"
                      >
                        {link.label === "Web & App Development" ? (
                          <div className="relative w-28 h-9">
                            <span className="absolute top-[calc(50.00%_-_18px)] left-0 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[18px]">
                              Web &amp; App <br />
                              Development
                            </span>
                          </div>
                        ) : (
                          <span className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[18px] whitespace-nowrap">
                            {link.label}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-[9.5px]">
                    {/* Removed placeholder image if it's not needed */}
                  </li>
                </ul>
              </nav>

        {/* Contact Us Section */}
        <div className="w-[133.3px] ml-[95.3px] mt-0 flex">
          <h3 className="w-[131.3px] [font-family:'Gilroy-ExtraBold-ExtraBold',Helvetica] font-extrabold h-[25.25px] text-[#ffcc04] text-xl tracking-[0] leading-5">
            Contact Us
          </h3>
        </div>

        {/* Follow Us Section */}
        <nav className="w-[125.92px] h-[207.05px] ml-[158.7px] flex-col gap-[53px] mt-0 flex">
          <h3 className="w-[112.36px] font-text-single-300-bold font-[number:var(--text-single-300-bold-font-weight)] h-[25.25px] text-[#ffcc04] text-[length:var(--text-single-300-bold-font-size)] tracking-[var(--text-single-300-bold-letter-spacing)] leading-[var(--text-single-300-bold-line-height)] [font-style:var(--text-single-300-bold-font-style)]">
            Follow us
          </h3>

          <ul className="w-[123.92px] h-[128.77px] ml-0 flex flex-col">
            {socialLinks.map((social, index) => (
              <li
                key={`social-${index}`}
                className={`flex gap-[10.1px] ${index === 1 ? "ml-[0.5px] mt-[15.1px]" : index === 2 ? "ml-[0.5px] mt-[22.7px]" : ""}`}
              >
                <img
                  className="w-[30.3px] h-[30.3px]"
                  alt="Social media icon"
                  src={social.icon}
                />
                <a
                  href={social.href}
                  className="inline-flex mt-[3.8px] relative items-start hover:text-[#ffcc04] transition-colors"
                >
                  <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-text-single-200-regular font-[number:var(--text-single-200-regular-font-weight)] text-white text-[length:var(--text-single-200-regular-font-size)] text-center tracking-[var(--text-single-200-regular-letter-spacing)] leading-[var(--text-single-200-regular-line-height)] whitespace-nowrap [font-style:var(--text-single-200-regular-font-style)]">
                      {social.label}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="absolute top-[153px] left-2 w-[365px] font-body-default font-[number:var(--body-default-font-weight)] text-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Copyright © 2025 | All Rights Reserved
      </div>
    </footer>
  );
};
