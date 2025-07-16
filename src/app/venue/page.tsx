import Image from 'next/image'
import GoldenSailsBG from '@/images/golden-sails-background.jpeg'

export default function Venue() {
  return (
    <Image
      aria-hidden="true"
      src={GoldenSailsBG}
      alt=""
    />
  )
}
