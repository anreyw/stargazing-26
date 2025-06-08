'use client'

import { useEffect, useId, useState } from 'react'
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
  let id = useId()
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
	<TabGroup
	  className=""
	  vertical={tabOrientation === 'vertical'}
	>
	  <div className="relative">

	    {/* DECORATIVE LINE */}
	    <div className="" />
	    
	    {/* TAB LIST*/}
	    <TabList className="grid">
	      
	      {({ selectedIndex }) => (
		<>
		  {days.map((day, dayIndex) => (
		    <div key={day.dateTime} className="relative lg:pl-8">

		      <DiamondIcon
			className={clsx(
			  'absolute top-2.25 left-[-0.5px] hidden h-1.5 w-1.5 -verflow-visible lg:block',
			)}
			
		      />

		      <div className="relative">
			<div>

			  <Tab>
			    <span />
			    {day.name}
			  </Tab>

			</div>

			<time
			>
			  {day.date}
			</time>
			
		      </div>

		    </div>
		  ))}
		</>		
	      )}
	      
	    </TabList>

	    {/* TAB PANELS */}
	    <TabPanels>
	      
	    </TabPanels>
	  </div>
	</TabGroup>
      </Container>
    </section>
  )
}
