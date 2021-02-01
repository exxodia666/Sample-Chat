import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Contact from '../../components/Contact/Contact'

const ContactsScreen = ({ navigation }) => {
    const data = [
        {
            avatar_url: 'https://www.metalgearinformer.com/wp-content/uploads/2020/07/First-4-Figures-Solid-Snake-Bust-First-Look-scaled.jpg',
            username: 'Snake'
        }, {
            avatar_url: 'https://www.metalgearinformer.com/wp-content/uploads/2020/07/First-4-Figures-Solid-Snake-Bust-First-Look-scaled.jpg',
            username: 'Snake'
        }, {
            avatar_url: 'https://www.metalgearinformer.com/wp-content/uploads/2020/07/First-4-Figures-Solid-Snake-Bust-First-Look-scaled.jpg',
            username: 'Snake'
        }, {
            avatar_url: 'https://www.metalgearinformer.com/wp-content/uploads/2020/07/First-4-Figures-Solid-Snake-Bust-First-Look-scaled.jpg',
            username: 'Snake'
        }];
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <Contact name={item.username} image={item.avatar_url} />}
                data={data}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //paddingTop: 20,
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },

})

export default ContactsScreen
