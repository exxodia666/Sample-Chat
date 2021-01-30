import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainDrawer from './Drawer/MainDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { INIT } from '../redux/authorization/actions/auth_action_types';
import { StoreType } from '../redux/configureStore';
import RegisterScreen from './screens/RegisterScreen'

const MainNavigator: React.FC = (): JSX.Element => {
    const auth = useSelector((state: StoreType) => state.auth)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch({ type: INIT })
    },[auth.access_token])


    console.log(auth)
    if(!!auth.access_token.length) {
        return (
            <NavigationContainer>
                <MainDrawer />
            </NavigationContainer>
        )
    } else {
        return <RegisterScreen />
    }
    
}

export default MainNavigator
