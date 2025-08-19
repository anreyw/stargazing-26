import { JSX } from "react";
import speakers from "./speakers";

export default function SpeakersPage(): JSX.Element {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            Meet Our Speakers
          </h1>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {speakers.map((speaker) => (
            <li key={speaker.name} className="flex flex-col gap-6 xl:flex-row">
              <img
                alt=""
                src={speaker.imageUrl}
                className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10"
              />
              <div className="flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white">
                  {speaker.name}
                </h3>
                <p className="text-base/7 text-gray-600 dark:text-gray-400">
                  {speaker.role}
                </p>
                <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
                  {speaker.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
