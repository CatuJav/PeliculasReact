import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowResponse } from '../interfaces/movieInterface';


export const useMovies = () => {

    const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([]);
    const [peliculasPopulares, setpeliculasPopulares] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const getMovies=async()=>{
         /**Se pone el tipo de respuesta que puedo recibir */
        const respNowPlaying=  await movieDB.get<MovieDBNowResponse>('/now_playing')
        const respPopular=  await movieDB.get<MovieDBNowResponse>('/popular')

        //const peliculas= respNowPlaying.data.results;
        setpeliculasEnCine(respNowPlaying.data.results);
        setpeliculasPopulares(respPopular.data.results);
        console.log(peliculasPopulares)
        setIsLoading(false);
    }

    useEffect(() => {
       /**now_playing */
        getMovies();
    }, [])

    return {
        peliculasEnCine,
        peliculasPopulares,
        isLoading
    }
}
