import { FC } from 'react'

interface Hero {
  id?: string
  kicker?: string
  title?: string
  description?: string
}

const HeroText: FC<Hero> = ({ id, kicker, title, description }) => {
  return (
    <div id={id} className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-lg font-bold text-nintendoRed-500">
            {kicker}
          </h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroText
