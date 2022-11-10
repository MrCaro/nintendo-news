import { FC } from 'react'
import { Link } from 'react-router-dom'

export interface Hero {
  heading: {
    top?: string
    bottom?: string
  }
  description?: string
  ctas: [
    cta1: {
      url: string
      title: string
      primary?: boolean
    },
    cta2: {
      url: string
      title: string
      primary: boolean
    }
  ]
  image: {
    src: string
    alt: string
  }
}

const HeroBanner: FC<Hero> = ({ heading, description, ctas }) => {
  return (
    <main className="mx-auto pt-10 max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl !leading-tight">
          <span className="block xl:inline">{heading.top}</span>{' '}
          <span className="block text-nintendoRed-500 xl:inline">
            {heading.bottom}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          {description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
          {ctas.map((cta, i) => (
            <div key={`ctaHeroImage-${i}`} className="rounded-md shadow">
              {cta.url ? (
                <Link
                  to={cta.url}
                  className={`flex w-full items-center justify-center rounded-md border-2 px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg transition-colors ease-in-out delay-75 ${
                    cta.primary
                      ? 'border-transparent bg-nintendoRed-500 text-white hover:bg-nintendoRed-600'
                      : 'border-nintendoOrange-500 text-nintendoOrange-500 hover:text-white hover:bg-nintendoOrange-500 mt-3 sm:mt-0'
                  }`}
                >
                  {cta.title}
                </Link>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default HeroBanner
