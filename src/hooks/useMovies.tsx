import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowResponse } from '../interfaces/movieInterface';

//Para hacer multiples peticiones simultaneas
interface MoviesState{
    nowPlaying:Movie[];
    popular:Movie[];
    topRated:Movie[];
    upcoming:Movie[];
}

export const useMovies = () => {

    const [movieState, setmovieState] = useState<MoviesState>(
        {
            //Inicalizo como un objeto con un arrego vacio de cada categoría
            nowPlaying:[],
            popular:[],
            topRated:[],
            upcoming:[], 
        }
    );
    
    const [isLoading, setIsLoading] = useState(true);
    const getMovies=async()=>{
         /**Se pone el tipo de respuesta que puedo recibir */
         const nowPlayingPromise= movieDB.get<MovieDBNowResponse>('/now_playing')
         const popularPromise= movieDB.get<MovieDBNowResponse>('/popular')
         const topRatedPromise= movieDB.get<MovieDBNowResponse>('/top_rated')
         const upcomingPromise= movieDB.get<MovieDBNowResponse>('/upcoming')

         //Permite hacer multiples peticiones
         const response=await Promise.all([
                                    nowPlayingPromise,
                                    popularPromise,
                                    topRatedPromise, 
                                    upcomingPromise]);
        //const peliculas= respNowPlaying.data.results;

        //Lleno las response segun las posiciones que puse en el response
       setmovieState({
        nowPlaying:response[0].data.results,
        popular:response[1].data.results,
        topRated:response[2].data.results,
        upcoming:response[3].data.results,
       })
        
        setIsLoading(false);
    }

    useEffect(() => {
       /**now_playing */
        getMovies();
    }, [])

    return {
        //Se tiene cada una de las propiedades
        ...movieState,
        isLoading
    }
}
