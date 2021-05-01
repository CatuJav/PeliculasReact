import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';

/**La pelicula */
interface Props{
    movie:Movie;
    height?:number;
    width?:number;
}
export const MoviePoster = ({movie, height=420, width=300}:Props) => {
    
    const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`

    //console.log(movie.poster_path);

    const navigation=useNavigation();
    return (
        <TouchableOpacity style={{
            width:width,
            height:height,
            //backgroundColor:'green',
            marginHorizontal:2,
            paddingBottom:20,
            paddingHorizontal:7
        }}
        activeOpacity={0.8}
        /**Para la navegación y mando como parámetro la movie */
        onPress={()=>navigation.navigate('DetailScreen',movie)}
        >
            <View style={styles.imageContainer}>
            <Image
                source={{uri:uri}}
                style={styles.image}
            />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18,
        
    },
    imageContainer:{
        
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    }
});