import React from 'react'
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props{
    //Recibe los hijos
    children:JSX.Element| JSX.Element[]
}
export const GradientBackground = ({children}:Props) => {
    return (
        <View 
            style={{
                flex:1,
                
            }}
        >
            <LinearGradient
                colors={["#084f6a","#75CEDB","white"]}
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
