import axios from "axios";
import { stringify } from "query-string";
import { MOVIE_BASE_URL } from "./apiConfig";

const instance = axios.create({
  baseURL: MOVIE_BASE_URL,
  paramsSerializer: (params) => stringify(params)
})

const fetcher = (url: string, config: Object) => instance.get(url, config)

export const fetchMovie = {
  getPopular: fetcher
}
