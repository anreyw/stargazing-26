import Image from "next/image";

export default function Keynote() {
  return (
    <section className="bg-white px-6">
      <p className="text-base/7 font-semibold text-amber-600">
        Keynote Speaker
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        Dave Lopez
      </h1>
      <figure>
        <Image
          alt="Dave Lopez"
          src="/dave-lopez.webp"
          width={653}
          height={979}
          className="rounded-xl"
        />
      </figure>
    </section>
  );
}
