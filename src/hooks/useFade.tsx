import { useRef } from "react";
import { Animated } from "react-native";


export const useFade = () => {

        //Creamos la opcidad desde cero usando la opacidad
    //Ademas las propiedades pueden recibir datos de tipo Animated.value
    const opacaity = useRef(new Animated.Value(0)).current

    /**Función para cambiar el valor de la opacidad */
    const fadeIn=(callback?:Function)=>{
        /**Para manerjar el tiempo */
        Animated.timing(
            opacaity,
            {
                //Va a ir al valor 1
                toValue:1,
                duration:300,
                //Para aceleración por hardware
                useNativeDriver:true
            }
        ).start(()=>callback?callback():null);
    }
    /**Función para el fadeOut */        
    const fadeOut=(duration:number=300)=>{
        /**Para manerjar el tiempo */
        Animated.timing(
            opacaity,
            {
                //Va a ir al valor 0
                toValue:0,
                duration:duration,
                //Para aceleración por hardware
                useNativeDriver:true
            }
        ).start();
    }


    return (
        {
            opacaity,
            fadeOut,
            fadeIn
        }
    )
}
