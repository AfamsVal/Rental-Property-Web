import Image from "next/image";
import property1 from "@/assets/images/a1.jpg";
import property2 from "@/assets/images/a1.jpg";
import property3 from "@/assets/images/a1.jpg";
import connectDB from "@/config/db";

const Home = async () => {
  console.log(process.env.MONGO_URI);
  await connectDB();
  return (
    <main className="">
      <section className="bg-gray-800 poster relative text-gray-300">
        <div className="container mx-auto pb-24 pt-32 px-4">
          <div className="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
            <div className="px-4 w-full md:w-9/12 xl:w-7/12 2xl:w-6/12">
              <p className="font-bold font-sans mb-1 text-2xl text-white">
                Car Rentals
              </p>
              <h1 className="font-bold mb-6 text-5xl text-white md:leading-tight lg:leading-tight lg:text-6xl">
                For Your
                <span className="text-primary-500">Everyday Commute</span> or
                <span className="text-primary-500">Leisure</span>
              </h1>
              <div className="bg-white p-6">
                <h2 className="font-bold mb-2 text-gray-900 text-xl">
                  Let&apos;s find your ideal car
                </h2>
                <form>
                  <div className="-mx-2 flex flex-wrap items-center">
                    <div className="p-1 w-full sm:flex-1">
                      <input
                        className="appearance-none border px-5 py-2 text-gray-600 w-full"
                        type="email"
                        required
                        placeholder="Enter your pick up location..."
                      />
                    </div>
                    <div className="p-1 w-full sm:w-4/12">
                      <input
                        className="appearance-none border px-5 py-2 text-gray-600 w-full"
                        type="date"
                        required
                      />
                    </div>
                    <div className="p-1 text-right w-full sm:flex-initial sm:w-auto">
                      <a
                        href="#"
                        className="bg-gray-800 hover:bg-gray-600 inline-block px-6 py-2 text-center text-white"
                      >
                        <span>Search</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-12">
          <div className="flex flex-wrap items-center">
            <div className="py-4 w-full lg:w-6/12">
              <Image
                className="h-full w-full object-cover"
                src={property3}
                alt="Property one"
                priority={true}
              />
            </div>
            <div className="py-4 w-full lg:w-6/12">
              <div className="bg-white lg:-ml-12 lg:pl-12 lg:py-12">
                <h2 className="mb-2 text-primary-500 text-xl">
                  Rental Cars &amp; Much More
                </h2>
                <h3 className="capitalize font-bold mb-4 text-4xl text-gray-900 xl:text-5xl">
                  Experience a Rental service like never before
                </h3>
                <div className="bg-primary-500 mb-6 pb-1 w-2/12"></div>
                <p className="mb-6">
                  Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices
                  sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc
                  ultrices sit amet. Curabitur ac sagittis neque, vel egestas
                  est.
                </p>
                <a
                  href="#"
                  className="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 text-white"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="py-4 w-full lg:w-4/12 xl:mr-auto xl:w-3/12">
              <h4 className="capitalize font-bold mb-2 text-3xl text-gray-900">
                Our Service is Built With Trusr
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="py-4 w-full lg:w-8/12">
              <div className="-mx-4 flex flex-wrap">
                <div className="p-4 w-full md:w-4/12">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 65 65"
                      xmlSpace="preserve"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      stroke="currentColor"
                      width="5rem"
                      height="5rem"
                      className="h-20 mb-3 text-primary-500 w-20"
                    >
                      <path
                        d="M13 50v-1.849a2.73 2.73 0 0 0-.741-1.87l-4.038-4.293A4.499 4.499 0 0 1 7 38.907V21.998A2.998 2.998 0 0 1 9.998 19h.004A2.999 2.999 0 0 1 13 21.998V27m38 23v-1.849c0-.695.265-1.364.741-1.87l4.038-4.293A4.499 4.499 0 0 0 57 38.907V21.998A2.998 2.998 0 0 0 54.002 19h-.004A2.999 2.999 0 0 0 51 21.998V27M29 56.379v-4.933c0-.383-.152-.751-.424-1.022A1.442 1.442 0 0 0 27.554 50H13.446c-.383 0-.751.152-1.022.424A1.442 1.442 0 0 0 12 51.446v4.933m23 0v-4.933c0-.383.152-.751.424-1.022A1.442 1.442 0 0 1 36.446 50h14.108c.383 0 .751.152 1.022.424.272.271.424.639.424 1.022v4.933"
                        fill="none"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M28 50v-5.491c0-2.439-1-4.771-2.767-6.453l-7.49-7.13a2.71 2.71 0 0 0-3.785.047l-.002.002a2.767 2.767 0 0 0 0 3.912l4.527 4.527M36 50v-5.491c0-2.439 1-4.771 2.767-6.453l7.49-7.13a2.71 2.71 0 0 1 3.785.047l.002.002a2.767 2.767 0 0 1 0 3.912l-4.527 4.527M22.25 16.464a1.499 1.499 0 0 1 1.5-1.5h3.75a1.5 1.5 0 0 0 1.5-1.5V9.5A1.5 1.5 0 0 1 30.5 8h3A1.5 1.5 0 0 1 35 9.5v3.964a1.5 1.5 0 0 0 1.5 1.5h3.75a1.5 1.5 0 0 1 1.5 1.5V19.5a1.503 1.503 0 0 1-1.5 1.5H36.5a1.503 1.503 0 0 0-1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-4a1.503 1.503 0 0 0-1.5-1.5h-3.75a1.503 1.503 0 0 1-1.5-1.5v-3.036z"
                        fill="none"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <h4 className="font-bold text-gray-900 text-xl">
                      Insured &amp; Safe
                    </h4>
                  </div>
                </div>
                <div className="p-4 w-full md:w-4/12">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 65 65"
                      xmlSpace="preserve"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      stroke="currentColor"
                      width="5rem"
                      height="5rem"
                      className="h-20 mb-3 text-primary-500 w-20"
                    >
                      <path
                        d="M49.972 21.334c.003-2.264.011-4.339.028-5.976a2.574 2.574 0 0 0-1.082-2.109 2.596 2.596 0 0 0-2.344-.351m-.249.334-.002.001m-16.987-.534a17.589 17.589 0 0 1-11.907.2l-.003-.001A2.596 2.596 0 0 0 14 15.358v18.717m17.455 18.167 11.83-6.799"
                        fill="none"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M54 14.908a6.172 6.172 0 0 0-8.146-5.848l-.002.001a14.905 14.905 0 0 1-9.999-.166l-2.623-.984a3.507 3.507 0 0 0-2.46 0l-2.623.984a14.905 14.905 0 0 1-9.999.166l-.002-.001A6.172 6.172 0 0 0 10 14.908V34.14a17.257 17.257 0 0 0 8.263 14.728l11.35 6.93a3.504 3.504 0 0 0 3.573.048l12.156-6.986A17.256 17.256 0 0 0 54 33.898v-18.99z"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="butt"
                      ></path>
                      <circle
                        cx="32"
                        cy="26"
                        r="5"
                        fill="none"
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="M21.169 40.5C23.64 36.554 27.574 34 32 34c4.426 0 8.36 2.554 10.831 6.5"
                        fill="none"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <h4 className="font-bold text-gray-900 text-xl">
                      Certified Chauffeur
                    </h4>
                  </div>
                </div>
                <div className="p-4 w-full md:w-4/12">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 65 65"
                      xmlSpace="preserve"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      stroke="currentColor"
                      width="5rem"
                      height="5rem"
                      className="h-20 mb-3 text-primary-500 w-20"
                    >
                      <path
                        d="M38.028 13.749c8.148 2.342 14.116 9.856 14.116 18.753m-.479 4.315c-1.966 8.695-9.745 15.195-19.03 15.195m-4.854-.61c-8.423-2.159-14.656-9.807-14.656-18.9m.48-4.314c1.966-8.695 9.744-15.195 19.03-15.195m0 33.193v7.316m-13.1-7.9 1.674-1.674m-2.258-11.426h-7.316m7.9-13.099 1.674 1.674m11.426-9.575v7.317m11.425 2.258 1.674-1.674m7.901 13.099h-7.316M44.06 43.928l1.674 1.674"
                        fill="none"
                        strokeWidth="2"
                      ></path>
                      <circle
                        cx="32.635"
                        cy="32.502"
                        r="26"
                        fill="none"
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="M37.039 34.711a2.369 2.369 0 0 1 1.652 2.01l.214 2a2.177 2.177 0 0 1-2.167 2.412h-.001c-5.92 0-10.727-4.807-10.727-10.728 0-1.799.444-3.495 1.228-4.985a2.779 2.779 0 0 1 2.365-1.44c.457-.051.973-.064 1.467-.077a1.956 1.956 0 0 1 2.004 2.038l-.17 4.093a1.522 1.522 0 0 1-.934 1.34l-1.584.66a6.562 6.562 0 0 0 2.251 3.485l1.456-1.725 2.946.917z"
                        fill="none"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <h4 className="font-bold text-gray-900 text-xl">
                      24/7 Support
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center mb-6">
            <div className="px-4 w-full md:w-10/12">
              <h2 className="font-medium mb-1 text-primary-500 text-xl">
                Our Top Cars
              </h2>
              <h3 className="capitalize font-bold mb-4 text-4xl text-gray-900">
                Cars for all your needs
              </h3>
              <div className="bg-primary-500 mb-6 pb-1 w-2/12"></div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap justify-center mb-12">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <div key={i} className="p-3 w-full md:w-6/12 lg:w-4/12">
                <div className="bg-white border shadow-md text-gray-500">
                  <a href="#">
                    <Image
                      className="h-full w-full object-cover"
                      src={property1}
                      alt="Property one"
                    />
                  </a>
                  <div className="p-6">
                    <h4 className="font-bold mb-2 text-gray-900 text-xl">
                      <a href="#" className="hover:text-gray-500">
                        BMW M3 2010
                      </a>
                    </h4>
                    <p className="mb-2 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <hr className="border-gray-200 my-4" />
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center py-1 space-x-1">
                        <span>4.9</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="1.125em"
                          height="1.125em"
                          className="text-primary-500"
                        >
                          <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path>
                          </g>
                        </svg>
                        <span>(546 reviews)</span>
                      </div>
                      <p className="font-bold text-gray-900">$45/day</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#"
              className="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 text-white"
            >
              View All Cars
            </a>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center mb-6">
            <div className="px-4 w-full md:flex-1">
              <h2 className="font-medium mb-1 text-primary-500 text-xl">
                Our Fleet
              </h2>
              <h3 className="capitalize font-bold mb-4 text-4xl text-gray-900">
                Browse by Category
              </h3>
              <div className="bg-primary-500 mb-6 pb-1 w-2/12"></div>
            </div>
            <div className="px-4 w-full md:w-auto">
              <a
                href="#"
                className="bg-primary-500 hover:bg-primary-600 inline-block px-6 py-2 text-white"
              >
                View All
              </a>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap justify-center">
            <div className="p-3 w-full md:w-6/12 lg:w-3/12">
              <a
                href="#"
                className="bg-white block border group hover:text-gray-500 shadow-md text-gray-900"
              >
                <Image
                  className="h-full w-full object-cover"
                  src={property2}
                  alt="Property one"
                />
                <div className="px-6 py-4">
                  <h4 className="font-bold text-xl">Sedans</h4>
                </div>
              </a>
            </div>
            <div className="p-3 w-full md:w-6/12 lg:w-3/12">
              <a
                href="#"
                className="bg-white block border group hover:text-gray-500 shadow-md text-gray-900"
              >
                <Image
                  className="h-full w-full object-cover"
                  src={property1}
                  alt="Property one"
                />
                <div className="px-6 py-4">
                  <h4 className="font-bold text-xl">SUVs</h4>
                </div>
              </a>
            </div>
            <div className="p-3 w-full md:w-6/12 lg:w-3/12">
              <a
                href="#"
                className="bg-white block border group hover:text-gray-500 shadow-md text-gray-900"
              >
                <Image
                  className="h-full w-full object-cover"
                  src={property1}
                  alt="Property one"
                />
                <div className="px-6 py-4">
                  <h4 className="font-bold text-xl">Convertibles</h4>
                </div>
              </a>
            </div>
            <div className="p-3 w-full md:w-6/12 lg:w-3/12">
              <a
                href="#"
                className="bg-white block border group hover:text-gray-500 shadow-md text-gray-900"
              >
                <Image
                  className="h-full w-full object-cover"
                  src={property1}
                  alt="Property one"
                />
                <div className="px-6 py-4">
                  <h4 className="font-bold text-xl">Sports Cars</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 bg-opacity-95 py-24 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center mb-6">
            <div className="px-4 w-full md:w-10/12">
              <h2 className="font-medium mb-1 text-primary-500 text-xl">
                Testimonials
              </h2>
              <h3 className="capitalize font-bold mb-4 text-4xl text-white">
                What Our Customers Say About Us
              </h3>
              <div className="bg-primary-500 mb-6 pb-1 w-2/12"></div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="p-4 w-full lg:w-4/12">
              <Image
                className="h-full w-full object-cover"
                src={property1}
                alt="Property one"
              />
            </div>
            <div className="p-4 w-full lg:w-8/12">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-16 inline-block mb-4 text-primary-500 w-16"
              >
                <path d="M23 1V5.06504C21.9136 5.67931 21.0807 6.43812 20.5012 7.34146C19.958 8.24481 19.5416 9.20235 19.2519 10.2141C18.9621 11.2258 18.8173 12.346 18.8173 13.5745H23V22.4634H14.0914V16.935C14.0914 13.6107 14.3992 11.0813 15.0148 9.34688C15.6667 7.61246 16.6444 6.02258 17.9481 4.57723C19.2519 3.09575 20.9358 1.90334 23 1ZM9.90864 1V5.06504C8.82222 5.67931 7.9893 6.43812 7.40988 7.34146C6.83045 8.24481 6.39588 9.20235 6.10617 10.2141C5.81646 11.2258 5.67161 12.346 5.67161 13.5745H9.90864V22.4634H1V16.935C1 13.6107 1.30782 11.0813 1.92346 9.34688C2.57531 7.61246 3.55309 6.02258 4.85679 4.57723C6.16049 3.09575 7.84444 1.90334 9.90864 1Z"></path>
              </svg>
              <p className="font-light mb-5 text-xl">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </p>
              <h4 className="font-bold mb-1 text-2xl text-primary-500">
                Kathryn Murphy
              </h4>
              <p className="text-white">Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-orange-500 py-16 text-center text-gray-300">
        <div className="container mx-auto px-4 relative">
          <h2 className="capitalize font-bold mb-6 text-4xl text-white">
            Download Our App &amp; Get Started
          </h2>
          <div className="flex-wrap inline-flex items-center py-1 space-x-2">
            <a
              href="#"
              className="border border-white hover:bg-white hover:inline-flex hover:items-center hover:space-x-2 hover:text-gray-900 inline-flex items-center px-6 py-2 space-x-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                fill="currentColor"
                className="me-1"
              >
                <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"></path>
              </svg>
              <span>App Store</span>
            </a>
            <a
              href="#"
              className="border border-white hover:bg-white hover:inline-flex hover:items-center hover:space-x-2 hover:text-gray-900 inline-flex items-center px-6 py-2 space-x-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                fill="currentColor"
                className="me-1"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"></path>
              </svg>
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
