import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - StaRGazing 2026',
    default: 'StaRGazing 2026 - Greater Los Angeles Area Mensa Regional Gathering',
  },
  description: 'Scintillating speakers!  Enthralling Entertainment!  Games Galore!  Kids Track!  Most Meals Included!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="">
	{/* Wrapper div fixes a bug with HeadlessUI's popover, where
	clicks outside of the header element will not properly close
	the popover panel.  See
	https://github.com/tailwindlabs/headlessui/issues/2752 */}
	<div>
	  <Header />
	  {children}
	  <Footer />
	</div>
      </body>
    </html>
  )
}
