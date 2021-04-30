import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";


export const useMovies = () => {

    const [peliculasEnCine, setpeliculasEnCine] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const getMovies=async()=>{
         /**Se pone el tipo de respuesta que puedo recibir */
        const resp=  await movieDB.get<MovieDBNowPlaying>('/now_playing')
        const peliculas= resp.data.results;
        setpeliculasEnCine(peliculas);

        setIsLoading(false);
    }

    useEffect(() => {
       /**now_playing */
        getMovies();
    }, [])

    return {
        peliculasEnCine,
        isLoading
    }
}
