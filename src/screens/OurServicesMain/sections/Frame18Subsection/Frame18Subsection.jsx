import React from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "../../../../components/MobileMenu"; // ✅ import the mobile menu

export const Frame18Subsection = () => {
  const navigationItems = [
    { label: "HOME", href: "/home", isActive: false },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: false },
    { label: "SERVICES", href: "/our-services-u45-main", isActive: true },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

  return (
    <header className="flex w-full items-center justify-between px-8 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0">
      {/* ===== Logo ===== */}
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <Link to="/home">
          <img
            className="h-[161px] w-[191px] object-cover cursor-pointer"
            alt="Logo copy"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
          />
        </Link>
      </div>

      {/* ===== Desktop Navigation ===== */}
      <nav className="hidden md:flex items-center gap-[101px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-xs lg:text-sm xl:text-lg tracking-[0] leading-[normal] hover:text-[#ffcc04] transition-colors duration-300 ${
              item.isActive ? "text-[#ffcc04]" : "text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* ===== Mobile Menu ===== */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};
