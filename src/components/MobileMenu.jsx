import React, { useState } from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "OUR WORK", href: "/our-work" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "SERVICES", href: "/our-services-u45-main" },
  { label: "CONTACT US", href: "/contact-us" },
];

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div >
      {/* Hamburger Button */}
    <button
                className="md:hidden text-[#ffcc04] text-3xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
    
              {/* Mobile Menu */}
              {menuOpen && (
                <div className="absolute top-[80px] right-4 bg-[#111] border border-[#ffcc04]/20 rounded-xl flex flex-col items-start p-4 gap-3 shadow-lg z-50">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`font-semibold text-white hover:text-[#ffcc04] transition-colors text-sm`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
        </div>
      )}
    