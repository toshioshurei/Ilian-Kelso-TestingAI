import { BASE_API_URL, BASE_MOVIES_SECTION_URL } from "@constants";
import { IMovie, IMovieDetailed } from "@types";
import axios from "axios";
import urlcat from "urlcat";

export function getTopMovies({pageParam  = 1}: {pageParam ?: number}) {
    const queryURL = urlcat(BASE_API_URL, `/${BASE_MOVIES_SECTION_URL}/invalid_top_rated`, {language: "en-US", page: pageParam }) // Endpoint incorrecto

    return axios
        .get(queryURL)
        .then((res) => (res.data) as {
            page: number,
            results: Array<IMovie>
        })
}



export function getSimilarMovies({id}:{id:number}) {
    const queryURL = urlcat(BASE_API_URL, `/${BASE_MOVIES_SECTION_URL}/:id/invalid_similar`, {id, language: "en-US", page: 1}) // Endpoint incorrecto

    return axios
        .get(queryURL)
        .then((res) => (res.data?.results || []) as Array<IMovie>)
}