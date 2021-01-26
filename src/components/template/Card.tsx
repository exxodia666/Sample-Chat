import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'

const Card: React.FC = ({ children }): JSX.Element => <View style = {styles.card}>{children}</View>

const styles = StyleSheet.create({
    card:{
        margin: 10,
        padding: 25,
        borderRadius: 2,
        width: '80%',
        elevation: 2
    }
})

export default Card
