import { useRef } from "react";
import { Animated } from "react-native";


export const useFade = () => {

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
                duration:300,
                //Para aceleración por hardware
                useNativeDriver:true
            }
        ).start();
    }
    /**Función para el fadeOut */        
    const fadeOut=()=>{
        /**Para manerjar el tiempo */
        Animated.timing(
            opcaity,
            {
                //Va a ir al valor 0
                toValue:0,
                duration:300,
                //Para aceleración por hardware
                useNativeDriver:true
            }
        ).start();
    }


    return (
        {
            opcaity,
            fadeOut,
            fadeIn
        }
    )
}
