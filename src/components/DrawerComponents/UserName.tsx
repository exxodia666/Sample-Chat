import React from 'react'
import {
    View,
    Text, StyleSheet, Image, ImageBackground, Button
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'

interface UserNameTypes {
    username: string
    image_url: string
}

const UserName: React.FC<UserNameTypes> = ({ username, image_url }) => {
    return (
        <ImageBackground
            //blurRadius={1}
            style={styles.container}
            source={{ uri: image_url }}
        >
            <View 
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: 'rgba(0,0,0,0.22)',
                    justifyContent: 'flex-end',
                    alignItems: 'stretch'
                }}
            >
                 <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                //borderWidth: 0.5,
                //backgroundColor: 'red'
            }}>
                <View style={styles.text_container}>
                    <Text style={styles.text}>{username}</Text>
                </View>
                <View style={{
                    margin: 5,
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: 'violet',
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 10,
                }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name='edit' size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        //blurRa
        //borderBottomRightRadius: 25,
        //borderWidth: 0.5,
        //alignItems: 'flex-end',
        //flexDirection: 'row',
        height: 250,
        resizeMode: "cover",
        //alignContent: 'flex-end',
        //justifyContent: 'flex-end'
    },
    text_container: {
        flex:1,
        //flex: 17 / 18,
        //borderWidth: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
    }

})

export default UserName
