import React from 'react'
import { View, Text } from 'react-native'
import StackWrapper from '../../components/StackWrapper/StackWrapper'
import SettingsScreen from './SettingsScreen'

const SettingsStack = () => {
    return (
        <StackWrapper name='Settings' screen={SettingsScreen} />
    )
}

export default SettingsStack;
