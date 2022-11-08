import { FC, useRef, useState } from 'react'
import DynamicHeroIcon from '../DynamicHeroIcon'

interface Banners {
  calloutIcon: string
  description?: string
  cta: {
    url?: string
    title?: string
  }
  closeIcon: string
}

const Banner: FC<Banners> = ({ calloutIcon, description, cta, closeIcon }) => {
  const [openBanner, setOpenBanner] = useState(true)

  const bannerRef = useRef()
  return (
    <div
      // @ts-ignore
      ref={bannerRef}
      className={openBanner ? 'bg-nintendoRed-600 sticky top-0 z-20' : 'hidden'}
    >
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-red-900 p-2">
              <DynamicHeroIcon icon={calloutIcon} />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="">{description}</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href={cta.url}
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-nintendoRed-600 shadow-sm hover:bg-red-50"
            >
              {cta.title}
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={() => setOpenBanner(!openBanner)}
            >
              <span className="sr-only">Dismiss</span>
              <DynamicHeroIcon icon={closeIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
