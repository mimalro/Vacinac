import React from 'react';


import Login from './Components/Register/Login'
import SignUp from './Components/SignUp';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator screenOptions = {{headerShown : false}} >
      <Stack.Screen name = "Login" component={Login} />
      <Stack.Screen name = "SignUp" component = {SignUp} />
    </Stack.Navigator>  
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}