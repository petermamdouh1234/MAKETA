import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MobileMenu } from "../../../../components/MobileMenu";


export const Frame4Subsection = () => {
  const location = useLocation();

  const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "OUR WORK", href: "/our-work" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "SERVICES", href: "/our-services-u45-main" },
    { label: "CONTACT US", href: "/contact-us" },
  ];

  return (
    <header className="flex w-full items-center justify-between px-8 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0">
      {/* Logo */}
      <Link to="/" className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <img
          className="h-[120px] w-[191px] object-cover"
          alt="Logo"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
        />
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-[60px] md:gap-[80px] lg:gap-[100px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">

        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.label}
              to={item.href}
              className={`[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-xs md:text-sm lg:text-base xl:text-lg tracking-[0] leading-[normal] transition-colors duration-300 ${
                isActive ? "text-[#ffcc04]" : "text-white hover:text-[#ffcc04]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
       <div className="md:hidden">
    <MobileMenu />
  </div>
    </header>
  );
};
