import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Component from '../../components/Component';
import DialogListScreen from '../screens/DialogListScreen';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const MainStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={(props) => ({
                headerLeft: () => (
                    <TouchableOpacity
                        style={{
                            //borderWidth: 0.5,
                            width: 60,
                            flex: 1,
                            justifyContent:
                                'center',
                            alignItems: 'center'
                        }}
                        onPress={() => { props.navigation.toggleDrawer() }}
                    >
                        <Icon name={'md-menu-outline'} size={35} />
                    </TouchableOpacity>
                ),
            })}

        >
            <Stack.Screen name="Home" component={DialogListScreen} />
        </Stack.Navigator>
    )
}

export default MainStack


/*
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
*/
