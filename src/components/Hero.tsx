import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
	<div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
	  <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
	    <span className="sr-only">DeceptiConf - </span>A design conference for the dark side.
	  </h1>
	</div>
      </Container>
    </div>
  )
}
