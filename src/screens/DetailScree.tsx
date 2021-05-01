import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native';
//import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

/**Propiedades que extiende de StackScrenProos
 * que es de tipo RootStackParams de DetailScreen
 */
interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}
export const DetailScreen = ({route}:Props) => {
    
    //Trata los parametros como Movie
    const movie = route.params;
    console.log(movie.title)
    return (
        <View>
            <Text>DetailScreen</Text>
        </View>
    )
}