import { useEffect, useState } from 'react'
import { Article } from '../types/api'
 
function NintendoAPI() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    getNintendoNews()
  })

  const nintendoAPI = 'https://nintendo-news1.p.rapidapi.com/news/ign?p=1'

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_NINTENDO_API_KEY,
      'X-RapidAPI-Host': 'nintendo-news1.p.rapidapi.com'
    }
  };
  
  const getNintendoNews = async () => {
    try {
      const response = await fetch(nintendoAPI, options);
      const jsonResponse = await response.json();
      setApiResponse(jsonResponse);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div>
        {
          !apiResponse 
          ? 
          'LOADING...' 
          : 
          <ul>
            {apiResponse.articles.map((article, index) => (
              <li key={index}>
                { article.title }
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  )

}

export default NintendoAPI