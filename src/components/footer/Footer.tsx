"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Popover } from "@headlessui/react";

import Logo from "../../../public/expand-green.svg";

interface linkProps {
  id?: number;
  title?: string;
  url?: string;
}

const links: linkProps[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 3,
    title: "Why Choose Us",
    url: "#whychooseus",
  },
  {
    id: 4,
    title: "How it Works",
    url: "#howitworks",
  },
  {
    id: 5,
    title: "FAQs",
    url: "#faqs",
  },
];

const Footer: React.FC = () => {
  return (
    <header className="bg-gray-50 py-5">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-col lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src={Logo} alt="expand-logo" />
          </Link>

          <p className="flex lg:hidden -m-1.5 p-1.5 text-sm">
            Contact: (+234) 708 005 5931
          </p>
        </div>

        <div className="hidden lg:flex lg:justify-end items-center gap-x-6">
          <Popover.Group className="hidden lg:flex lg:gap-x-8">
            {links.map((link) => (
              <Link
                href={`/${link.url}`}
                className="text-base font-semibold leading-6 text-gray-700 uppercase"
                key={link.id}
              >
                {link.title}
              </Link>
            ))}
          </Popover.Group>
        </div>
      </nav>
    </header>
  );
};

export default Footer;
