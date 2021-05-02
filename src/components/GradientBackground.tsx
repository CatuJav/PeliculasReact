import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props{
    //Recibe los hijos
    children:JSX.Element| JSX.Element[]
}
export const GradientBackground = ({children}:Props) => {

    const {colors,prevColors} = useContext(GradientContext);

    return (
        <View 
            style={{
                flex:1,
                
            }}
        >
            <LinearGradient
                colors={[colors.primary,colors.secondary,"white"]}
                //Para cambiar el angulo de donde empieze el gradiente
                start={{x:0.1,y:0.1}}
                //Para cambiar el angulo de donde termine el gradiente
                end={{x:0.5,y:0.7}}
                //Para llenar todo el contenedor
                style={{...StyleSheet.absoluteFillObject}}
            />
            {/* Es toda la aplicación los hijos */}
            {children}
        </View>
    )
}
