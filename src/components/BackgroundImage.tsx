import Image from 'next/image'
import clsx from 'clsx'

import backgroundImage from '@/images/background.jpg'

export function BackgroundImage({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div>
      <Image
	src={backgroundImage}
	width={918}
	height={1495}
	alt=""
      />
    </div>
  )
}
