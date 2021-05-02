import React, { useContext, useEffect } from 'react'
import { View, StyleSheet , Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props{
    //Recibe los hijos
    children:JSX.Element| JSX.Element[]
}
export const GradientBackground = ({children}:Props) => {

    const {colors,prevColors,setPrevMainColors} = useContext(GradientContext);
    const {opacaity,fadeIn, fadeOut}=useFade();
    useEffect(() => {
       fadeIn( ()=>{
            setPrevMainColors(colors);
            fadeOut(0); //Problema con el fadeOut se oculta todo
       })
    }, [colors])

    return (
        <View 
            style={{
                flex:1,
                
            }}
        >
            <LinearGradient
                colors={[prevColors.primary,prevColors.secondary,"#dcdde1"]}
                //Para cambiar el angulo de donde empieze el gradiente
                start={{x:0.1,y:0.1}}
                //Para cambiar el angulo de donde termine el gradiente
                end={{x:0.8,y:0.8}}
                //Para llenar todo el contenedor
                style={{...StyleSheet.absoluteFillObject}}
            />
            <Animated.View 
                style={{...StyleSheet.absoluteFillObject, 
                            opacity:opacaity}}>
            {/* Es toda la aplicación los hijos */}
            </Animated.View>
            <LinearGradient
                colors={[colors.primary,colors.secondary,"#dcdde1"]}
                //Para cambiar el angulo de donde empieze el gradiente
                start={{x:0.1,y:0.1}}
                //Para cambiar el angulo de donde termine el gradiente
                end={{x:0.8,y:0.8}}
                //Para llenar todo el contenedor
                style={{...StyleSheet.absoluteFillObject}}
            />
              {children}
        </View>
    )
}
