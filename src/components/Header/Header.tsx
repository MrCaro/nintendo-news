import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import heroImg from '../../img/header-banner.jpg'
import nintendoLogo from '../../img/nintendo-main-logo.svg'
import nintendoCoin from '../../img/coin.webp'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'News', href: '#news' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function Header() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Nintendo</span>
                      <img
                        className="h-16 w-auto sm:h-20"
                        src={nintendoLogo}
                        alt="Nintendo Landing Page"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-nintendoRed-500 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nintendoRed-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="relative z-10 group font-medium text-gray-500 hover:text-gray-900 transition-colors ease-in-out delay-75"
                    >
                      {item.name}
                      <img
                        className="group-hover:opacity-100 group-hover:translate-y-full mt-2 opacity-0 absolute inset-0 transition-all ease-in-out delay-75 duration-200 h-5 w-auto m-auto z-[-1]"
                        src={nintendoCoin}
                        alt=""
                      />
                    </a>
                  ))}
                  <a
                    href="#"
                    className="font-medium text-nintendoRed-500 hover:text-nintendoRed-600 transition-colors ease-in-out delay-75"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-16"
                        src={nintendoLogo}
                        alt="Nintendo Landing Page"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-nintendoRed-500 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nintendoRed-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-nintendoRed-500 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl !leading-tight">
                <span className="block xl:inline">Welcome to the World</span>{' '}
                <span className="block text-nintendoRed-500 xl:inline">
                  of Nintendo
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                An API showing all the latest Nintendo news from popular news
                channels.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#about"
                    className="flex w-full items-center justify-center rounded-md border-2 border-transparent bg-nintendoRed-500 px-8 py-3 text-base font-medium text-white hover:bg-nintendoRed-600 md:py-4 md:px-10 md:text-lg transition-colors ease-in-out delay-75"
                  >
                    Get your Switch
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#news"
                    className="flex w-full items-center justify-center rounded-md border-2 border-nintendoOrange-500 px-8 py-3 text-base font-medium text-nintendoOrange-500 hover:text-white hover:bg-nintendoOrange-500 md:py-4 md:px-10 md:text-lg transition-colors ease-in-out delay-75"
                  >
                    Latest news
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={heroImg}
          alt=""
        />
      </div>
    </div>
  )
}

export default Header
