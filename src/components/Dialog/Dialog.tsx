import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

interface DialogType {
    image: string
    name: string
    last_message: string
    message_count: number
    last_message_time: any
}

const Dialog: React.FC<DialogType> = ({ image, name,
    last_message, message_count, last_message_time }): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />

            <View style={styles.message_container}>
                <Text style={{ fontFamily: 'Poppins-Medium', }}>
                    {name}
                </Text>
                <Text>
                    {last_message}
                </Text>
            </View>
            <View style={styles.time_container}>
                <Text>
                    {last_message_time}
                </Text>
                <View style={styles.couner_bubble}>
                    <Text style={{ color: 'white' }}>
                        {message_count}
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    couner_bubble: {
        elevation: 5,
        padding: 4,
        minWidth: 25,
        height: 25,
        backgroundColor: 'violet',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12.5
    },
    image: {
        //elevation: 5,
        borderWidth: 0.5,
        //flex: 2 / 6,
        height: 55,
        width: 55,
        borderRadius: 42.5,
        marginRight: 5,
        marginLeft: 1,
    },
    container: {
        paddingLeft: 5,
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        backgroundColor: 'white'
    },
    message_container: {
        justifyContent: 'center',
        //alignItems: 'center',
        paddingLeft: 10,
        flex: 5 / 6,
        //borderWidth: 0.5,
        height: '100%'
    },
    time_container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        //borderWidth: 0.5,
        flex: 1 / 6
    }
})

export default Dialog
