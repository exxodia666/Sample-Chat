import React, { Dispatch } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Image, ActivityIndicator} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { CheckPasswords, CheckPasswordsSuccess, SendData, SendDataCancel } from '../redux/actions/register/register_actions'
import { check_passwords } from '../redux/epics/register_epic/check_passwords'
import { StoreType } from '../redux/Store'
import Card from './template/Card'
import TextComponent from './template/TextComponent'

const Component: React.FC = (): JSX.Element => {
    const [name, setname] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [confirmation, setconfirmation] = React.useState('')
    const [pass_is_not_eq, setPassIsNot] = React.useState(false)
    const [input_empty, setInput] = React.useState(false)

    const dispatch = useDispatch()
    const state = useSelector((state: StoreType) => state.register)


    // const hadleOnPress = () => name.length && password.length && confirmation.length ? dispatch(CheckPasswords({
    //     user_name: name,
    //     passwords: [password, confirmation]
    // })) : null;
    // const hadleOnPress = () => dispatch(CheckPasswords({
    //         user_name: name,
    //         passwords: [password, confirmation]
    //     }));

    const hadleOnPress = () => {
        if(name.length && password.length && confirmation.length) {
            setInput(false)
            if(check_passwords([password, confirmation])) {
                setPassIsNot(false)
                dispatch(SendData({
                    username: name,
                    password: password
                })) 
            } else {
                setPassIsNot(true)
            } 
        } else {
            setInput(true)  
        }
    };
    if(state.status === 'pending') {
        return <View style = {{flex: 1, justifyContent: 'center', alignItems: "center"}}>
                    <Button title = 'Cancel' color = 'red' onPress = {()=> dispatch(SendDataCancel())} />
                    <ActivityIndicator color = {'red'}/>
                </View> 
       
    } 
    if(state.status === 'success') {
        return <Text>Loaded</Text>
    }
    if(state.status === 'idle') {
        return (
            <View style = {styles.container}>
                <Card>
                 {input_empty && <Text style = {{color: "red"}}>Match all fields</Text>}
                    
                    {pass_is_not_eq && <Text style = {{color: "red"}}>Passwords doesn`t match</Text>}
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = {'Введите имя'}
                        onChangeText = {setname}
                    />
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = {'Введите пароль'}
                        onChangeText = {setpassword}
                    />
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = {'Подтверждение пароля'}
                        onChangeText = {setconfirmation}
                    />
                    <Button 
                        onPress = {hadleOnPress}
                        title = 'Ввойти'
                        color = 'green'
                    />
                </Card>
    
                {state.status === 'completed' && <Card>
                    <Image
                        width = {200}
                        height = {200}
                        style = {styles.image}
                        source = {{uri: state.data.avatar_url}}
                    />
                    <TextComponent>
                        {state.data.login}
                    </TextComponent>
                    <TextComponent>
                        Public repos: {state.data.public_repos}
                    </TextComponent>
                </Card> }
    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200
    },
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    card:{
        margin: 10,
        padding: 25,
        borderRadius: 2,
        width: Dimensions.get('screen').width * 0.8,
        elevation: 2
    },
    textInput:{
        margin: 5,
        padding: 5,
        borderBottomWidth: 0.5
    }
})

export default Component
