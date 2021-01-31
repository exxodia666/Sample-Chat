import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

interface MessageType {
    image: string
    name: string
    last_message: string
    message_count: number
    last_message_time: any
}

const Message: React.FC<MessageType> = ({ image, name,
    last_message, message_count,
    last_message_time }): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                style={{
                    height: 85,
                    width: 85,
                    borderRadius: 42.5,
                    marginHorizontal: 5,
                }}
            />

            <View style={{
                height: '100%'
            }}>
                <Text>
                    {name}
                </Text>
                <Text>
                    {last_message}
                </Text>
            </View>
            <View>
                <Text>
                    {last_message_time}
                </Text>
                <Text>
                    {message_count}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: 90,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        //backgroundColor: 'red'
    }
})

export default Message
