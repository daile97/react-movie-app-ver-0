
export const API_KEY = import.meta.env.VITE_API_KEY
export const MOVIE_BASE_URL = 'https://api.themoviedb.org/3'
export const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280'
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w780'

export const apiConfig = {
  popular: {
    url: '/movie/popular',
    config: {
      params: {
        api_key: API_KEY
      }
    }
  }
}
