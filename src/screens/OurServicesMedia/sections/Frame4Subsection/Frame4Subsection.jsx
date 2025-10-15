import React from "react";
import { Link } from "react-router-dom";

export const Frame4Subsection = () => {
  const navigationItems = [
    { label: "HOME", href: "/home", isActive: false },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: false },
    { label: "SERVICES", href: "/our-services-u45-main", isActive: true },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

  return (
    <header className="flex w-full items-center justify-between px-8 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0">
      <img
        className="h-[161px] w-[191px] object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
        alt="Logo copy"
        src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
      />

      <nav className="flex items-center gap-[101px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        {navigationItems.map((item, index) =>
          item.label === "HOME" ? (
            <div
              key={item.label}
              className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-xs lg:text-sm xl:text-lg tracking-[0] leading-[normal] cursor-pointer hover:text-[#ffcc04] transition-colors duration-300"
            >
              {item.label}
            </div>
          ) : (
            <Link
              key={item.label}
              className={`[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-xs lg:text-sm xl:text-lg tracking-[0] leading-[normal] block hover:text-[#ffcc04] transition-colors duration-300 ${
                item.isActive ? "text-[#ffcc04]" : "text-white"
              }`}
              to={item.href}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
};
