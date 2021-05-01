import { useEffect, useState } from "react"
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MovieDetails{
    isLoading:boolean;
    movieFull:MovieFull;
    cast:any[]
}

export const useMovieDetails = (movieId:number) => {
    const [state, setstate] = useState<MovieDetails>();

    const getMovieDetails=async()=>{
        const resp=await movieDB.get<MovieFull>(`${movieId}`);
        console.log(resp.data.overview);
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return{
        state,
    }
}
