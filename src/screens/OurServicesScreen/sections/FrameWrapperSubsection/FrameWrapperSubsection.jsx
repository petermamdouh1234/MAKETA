import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const FrameWrapperSubsection = () => {
  const navigationItems = [
    { label: "HOME", href: "/", isActive: false },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: false },
    { label: "SERVICES", href: "/our-services-u45-main", isActive: true },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

  return (
    <header className="flex w-full items-center justify-between px-4 md:px-8 py-4 md:py-6 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <img
          className="h-[80px] w-[95px] md:h-[120px] md:w-[143px] lg:h-[161px] lg:w-[191px] object-cover"
          alt="Logo copy"
          src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
        />
      </div>

      <nav className="hidden md:block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6 lg:gap-[101px]">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link
                    className={`relative w-fit [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-xs lg:text-sm xl:text-lg tracking-[0] leading-[normal] transition-colors hover:text-[#ffcc04] ${
                      item.isActive ? "text-[#ffcc04]" : "text-white"
                    }`}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};
