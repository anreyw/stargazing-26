import Image from 'next/image'
import GoldenSailsWide from '@/images/golden-sails-wide.jpg'
import GoldenSailsDouble from '@/images/golden-sails-double.jpg'
import GoldenSailsPool from '@/images/golden-sails-pool.jpg'
import GoldenSailsOutdoors from '@/images/golden-sails-outdoors.jpg'

export default function Venue() {
  return (

    <>
      <Image
	alt=""
	src={GoldenSailsWide}
	className="w-screen"
      />
    
      <div className="overflow-hidden bg-white py-12 sm:py-24">      
      
	<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

	  {/* VENUE PAGE HEADER */}
	  <div className="max-w-4xl">
            <p className="text-base/7 font-semibold text-amber-800">Venue</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
													       The beautiful Golden Sails Hotel
            </h1>
            <p className="mt-6 text-xl/8 text-balance text-gray-700">
								       Located on Belmont Shore in Long Beach, CA, <a href="https://www.goldensailshotel.com/" className="underline hover:decoration-amber-800 text-amber-800 hover:bg-amber-100">Golden Sails Hotel</a> has been StaRGazing&apos;s home for the last several years and will again be our venue for 2026!
            </p>
          </div>

	
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">Rooms now open for reservation!</h2>
              <p className="mt-6 text-base/7 text-gray-600">
							      Ask for the MENSA block, expected to be on the 4th floor, or a poolside room, while they last! No increase from last year’s room price,  guaranteed Thursday through Sunday night, 2/12 - 2/16! 
              </p>
	      <p className="mt-6 text-xl/7 font-semibold text-amber-800">
									   $140.00  per night, excluding tax!
	      </p>
            </div>

	    {/* IMAGES */}
	  
	    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
		<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt=""
                    src={GoldenSailsDouble}
                    className="block size-full object-cover"
                  />
		</div>
		<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <Image
                    alt=""    
                    src={GoldenSailsPool}
                    className="block size-full object-cover"
                  />
		</div>
		<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt=""
                    src={GoldenSailsOutdoors}
                    className="block size-full object-cover"
                  />
		</div>
		<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
		</div>
              </div>
            </div>

	    {/* HOTEL CONTACT INFO */}
	  
	    <div className="max-lg:mt-16 lg:col-span-1">
              <p className="text-base/7 font-semibold text-gray-500">Golden Sails Hotel Contact Info</p>
              <hr className="mt-6 border-t border-gray-200" />
	    
	      <dl className="mt-6 flex flex-col gap-4">
		<div>
		  <dt className="text-gray-600">Business Hours</dt>
		  <dd className="text-lg">Monday-Friday 9am - 5pm</dd>
		</div>
		<div>
		  <dt className="text-gray-600">Phone</dt>
		  <dd className="text-lg"><a href="tel:+15625961631" className="underline">(562) 596-1631</a> ext. 504/505</dd>
		</div>
		<div>
		  <dt className="text-gray-600">Email</dt>
		  <dd className="text-lg underline"><a href="mailto:dos@goldensailshotel.com">dos@goldensailshotel.com</a></dd>
		</div>
		<div>
		  <dt className="text-gray-600">Address</dt>
		  <dd  className="text-lg">6285 E. Pacific Coast Hwy<br />Long Beach, CA 90803</dd>
		</div>	      
	      </dl>  
            </div>

	  
          </section>
	</div>
      </div>
    </>
  )
}
