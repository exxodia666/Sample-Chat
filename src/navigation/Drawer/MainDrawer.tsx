import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer/CustomDrawer';
import Component2 from '../../components/Component2';
import MainStack from '../MainStack/MainStack';

const MainDrawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            
            initialRouteName="Home"
            drawerContent={(props: DrawerContentComponentProps) => <CustomDrawer {...props} />}
        >
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
