import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const Frame9Subsection = () => {
  const navigationItems = [
    { label: "HOME", href: "/home", isActive: true },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: false },
    {
      label: "SERVICES",
      href: "/our-services-u45-main",
      isActive: false,
      isHighlighted: true,
    },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

  return (
    <div className="flex w-full items-center justify-between px-4 md:px-8 py-4 translate-y-[-1rem] animate-fade-in opacity-0">
      {/* ===== Logo ===== */}
      <Link to="/home">
        <img
          className="h-[80px] w-[95px] md:h-[120px] md:w-[143px] lg:h-[161px] lg:w-[191px] object-cover translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] cursor-pointer"
          alt="Logo copy"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
        />
      </Link>

      {/* ===== Navigation ===== */}
      <NavigationMenu className="hidden md:block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <NavigationMenuList className="flex items-center gap-6 lg:gap-[101px]">
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild>
                <Link
                  to={item.href}
                  className={`[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-xs lg:text-sm xl:text-lg tracking-[0] leading-[normal] transition-colors duration-200 ${
                    item.isActive || item.isHighlighted
                      ? "text-[#ffcc04]"
                      : "text-white hover:text-[#ffcc04]"
                  }`}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
