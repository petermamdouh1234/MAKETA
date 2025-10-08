import { MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const MobileNav = ({ navigationItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-white hover:bg-transparent hover:text-[#ffcc04]"
      >
        <MenuIcon className="h-8 w-8" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              className="text-white hover:bg-transparent hover:text-[#ffcc04]"
            >
              <XIcon className="h-8 w-8" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={closeMenu}
                className={`relative w-fit [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-2xl tracking-[0] leading-[normal] transition-all duration-300 hover:text-[#ffcc04] hover:scale-105 ${
                  item.isActive ? "text-[#ffcc04]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
