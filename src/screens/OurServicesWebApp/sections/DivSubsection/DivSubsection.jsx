import React from "react";
import { Link } from "react-router-dom";

export const DivSubsection = () => {
  const navigationItems = [
    { label: "HOME", href: "/home", isActive: false },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: false },
    { label: "SERVICES", href: "/our-services-u45-main", isActive: true },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

  return (
    <header className="w-full flex items-center justify-between px-8 py-6 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <img
          className="h-[161px] w-[191px] object-cover"
          alt="Logo copy"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
        />
      </div>

      <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex items-center gap-[101px]">
          {navigationItems.map((item, index) =>
            item.href === "/" ? (
              <div
                key={item.label}
                className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal] cursor-pointer hover:text-[#ffcc04] transition-colors"
              >
                {item.label}
              </div>
            ) : (
              <Link
                key={item.label}
                className={`[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-lg tracking-[0] leading-[normal] hover:text-[#ffcc04] transition-colors ${
                  item.isActive ? "text-[#ffcc04]" : "text-white"
                }`}
                to={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
};
