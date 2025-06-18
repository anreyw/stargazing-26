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
      <body className="h-screen flex items-center justify-center text-3xl">
	{children}
      </body>
    </html>
  )
}
