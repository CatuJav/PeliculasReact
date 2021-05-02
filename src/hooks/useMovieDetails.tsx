import { useEffect, useState } from "react"
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails{
    isLoading:boolean;
    movieFull?:MovieFull;
    cast:Cast[]
}

export const useMovieDetails = (movieId:number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    });

    const getMovieDetails=async()=>{
        const movieDetailPromise= movieDB.get<MovieFull>(`${movieId}`);
        const castPromise= movieDB.get<CreditsResponse>(`${movieId}/credits`);

        const [movieDetailsResp, castPromiseResp]=await Promise.all([movieDetailPromise,castPromise]);
        
        setState({
            isLoading:false,
            movieFull:movieDetailsResp.data,
            cast:castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    //Retorno el desestructurado
    return{
        ...state,
    }
}
