import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Component from '../../components/Component';
import Component2 from '../../components/Component2';
import MainStack from '../MainStack/MainStack';

const MainDrawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={MainStack}
            />
            <Drawer.Screen
                name="Notifications"
                component={Component2}
            />
        </Drawer.Navigator>
    )
}

export default MainDrawer
