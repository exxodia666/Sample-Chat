import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DialogListScreen from './DialogListScreen';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import DialogScreen from './DialogScreen';

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
            <Stack.Screen name="Dialog" component={DialogScreen} />
        </Stack.Navigator>
    )
}

export default MainStack


/*
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />
*/
