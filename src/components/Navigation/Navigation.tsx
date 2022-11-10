import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import nintendoLogo from '../../img/nintendo-main-logo.svg'
import nintendoCoin from '../../img/coin.webp'

function Navigation() {
  const navigation = [
    { name: 'About', href: '/about' },
    // { name: 'News', href: '#news' },
    // { name: 'Marketplace', href: '' },
    // { name: 'Company', href: '#' },
  ]

  return (
    <Popover>
      <div className="max-w-7xl mx-auto relative pt-6 px-6 pb-10">
        <nav
          className="relative flex items-center justify-between sm:h-10"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link to="/">
                <span className="sr-only">Nintendo</span>
                <img
                  className="h-16 w-auto sm:h-20"
                  src={nintendoLogo}
                  alt="Nintendo Landing Page"
                />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-nintendoRed-500 hover:bg-gray-100 hover:text-nintendoRed-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nintendoRed-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative z-10 group font-medium text-gray-500 hover:text-gray-900 transition-colors ease-in-out delay-75"
              >
                {item.name}
                <img
                  className="group-hover:opacity-100 group-hover:translate-y-full mt-2 opacity-0 absolute inset-0 transition-all ease-in-out delay-75 duration-200 h-5 w-auto m-auto z-[-1]"
                  src={nintendoCoin}
                  alt=""
                />
              </Link>
            ))}
            <Link
              to="#"
              className="font-medium text-nintendoRed-500 hover:text-nintendoRed-600 transition-colors ease-in-out delay-75"
            >
              Log in
            </Link>
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
  )
}

export default Navigation
