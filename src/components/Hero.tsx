import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">

	<div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">

	  {/* HERO HEADING */}
	  <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
	    <span className="sr-only">DeceptiConf - </span>A design conference for the dark side.
	  </h1>

	  { /*HERO TEXT*/ }
	  <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
	    
	    <p>The next generation of web users are tech-savvy and suspicious. They know how to use dev tools, they can detect a phishing scam from a mile away, and they certainly aren’t accepting any checks from Western Union.</p>

            <p>At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.</p>

	  </div>
	  <Button href="#" className="mt-10 w-full sm:hidden">
	    Register
	  </Button>
	</div>
      </Container>
    </div>
  )
}
