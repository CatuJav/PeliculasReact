import React, { useRef } from 'react'
import { View, Animated, Button } from 'react-native';


export const FadeScreen = () => {

    //Creamos la opcidad desde cero usando la opacidad
    //Ademas las propiedades pueden recibir datos de tipo Animated.value
    const opcaity = useRef(new Animated.Value(0)).current

    /**Función para cambiar el valor de la opacidad */
    const fadeIn=()=>{
        /**Para manerjar el tiempo */
        Animated.timing(
            opcaity,
            {
                //Va a ir al valor 1
                toValue:1,
                duration:1000,
                //Para aceleración por hardware
                useNativeDriver:true
            }
        ).start();
    }

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
                opacity:opcaity,
            }}>

            </Animated.View>
            <Button
                title='FadeIN'
                onPress={()=>fadeIn()}
            />
        </View>
    )
}
