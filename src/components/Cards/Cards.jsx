import { useEffect, useState } from 'react'
import NintendoNews from '../../api/nintendo'

function Cards() {
  const [apiResponse, setApiResponse] = useState('')

  useEffect(() => {
    ;(async () => {
      const news = await NintendoNews.get()
      setApiResponse(news)
    })()
  }, [])

  return (
    <div className="container mx-auto px-4 pb-24">
      {!apiResponse ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {apiResponse.articles.map((article, i) => (
            <li key={`news-${i}`} className="relative">
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-grape-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={article.imgSrc}
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">Read more</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-xl font-medium text-gray-900">
                {article.title}
              </p>
              <p className="pointer-events-none mt-2 text-left block text-sm font-medium text-gray-500">
                Source: {article.source}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit mt-4 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cards
