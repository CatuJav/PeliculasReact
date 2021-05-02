
import React from 'react'
import { View, ActivityIndicator, useWindowDimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';



import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

export const HomeScreen = () => {
    //Obtiene las dimensiones del dispositivo en tiempo real
    const {width:windoWidth}=useWindowDimensions();
   const{nowPlaying,popular,topRated,upcoming,isLoading}=useMovies();
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
