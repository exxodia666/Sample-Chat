import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


interface ButtonTypes {
    onPress: () => void
}

const SearchButton: React.FC<ButtonTypes> = ({ onPress }) => {
    console.log(onPress)
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Icon name='search' size={30} color='black' />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 50,
        height: '100%',
        //borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchButton
