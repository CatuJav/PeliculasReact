import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

   const{peliculasEnCine,isLoading}=useMovies();
   //Para protegerse del notch
   const{top}=useSafeAreaInsets();
   /**El error que aparece auqi se puede resolver poniendo ?
    * El error aparecer porque en su momento el objeto es undefined
   */
    //console.log(JSON.stringify(peliculasEnCine[2]?.title,null,3));
    
    if(isLoading){
        return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignContent:'center'
        }}>
            <ActivityIndicator color='darkred' size={100}/>
        </View> )
    }
    //const navigation=useNavigation();
    return (
        <View style={{marginTop:top+20}}>
           <MoviePoster
            movie={peliculasEnCine[2]}
           />
        </View>
    )
}
