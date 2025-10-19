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
   <footer className="bg-black py-12 sm:py-16 mt-16 px-4">
  <div className="max-w-[1469px] mx-auto flex flex-col gap-12 sm:gap-16">
    <div className="flex flex-col lg:flex-row gap-10 sm:gap-16">
      {/* Logo */}
      <div className="reveal-left flex justify-center lg:justify-start">
        <Link to="/">
          <img
            className="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] object-cover hover:scale-105 transition-transform duration-300"
            alt="Logo"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
          />
        </Link>
      </div>

      {/* Links Grid */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        {/* About Us */}
        <div>
          <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">About Us</h3>
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

        {/* Services */}
        <div>
          <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">Services</h3>
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

        {/* Contact Us */}
        <div>
          <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">Contact Us</h3>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-extrabold text-[#ffcc04] text-lg sm:text-xl mb-6">Follow Us</h3>
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

    <p className="text-center text-white text-xs sm:text-base mt-6">
      © 2025 | All Rights Reserved
    </p>
  </div>
</footer>

  );
};
