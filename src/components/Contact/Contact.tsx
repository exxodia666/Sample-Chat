import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

interface ContactType {
    image: string
    name: string
}

const Contact: React.FC<ContactType> = ({ image, name }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.text}> {name} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        borderRadius: 30,
        width: 60,
        height: 60
    },
    container: {
        padding: 10,
        borderBottomWidth: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: 80,
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22
    }
})

export default Contact
