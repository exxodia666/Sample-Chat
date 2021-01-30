import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Component from '../../components/Component';
import Component2 from '../../components/Component2';

const MainDrawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={Component}
            />
            <Drawer.Screen
                name="Notifications"
                component={Component2}
            />
        </Drawer.Navigator>
    )
}

export default MainDrawer
