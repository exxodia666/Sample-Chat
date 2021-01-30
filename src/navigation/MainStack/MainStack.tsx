import React from 'react'
import { View, Text } from 'react-native'
 import { createStackNavigator } from '@react-navigation/stack'
import Component from '../../components/Component';
import DialogListScreen from '../screens/DialogListScreen';

const MainStack = () => {
    const Stack = createStackNavigator();
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={DialogListScreen} />
    </Stack.Navigator>
    )
}

export default MainStack


/* 
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> 
*/
