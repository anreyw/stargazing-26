'use client' // Header requires state

import Image from 'next/image'
import GlaamLogo from '@/images/glaam-logo.png'
import { useState } from 'react'
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
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// PRODUCT MENU SCHEMA
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header>
      <nav aria-label="global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
	{/*HOME ANCHOR LOGO*/}
	<div className="flex">
	  <a href="#">
	    <span className="sr-only">Greater Los Angeles Area Mensa</span>
	    <Image
	      alt="Greater Los Angeles Area Mensa logo"
	      src={GlaamLogo}
	      className="h-8 w-auto"
	    />
	  </a>
	</div>

	{/*MOBILE MENU HAMBURGER ICON*/}
	<div className="flex lg:hidden">
	  <button
	    type="button"
	    onClick={() => setMobileMenuOpen(true)}
	    className=""
	  >
	    <span className="sr-only">Open main menu</span>
	    <Bars3Icon aria-hidden="true" className="size-6" />
	  </button>
	</div>
	
	{/*DESKTOP MENU*/}
	<PopoverGroup className="hidden lg:flex lg:gap-x-12">
	  <Popover className="">
	    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
	      Product
	      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
	    </PopoverButton>
	  </Popover>
	</PopoverGroup>
	
      </nav>
    </header>
  )
}
