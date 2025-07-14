import Image from 'next/image'
import HeroImage from '@/images/stargazing-hero-image.jpg'

export default function Hero() {
  return (
    <Image
      aria-hidden="true"
      src={HeroImage}
      alt="A person's silhouette against a star-filled night sky."
    />      
  )
}
