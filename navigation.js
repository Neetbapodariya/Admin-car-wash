import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './home';
import allorder from './all order';
import Details from './details';
import login from './login';


const stack=createNativeStackNavigator()
const Navigation=()=>{
    return(
        <NavigationContainer>
            <stack.Navigator 
            screenOptions={{headerShown:false}}>
                <stack.Screen name='login' component={login}/>
                <stack.Screen name='home' component={Home}/>
                <stack.Screen name='order' component={allorder}/>
                <stack.Screen name='details' component={Details}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}



export default Navigation;