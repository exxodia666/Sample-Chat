import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { Logout } from '../../redux/authorization/actions/auth_actions'

const DialogListScreen = ({navigation}) => {
    const dispatch = useDispatch();
    //const handleLogOut = () => { dispatch(Logout)}
    console.log(Logout);
    const handleLogOut = () => {
        //navigation.navigate('');
        dispatch(Logout())
    }
    console.log("DIALOG")
    return (
        <View>
            <Text>Dialog List</Text>
            <Button 
                title = "Выйти"
                onPress = {handleLogOut}
                color = 'red'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DialogListScreen
