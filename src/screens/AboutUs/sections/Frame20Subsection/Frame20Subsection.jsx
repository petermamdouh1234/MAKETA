import React from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "../../../../components/MobileMenu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const Frame20Subsection = () => {
  const navigationItems = [
    { label: "HOME", href: "/home", isActive: false },
    { label: "OUR WORK", href: "/our-work", isActive: false },
    { label: "ABOUT US", href: "/about-us", isActive: true },
    { label: "SERVICES", href: "/our-services-u45-main", isActive: false },
    { label: "CONTACT US", href: "/contact-us", isActive: false },
  ];

  return (
    <header className="relative flex w-full items-center justify-between px-8 py-4">
      {/* ===== Logo ===== */}
      <div>
        <Link to="/home">
          <img
            className="h-[161px] w-[191px] object-cover"
            alt="Logo"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
          />
        </Link>
      </div>

      {/* ===== Desktop Navigation ===== */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[80px]">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.href}
                    className={`[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-lg transition-colors duration-300 ${
                      item.isActive
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

      {/* ===== Mobile Menu ===== */}
      <div className="md:hidden z-50">
        <MobileMenu />
      </div>
    </header>
  );
};
