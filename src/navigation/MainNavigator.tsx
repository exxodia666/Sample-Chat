import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainDrawer from './Drawer/MainDrawer';

const MainNavigator: React.FC = (): JSX.Element => {
    return (
        <NavigationContainer>
            <MainDrawer />
        </NavigationContainer>
    )
}

export default MainNavigator
