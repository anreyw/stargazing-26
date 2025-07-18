import Link from 'next/link'

export default function CallToAction() {
  return (
    <div className="flex flex-none items-center">
      <Link
	href="/register"
	className="rounded-md bg-amber-800 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
      >
	 Register Now
      </Link>
    </div>
  )
}
