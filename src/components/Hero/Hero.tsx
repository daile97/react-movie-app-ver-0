import { useEffect, useState } from "react"
import { apiConfig, BACKDROP_BASE_URL, POSTER_BASE_URL } from "../../api/apiConfig"
import { fetchMovie } from "../../api/axiosConfig"
import { Banner } from "./Banner"
import { Overview } from "./Overview"

interface Movie {
  id: string,
  backdrop_path?: string,
  poster_path?: string,
  title: string,
  overview: string,
  video?: boolean
}

export const Hero = () => {
  const [movie, setMovie] = useState<Movie>()
  useEffect(() => {
    const getMovie = async () => {
      try {
        const moviesList = await fetchMovie.getPopular(apiConfig.popular.url, apiConfig.popular.config)
          .then(res => res.data)
          .then(data => data.results)
        const randomIndex = Math.floor(Math.random() * moviesList.length)
        setMovie(moviesList[randomIndex])
      } catch (err) {
        console.log(err)
      }
    }
    getMovie()
  }, [])
  return (
    <div className="w-screen relative h-[75vh]">
      {movie
        ? (
          <>
            <Banner url={`${movie.backdrop_path ? (BACKDROP_BASE_URL + movie.backdrop_path) : (POSTER_BASE_URL + movie.poster_path)}`} />
            <Overview
              title={movie.title}
              overview={movie.overview}
              video={movie.video}
            />
          </>
        )

        : null
      }
    </div>
  )
}
