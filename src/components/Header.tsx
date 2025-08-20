"use client"; // Header requires state

import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlaamLogo from "@/images/glaam-logo.png";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const showCTA = pathname !== "/register";

  return (
    <header>
      <nav
        aria-label="global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex items-center gap-x-6">
          {/*MOBILE MENU HAMBURGER ICON*/}
          <div className="flex xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/*HOME ANCHOR LOGO*/}
          <div className="flex">
            <a href="https://www.glaam.org/">
              <span className="sr-only">Greater Los Angeles Area Mensa</span>
              <Image
                alt="Greater Los Angeles Area Mensa logo"
                src={GlaamLogo}
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/*DESKTOP POPOVER MENU*/}
          <PopoverGroup className="hidden px-6 lg:gap-x-12 xl:flex">
            <Link href="/" className="text-base/6 font-semibold text-gray-900">
              RG 2026
            </Link>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-base/6 font-semibold text-gray-900">
                Schedule
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-12">
                  <p className="pb-4 text-center text-lg">
                    <em>2026 Schedule Coming Soon!</em>
                  </p>
                  <p>
                    In the meanwhile, please explore schedules from previous
                    years on our{" "}
                    <a
                      className="text-blue-700 underline"
                      href="https://www.glaam.org/regional-gathering/"
                    >
                      history page
                    </a>
                    .
                  </p>
                </div>
              </PopoverPanel>
            </Popover>

            <Link
              href="/speakers"
              className="text-base/6 font-semibold text-gray-900"
            >
              Speakers
            </Link>
            <Link
              href="/venue"
              className="text-base/6 font-semibold text-gray-900"
            >
              Venue
            </Link>
          </PopoverGroup>
        </div>

        <div className="mx-auto hidden items-center gap-4 px-4 font-semibold text-amber-600 md:flex">
          <p className="text-center">
            <time dateTime="2026-02-13">February 13</time>-
            <time dateTime="2026-02-15">15, 2026</time> &bull; Long Beach, CA
          </p>
          <p></p>
        </div>

        {/*CALL TO ACTION BUTTON*/}
        {showCTA && <CallToAction />}
      </nav>

      {/*MOBILE MENU*/}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="xl:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between gap-x-6">
            <div className="flex items-center gap-x-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              {/* HOME ANCHOR LOGO */}
              <a
                href="https://www.glaam.org/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Greater Los Angeles Area Mensa</span>
                <Image
                  alt="Greater Los Angeles Area Mensa logo"
                  src={GlaamLogo}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  RG 2026
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Schedule
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 p-4">
                    <p className="pb-4 text-lg">
                      <em>2026 Schedule Coming Soon!</em>
                    </p>
                    <p>
                      In the meanwhile, please explore schedules from previous
                      years on our{" "}
                      <a
                        className="text-blue-700 underline"
                        href="https://www.glaam.org/regional-gathering/"
                      >
                        history page
                      </a>
                      .
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/speakers"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Speakers
                </Link>
                <Link
                  href="/venue"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Venue
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
