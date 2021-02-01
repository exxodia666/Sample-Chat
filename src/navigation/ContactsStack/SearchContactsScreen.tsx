import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const SearchContactsScreen = () => {
    const [user, setUset] = React.useState<string>('')
    return (
        <View style={styles.container}>
            <View style={styles.input_container}>
                <TextInput
                    value={user}
                    style={styles.text_input}
                    placeholder={'Имя пользователя'}
                    onChangeText={setUset}
                />
                <Icon name='person-circle-outline' size={25} color='black' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input_container: {
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'black'
    },
    container: {
        paddingTop: 20,
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    text_input: {
        width: '80%',
        //borderBottomWidth: 0.5
    }
})

export default SearchContactsScreen

