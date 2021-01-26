import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TextComponent: React.FC = ({children}) => <Text style = {styles.text}>{children}</Text>

const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        margin: 5
    }
})

export default TextComponent
