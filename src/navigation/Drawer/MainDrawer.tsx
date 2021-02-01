import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer/CustomDrawer';
import Component2 from '../../components/Component2';
import MainStack from '../MainStack/MainStack';
import ContactsStack from '../ContactsStack/ContactsStack';
import SettingsStack from '../SettingsStack/SettingsStack';

const MainDrawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props: DrawerContentComponentProps) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="Dialogs"
                component={MainStack}
            />
            <Drawer.Screen
                name="Contacts"
                component={ContactsStack}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsStack}
            />
        </Drawer.Navigator>
    )
}

export default MainDrawer
