import React from 'react'
import { Text, View } from 'react-native';
import currencyFormater from 'currency-formatter';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props{
    movieFull:MovieFull;
    cast:Cast[];
}
export const MovieDetails = ({movieFull,cast}:Props) => {
    return (
        <>
            {/**Detalles */}
            <View style={{marginHorizontal:20}}>
                <View style={{flexDirection:'row'}}>
                        <Icon
                            name="star-outline"
                            color="grey"
                            size={20}
                        />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{marginLeft:5}}>
                        -{movieFull.genres.map((g)=>g.name).join(', ')}
                    </Text>
                </View>
                {/**Historia */}
                <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>Historia</Text>
                <Text style={{fontSize:16, textAlign:'justify'}}>{movieFull.overview}</Text>
                {/**Presupuesto */}
                <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>
                    Presupuesto</Text>
                <Text style={{fontSize:16, textAlign:'justify'}}>
                    {currencyFormater.format(movieFull.budget,{code:'USD'})}</Text>
            </View>
        </>
    )
}