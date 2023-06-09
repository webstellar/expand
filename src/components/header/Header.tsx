"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";

import Logo from "../../../public/expand-white.svg";

interface linkProps {
  id?: number;
  title?: string;
  url?: string;
}

const links: linkProps[] = [
  {
    id: 1,
    title: "Why Choose Us",
    url: "#whychooseus",
  },
  {
    id: 1,
    title: "Our Services",
    url: "#services",
  },
  {
    id: 3,
    title: "How it Works",
    url: "#howitworks",
  },
  {
    id: 5,
    title: "FAQs",
    url: "#faqs",
  },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-transparent absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src={Logo} alt="expand-logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3CenterLeft className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-end items-center gap-x-6">
          <Popover.Group className="hidden lg:flex lg:gap-x-8">
            {links.map((link) => (
              <Link
                href={`/${link.url}`}
                className="text-lg font-semibold leading-6 text-gray-50"
                key={link.id}
              >
                {link.title}
              </Link>
            ))}
          </Popover.Group>

          <button className="bg-lemon-green py-2 px-7 rounded-sm">
            <Link
              href="#form"
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              Let&apos;s Talk
            </Link>
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Expand</span>
              <Image className="h-8 w-auto" src={Logo} alt="expand-logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link) => (
                  <Link
                    key={link.id}
                    href={`/${link.url}`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#form"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
