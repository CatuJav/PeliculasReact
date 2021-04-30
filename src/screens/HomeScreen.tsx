import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button } from 'react-native';

export const HomeScreen = () => {
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
