export default function Registration() {
  return (    
    <div className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-amber-600">StaRGazing 2026</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Registration
        </h1>
        <p className="mt-6 text-xl/8">
					To register for the 2026 StaRGazing Regional Gathering, please download and complete the registration form below:
        </p>
	<div className="mt-6">
	  <a
            href="/stargazing-2026-registration-form.pdf"
            className="rounded-md bg-amber-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
	    download
          >
             Download Form
          </a>
	</div>
	<p className="mt-6 text-xl/8">
	  Once completed, please mail it with check payment to:
	</p>
	<p className="mt-6 pl-6 text-xl/8 font-semibold">
          Susan Barr, Registrar<br />
				       4207 W. 177th Street<br />
								   Torrance, CA. 90504
	</p>
	<p className="mt-6 text-xl/8">					
					Make checks payable to &quot;GLAAM&quot; or &quot;Greater Los Angeles Area Mensa&quot;.
        </p>
	<p className="mt-6 text-lg/8 text-gray-500">
						      Alternatively, you may instead email the registration form to <a href="mailto:GlaamRegistrar@outlook.com" className="underline text-amber-700">GlaamRegistrar@outlook.com</a> and send the check separately by mail or pay online.  Online payment options will be available in August 2025.
	</p>
	                
      </div>
    </div>
  )
}
