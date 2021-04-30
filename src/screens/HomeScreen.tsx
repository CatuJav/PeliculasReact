import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';

export const HomeScreen = () => {

    useEffect(() => {
        /**Se pone el tipo de respuesta que puedo recibir */
        movieDB.get<MovieDBNowPlaying>('/now_playing')
        .then((resp)=>{
            console.log(JSON.stringify(resp.data.results[0].title,null,3));
        })
    }, [])

    const navigation=useNavigation();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title={'Ir a detail'}
                onPress={()=>{navigation.navigate('DetailScreen')}}
            />
        </View>
    )
}
