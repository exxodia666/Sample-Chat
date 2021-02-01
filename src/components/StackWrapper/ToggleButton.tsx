import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ToggleButton: React.FC<any> = (props) => {
    return (
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
    )
}

export default ToggleButton
