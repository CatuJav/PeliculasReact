import React from 'react'
import { createContext, useState } from "react";

interface ImageColors{
    primary:string;
    secondary:string;
}
//Comoquiero que lusca la informacion que voy a exponer
interface ContextProps{
    colors:ImageColors,
    prevColors:ImageColors,
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void;
}


export const GradientContext=createContext({} as ContextProps); //TODO: definir tipo

export const GradientProvider =({children}:{children:JSX.Element})=>{
    
    const [colors, setColors] = useState<ImageColors>({
        primary:'red',
        secondary:'blue'
    })
    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary:'transparent',
        secondary:'transparent'
    })

    const setMainColors=(colors:ImageColors)=>{
        setColors(colors)
    }

    const setPrevMainColors=(colors:ImageColors)=>{
        setPrevColors(colors)
    }
    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                setMainColors,
                setPrevMainColors
            }}
        >
            {children}
        </GradientContext.Provider>
    )
}