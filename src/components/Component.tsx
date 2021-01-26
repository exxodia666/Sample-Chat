import React, { Dispatch } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Image} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {makeReq} from '../redux/actions/auth/auth_actions'
import { StoreType } from '../redux/Store'
import Card from './template/Card'
import TextComponent from './template/TextComponent'

const Component: React.FC = (): JSX.Element => {
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()
    const state = useSelector((state: StoreType) => state.auth)
    const hadleOnPress = () => input.length ? dispatch(makeReq(input)) : null;
    return (
        <View style = {styles.container}>
            <Card>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = {'Введите имя'}
                    onChangeText = {setInput}
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
