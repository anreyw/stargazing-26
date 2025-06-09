'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'

import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'

const days = [
  {
    name: 'Opening Day',
    date: 'April 4',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: stevenMchailImage,
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX Design at InGen',
        image: jaquelinIschImage,
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager at Initech',
        image: dianneGuilianelliImage,
      },
      {
        name: 'Ronni Cantadore',
        role: 'Design Engineer at Weyland-Yutani',
        image: ronniCantadoreImage,
      },
      {
        name: 'Erhart Cockrin',
        role: 'Product Lead at Cyberdyne Systems',
        image: erhartCockrinImage,
      },
      {
        name: 'Parker Johnson',
        role: 'UI Designer at MomCorp',
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: 'Speakers & Workshops',
    date: 'April 5',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: damarisKimuraImage,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: ibrahimFraschImage,
      },
      {
        name: 'Cathlene Burrage',
        role: 'Frontend Developer at Buy n Large',
        image: cathleneBurrageImage,
      },
      {
        name: 'Rinaldo Beynon',
        role: 'Data Scientist at Rekall',
        image: rinaldoBeynonImage,
      },
      {
        name: 'Waylon Hyden',
        role: 'DevOps at RDA Corporation',
        image: waylonHydenImage,
      },
      {
        name: 'Giordano Sagucio',
        role: 'Game Developer at Soylent Corp',
        image: giordanoSagucioImage,
      },
    ],
  },
  {
    name: 'Interviews',
    date: 'April 6',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
        image: andrewGreeneImage,
      },
      {
        name: 'Heather Terry',
        role: 'Backend Developer at Xanatos Enterprises',
        image: heatherTerryImage,
      },
      {
        name: 'Piers Wilkins',
        role: 'Full stack Developer at BiffCo',
        image: piersWilkinsImage,
      },
      {
        name: 'Gordon Sanderson',
        role: 'Mobile Developer at Cobra Industries',
        image: gordonSandersonImage,
      },
      {
        name: 'Kimberly Parsons',
        role: 'Game Developer at Tyrell Corporation',
        image: kimberlyParsonsImage,
      },
      {
        name: 'Richard Astley',
        role: 'CEO at Roll Out',
        image: richardAstley,
      },
    ],
  },
]

// ? Include ImageClipPaths function here ? 

export function Speakers() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  
  // This useEffect hook sets tabOrientation state based on the
  // screen width.  It uses a JS Web API to query the window size
  // using CSS media query syntax.
  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    // This function takes an object that is destructured and must
    // have a `matches` property that is a boolean.  This strictly
    // types for the MediaQueryList object that window.matchMedia
    // returns above.
    function onMediaQueryChange({ matches }: { matches: boolean}) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    // Sync tabOrientation once on mount
    onMediaQueryChange(lgMediaQuery)

    // Sync continuously as the screen resizes
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    // Cleanup function
    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])
  
  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >

      {/*SECTION HEADING*/}
      <Container>
	<div className="mx-auto max-w-2xl lg:mx-0">
	  <h2
	    id="speakers-title" // for section ARIA label
	    className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
	  >Speakers</h2>
	  <p
	    className="mt-4 font-display text-2xl tracking-tight text-blue-900"
	  >Learn from the experts on the cutting-edge of deception at the most sinister companies.</p>
	</div>
	
	{/*TAB LIST OF SPEAKERS*/}
	<TabGroup
	  className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
	  vertical={tabOrientation === 'vertical'}
	>
	  
	  {/* TAB LIST*/}
	  <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">

	    {/* DECORATIVE LINE */}
	    <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-200 lg:block" />
	    	    
	    <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
	      
	      {({ selectedIndex }) => (
		<>
		  {days.map((day, dayIndex) => (
		    <div key={day.dateTime} className="relative lg:pl-8">

		      <DiamondIcon
			className={clsx(
			  'absolute top-2.25 left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
			  dayIndex === selectedIndex
			    ? 'fill-blue-600 stroke-blue-600'
			    : 'fill-transparent stroke-slate-400',
			)}
		      />

		      <div className="relative">
			<div
			  className={clsx(
			    'font-mono text-sm',
			    dayIndex === selectedIndex
			      ? 'text-blue-600'
			      : 'text-slate-500',
			  )}
			>

			  <Tab className="data-selected:not-data-focus:outline-hidden">
			    <span className="absolute inset-0" />
			    {day.name}
			  </Tab>

			</div>

			<time
			  dateTime={day.dateTime}
			  className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
			>
			  {day.date}
			</time>
			
		      </div>

		    </div>
		  ))}
		</>		
	      )}
	      
	    </TabList>	    
	  </div>

	  {/* TAB PANELS */}
	  <TabPanels className="lg:col-span-3">
	    {days.map((day) => (
	      <TabPanel
		key={day.dateTime}
		className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
		unmount={false}
	      >
		{day.speakers.map((speaker, speakerIndex) => (
		  <div key={speakerIndex}>
		    <div className="group relative h-70 transform overflow-hidden rounded-4xl">
		      <div
			className={clsx(
			  'absolute top-0 right-4 bottom-6 left-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
			  [
			    'border-blue-300',
			    'border-indigo-300',
			    'border-sky-300',
			  ][speakerIndex % 3],
			)}
		      >
		      </div>

		      <div
			className="absolute inset-0 bg-indigo-50"	  
		      >
			<Image
			  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
			  src={speaker.image}
			  alt=""
			  priority
			  sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
			/>
		      </div>

		    </div>
		    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
		      {speaker.name}
		    </h3>
		    <p className="mt-1 text-base tracking-tight text-slate-500">
		      {speaker.role}
		    </p>

		  </div>
		))}
	      </TabPanel>
	    ))}
	  </TabPanels>
	</TabGroup>
      </Container>
    </section>
  )
}
