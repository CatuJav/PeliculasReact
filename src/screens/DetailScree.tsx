import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ActivityIndicator } from 'react-native';
//import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';
/**Propiedades que extiende de StackScrenProos
 * que es de tipo RootStackParams de DetailScreen
 */
interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}
export const DetailScreen = ({route,navigation}:Props) => {
    
    const {height,width}=useWindowDimensions();
    //Trata los parametros como Movie
    const movie = route.params;

    const uriPoster=`https://image.tmdb.org/t/p/original${movie.poster_path}`
    const uriBackDrop=`https://image.tmdb.org/t/p/original${movie.backdrop_path}`

    const { cast,isLoading,movieFull}=useMovieDetails(movie.id)
    
    
    return (
       <ScrollView>

           

            <View style={{...styles.imageContainer, height:height*0.7}}>
           
           <View style={styles.imageBorder}>
            <Image
                source={{
                    uri:(width>height)?uriBackDrop:uriPoster
                }}
                style={styles.posterImage}
                />
            </View>
         {/**Botón para cerrar */}
         <View style={styles.backButton}>
         <TouchableOpacity 
            onPress={()=>navigation.pop()}
         >
            <Icon
                color='#ffffff'
                name='arrow-back-outline'
                size={60}
                
            />
         </TouchableOpacity>

         </View>
        </View>
        <View style={styles.marginContainer}>
            <Text style={styles.subTitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
        </View>

           {
               isLoading?(
                   <ActivityIndicator
                    color='darkred'
                    size={35}
                    style={{marginTop:20}}
                   />
               ):
               (
                <MovieDetails movieFull={movieFull!} cast={cast} />
               
               )
           }


       
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        //backgroundColor:'red',
        width:'100%',
        shadowColor: "green",
        shadowOffset: {
	        width: 0,
	        height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,
        elevation: 10,
        
        
    },
    imageBorder:{
        flex:1,
        overflow:'hidden',
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,
    },
    posterImage:{
        flex:1,

    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:20
    },
    subTitle:{
        fontSize:16,
        opacity:0.5,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    backButton:{
       position:'absolute',
        zIndex:999,
        elevation:9,
        top:30,
        left:5,
        
        
    }
});