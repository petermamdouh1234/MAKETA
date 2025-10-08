import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const Frame20Subsection = () => {
  const navigationItems = [
    { label: "HOME", href: "/", isActive: false },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: true },
    { label: "SERVICES", href: "/our-services-u45-main", isActive: false },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

  return (
    <header className="flex w-full items-center justify-between px-8 py-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <img
          className="h-[161px] w-[191px] object-cover"
          alt="Logo copy"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
        />
      </div>

      <NavigationMenu className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <NavigationMenuList className="flex items-center gap-[101px]">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={item.label}>
              {item.href === "/" ? (
                <div className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal] cursor-pointer hover:text-[#ffcc04] transition-colors">
                  {item.label}
                </div>
              ) : (
                <NavigationMenuLink asChild>
                  <Link
                    className={`relative w-fit mt-[-1.00px] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-lg tracking-[0] leading-[normal] block hover:text-[#ffcc04] transition-colors ${
                      item.isActive ? "text-[#ffcc04]" : "text-white"
                    }`}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
