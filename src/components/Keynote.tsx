import Image from "next/image";

export default function Keynote() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6">
      <p className="text-base/7 font-semibold text-amber-600">
        Keynote Speaker
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        Dave Lopez
      </h1>
      <figure className="flex flex-col items-center gap-8 py-8 sm:flex-row">
        <Image
          alt="Dave Lopez"
          src="/dave-lopez.webp"
          width={653}
          height={979}
          className="max-w-sm rounded-xl"
        />
        <figcaption className="text-lg text-gray-600 sm:text-xl/8">
          Dave Lopez covered every major story in L.A. and Orange County for 48
          years and was a regular news reporter on KCBS Channel 2. He is author
          of{" "}
          <a href="https://a.co/d/3OEc41f" className="underline">
            <cite>
              It’s a Great Life If You Don’t Weaken: Family, Faith and 48 Years
              on Television
            </cite>
          </a>
          . Some of his stories include William Bonin, the Freeway Killer, who
          confessed to him in jail, and the mid-air plane crash over Cerritos
          that killed 82, O.J. Simpson murder trial, and the L.A. riots.
        </figcaption>
      </figure>
    </section>
  );
}
