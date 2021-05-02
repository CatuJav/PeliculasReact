import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScree';
import { Movie } from '../interfaces/movieInterface';

//Para indicar que tipo de argumentos se puede 
//mandar en cada pantalla
export type RootStackParams={
  //Home no recibe
  HomeScreen:undefined;
  //Detail recibe Movie
  DetailScreen:Movie
}
const Stack = createStackNavigator();

export const Navigation=()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{cardStyle:{backgroundColor:'#ecf0f1'}}} component={DetailScreen} />
     </Stack.Navigator>
  );
}