const DOMAIN = process.env.REACT_APP_NINTENDO_API_DOMAIN

const ENDPOINTS = {
  news: 'ign?p=1',
}

async function get() {
  const url = `${DOMAIN}${ENDPOINTS.news}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_NINTENDO_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_NINTENDO_API_HOST,
    },
  }

  try {
    const response = await fetch(url, options)
    const apiResponse = await response.json()
    return await apiResponse
  } catch (err) {
    console.error(err)
  }
}

const NintendoNews = { get }
export default NintendoNews
