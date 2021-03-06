
import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, useWindowDimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ImageColors from "react-native-image-colors";

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

export const HomeScreen = () => {
    //Obtiene las dimensiones del dispositivo en tiempo real
    const {width:windoWidth}=useWindowDimensions();
   const{nowPlaying,popular,topRated,upcoming,isLoading}=useMovies();
   //Para protegerse del notch
   const{top}=useSafeAreaInsets();
   //Par ocupar los colores
   const {setMainColors} = useContext(GradientContext);
   /**El error que aparece auqi se puede resolver poniendo ?
    * El error aparecer porque en su momento el objeto es undefined
   */
    //console.log(JSON.stringify(peliculasEnCine[2]?.title,null,3));
    
    //Funcion para obtener el color según el indice de la imagen
    const getPosterColors= async(index:number)=>{
        const movie=nowPlaying[index];
        const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        
        //Igualamos las constantes para que quite el error de que son undefined
        const [primary='green',secondary='orange']=await getImageColors(uri);
        setMainColors({primary:primary,secondary:secondary})
    }

    /**Para obtener los colores de la primera inmagen cuando inicia
     * cuando nowPlaying cambia se dispara el procedimiento
    */
    useEffect(() => {
        if (nowPlaying.length>0) {
            getPosterColors(0);
        }
    }, [nowPlaying])

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
        <GradientBackground>
            <ScrollView>
            <View style={{marginTop:top+20}}>
            {/* */}

            
            <View
                style={{height:440}}
            >
                <Carousel
                    data={nowPlaying}
                    renderItem={({item}:any)=>(<MoviePoster movie={item}/>)}
                    sliderWidth={windoWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                    /**Para obtener la imagen en la que se encuentra */
                    onSnapToItem={index=>getPosterColors(index)}
                />
            </View>
            {/**En cine*/}
                <HorizontalSlider title='En cine' movies={nowPlaying}/>
                    {/**Peliculas populares */}
                <HorizontalSlider title='Populares' movies={popular}/>
                <HorizontalSlider title='Top Rated' movies={topRated}/>
                <HorizontalSlider title='Próximamente' movies={upcoming}/>
            
            </View>
            </ScrollView>
        </GradientBackground>
    )
}
