import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Registration() {
  return (    
    <div className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-amber-600">StaRGazing 2026</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Registration
        </h1>
        <p className="mt-6 text-xl/8">
					To register for the 2026 StaRGazing Regional Gathering, please download and complete the registration form below.  Once completed, send it by email to <a href="mailto:GlaamRegistrar@outlook.com" className="underline text-amber-700">GlaamRegistrar@outlook.com</a> or mail it to:
        </p>
	<p className="mt-6 pl-6 text-lg/8">
          Susan Barr, Registrar<br />
				       4207 W. 177th Street<br />
								   Torrance, CA. 90504
	</p>
        <div className="mt-10 max-w-2xl text-gray-600">
	  <a
            href="#"
            className="rounded-md bg-amber-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
	    download
            >
              Download Form
          </a>
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Payment
          </h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                "Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                tristique."
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-6 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
        <figure className="mt-16">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        
      </div>
    </div>
  )
}
