import React, { useRef } from 'react'
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';


export const FadeScreen = () => {

    const {fadeIn,fadeOut,opacaity}=useFade();
    
    return (
        <View style={{
            flex:1,
            backgroundColor:'grey',
            justifyContent:'center',
            alignItems:'center'}}>
            {/*Para que funciones con animated */}
            <Animated.View style={{
                backgroundColor:'#084f6a',
                width:150,
                height:150,
                borderColor:'white',
                borderWidth:10,
                marginBottom:10,
                opacity:opacaity,
            }}>

            </Animated.View>
            <Button
                title='FadeIN'
                onPress={()=>fadeIn()}
            />
            <Button
                title='FadeOut'
                onPress={()=>fadeOut()}
            />
        </View>
    )
}
