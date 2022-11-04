import { FC } from 'react'
import DynamicHeroIcon from '../DynamicHeroIcon'

interface Item {
  title?: string
  description?: string
  heroicon: string
}

const Features: FC<Item> = ({ title, description, heroicon }) => {
  return (
    <>
      <div key={title} className="pt-6">
        <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
          <div className="-mt-6">
            <div>
              <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-nintendoRed-500 to-nintendoRed-600 p-3 shadow-lg">
                <DynamicHeroIcon icon={heroicon} />
              </span>
            </div>
            <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
              {title}
            </h3>
            <p className="mt-5 text-base text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
