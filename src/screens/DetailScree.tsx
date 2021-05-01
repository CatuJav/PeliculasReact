import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
//import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
/**Propiedades que extiende de StackScrenProos
 * que es de tipo RootStackParams de DetailScreen
 */
interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}
export const DetailScreen = ({route}:Props) => {
    
    const {height}=useWindowDimensions();
    //Trata los parametros como Movie
    const movie = route.params;

    const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`

    useMovieDetails(movie.id)
    
    
    return (
       <ScrollView>
            <View style={{...styles.imageContainer, height:height*0.7}}>
           
           <View style={styles.imageBorder}>
            <Image
                source={{uri}}
                style={styles.posterImage}
                />
            </View>
        </View>
        <View style={styles.marginContainer}>
            <Text style={styles.subTitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
        </View>
        <View style={styles.marginContainer}>
           <Icon
            name="star-outline"
            color="grey"
            size={20}
           />
        </View>

        
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
    }
});