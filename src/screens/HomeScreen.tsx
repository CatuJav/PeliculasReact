import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {

    useEffect(() => {
        movieDB.get('/now_playing')
        .then((resp)=>{
            console.log(JSON.stringify(resp.data,null,3));
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
