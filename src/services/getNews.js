const BASE_URL = 'https://newsapi.org/v2';
const API_KEY= '4bd28e5d0fe14c08a7579befa12cb224'
export const getNews = (searchNews, page=1) => {
   return fetch(`${BASE_URL}/everything?q=${searchNews}&page=${page}&apiKey=${API_KEY}`)
}