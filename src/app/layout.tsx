import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { clsx } from 'clsx'

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
    <html lang="en" className={
      clsx(
      'h-full bg-white antialiased',
      GeistSans.className
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
