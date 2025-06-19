"use client";

import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import Logo from "@/public/globe.svg";
import PageLinks from "@/app/page-links/PageLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/">
          <Image src={Logo} alt="logo" width={50} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {PageLinks.map(({ href, label, _icon }) => (
            <Link href={href} key={label} className="hover:text-gray-300">
              {/* {!!icon && (
                  <Image src={icon} alt={label} width={20} height={20} />
                )} */}
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // X icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          {PageLinks.map(({ href, label, icon }) => (
            <Link
              href={href}
              key={label}
              className="block py-2 hover:bg-gray-700 rounded"
            >
              <div className="flex items-center gap-2"></div>
              {!!icon && (
                <Image src={icon} alt={label} width={20} height={20} />
              )}
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
