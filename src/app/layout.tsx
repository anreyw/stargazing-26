import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import { clsx } from 'clsx'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

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
    <html lang="en"
      className={clsx(
	'h-full bg-white antialiased',
	inter.variable,
	dmSans.variable,
      )
    }>
      <body className="flex min-h-full">
	<div className="flex w-full flex-col"> 
	  {children}
	</div>
      </body>
    </html>
  )
}
