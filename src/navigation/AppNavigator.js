import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} screenOptions={{headerShown: false}} />
            <Stack.Screen name="Signup" component={Signup} screenOptions={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} screenOptions={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
