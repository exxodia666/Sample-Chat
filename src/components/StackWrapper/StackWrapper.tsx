import React, { FunctionComponent, ReactNode } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ToggleButton from './ToggleButton';
interface WrapperTypes {
    screen: FunctionComponent
    name: string
}
const StackWrapper: React.FC<WrapperTypes> = ({ screen, name }) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={(props) => ({
                headerLeft: () => (<ToggleButton {...props} />),
            })}
        >
            <Stack.Screen name="Contacts" component={screen} />
        </Stack.Navigator>
    )
}

export default StackWrapper
