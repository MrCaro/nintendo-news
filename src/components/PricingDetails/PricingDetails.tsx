import { CheckCircleIcon } from '@heroicons/react/20/solid'
import consoleSwicthImg from '../../img/switch-pricing.png'

function PricingDetails() {
  const includedFeatures = [
    '7-inch OLED screen',
    'Wide adjustable stand',
    'Wired LAN port',
    '64 GB internal storage',
    'Enhanced audio',
    'Compatibility',
  ]
  return (
    <div className="bg-nintendoRed-500">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Simple no-tricks
            </h2>
            <p className="mt-4 text-xl text-white">
              If you're not satisfied, contact us within the first 14 days and
              we'll send you a full refund.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-nintendoRed-500" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Nintendo Switch - OLED Model
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  Get the gaming system that lets you play the games you want,
                  wherever you are, however you like. Bring the full home gaming
                  system experience with you to the park, on an airplane, in a
                  car, or to a friend’s apartment.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-gray-500">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                    {includedFeatures.map((feature: string) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-gray-900">
                  Pay once, own it forever
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                  <span>$349.99</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                    USD
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Learn about our membership policy
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-nintendoOrange-500 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Model number:{' '}
                    <span className="font-normal text-gray-500">(HEG-001)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img
            className="mx-auto"
            src={consoleSwicthImg}
            alt="console switch"
          />
        </div>
      </div>
    </div>
  )
}

export default PricingDetails
