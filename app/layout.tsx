import { type Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body className="flex min-h-full">
	<div className="flex w-full flex-col"> 
	  {children}
	</div>
      </body>
    </html>
  )
}
