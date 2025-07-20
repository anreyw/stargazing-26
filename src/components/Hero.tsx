import CallToAction from '@/components/CallToAction'
import Image from 'next/image'
import HeroImage from '@/images/stargazing-hero-image.jpg'
import HandRaisedImage from '@/images/hand-raised.jpg'

export default function Hero() {
  return (
    <>
      <Image
	aria-hidden="true"
	src={HeroImage}
	alt="A person's silhouette against a star-filled night sky."
      />
      <div className="relative isolate overflow-hidden bg-linear-to-b from-violet-100/20">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-violet-600/10 ring-violet-50 sm:-mr-80 lg:-mr-96"
        />

	<div className="text-amber-600 font-semibold mx-auto items-center gap-4 px-4 pt-12 md:hidden">
          <p className="text-center">
            <time dateTime="2026-02-13">February 13</time>-
            <time dateTime="2026-02-15">15, 2026</time> &bull; Long Beach, CA
          </p>
          <p></p>
	</div>

	
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
																	       Sta<span className="text-amber-600">RG</span>azing 2026
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 space-y-4">
              <p className="text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
											  Join fellow brilliant minds for the annual <span className="font-bold">Greater Los Angeles Area Mensa <span className="text-amber-600">Regional Gathering</span></span> during our traditional Presidents’ Day weekend, Friday, February 13th to Sunday, February 15th, 2026, in lovely Long Beach, CA.
              </p>		    
	      <p className="text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Register now and enjoy:</p>
	      <ul role="list" className="text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 pl-8 list-disc marker:text-amber-600 space-y-2">
		<li>thought-provoking speakers</li>
		<li>thrilling games</li>
		<li>top-tier entertainment</li>
		<li>a dedicated Kids Track</li>
	      </ul>
	      <p className="text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
											  All meals included!
	      </p>
              <div className="mt-10 flex items-center gap-x-6">
                <CallToAction />
		<p className="text-sm lg:text-base"><em>Lock in early bird rates now!</em></p>
              </div>
            </div>
            <Image
              alt="A silhouette of an audience with one raised hand with."
              src={HandRaisedImage}
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
	    <p className="text-xs text-gray-400 pt-24">Photo of man raising hand by <a href="https://unsplash.com/@priscilladupreez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Priscilla Du Preez</a> on <a href="https://unsplash.com/photos/group-of-people-k3RZK--S-kk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
	    </p>
      
	  </div>
	  
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </>
  )
}
