import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SendDataCancel } from '../redux/actions/register/register_actions'
import { StoreType } from '../redux/Store'
import Card from './template/Card'
import TextComponent from './template/TextComponent'
import { CheckPasswords } from '../redux/actions/compare_passwords/compare_passwords_actions'

const Component: React.FC = (): JSX.Element => {

    const dispatch = useDispatch()
    const state = useSelector((state: StoreType) => state.register)
    const data = useSelector((state: StoreType) => state.passwords)

    const [user_name, setname] = React.useState<string>('')
    const [password, setpassword] = React.useState<string>('')
    const [confirmation, setconfirmation] = React.useState<string>('')


    const handleOnPress = () => {
        dispatch(CheckPasswords({
            user_name,
            password,
            confirmation
        }))
    }
    const handleOnCancel = () => {
        dispatch(SendDataCancel())
    }
    React.useEffect(() => {
        setname(data.user.username)
        setpassword(data.user.password)
        setconfirmation(data.user.confirmation)
    }, [data.user.password, data.user.password, data.user.confirmation])
    
    if (state.status === 'pending') {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Button
                title='Cancel'
                color='red'
                onPress={handleOnCancel}
            />
            <ActivityIndicator color={'red'} />
        </View>
    }
    if (state.status === 'success') {
        return <Text>Loaded</Text>
    }
    if (state.status === 'idle' || 'error') {
        return (
            <View style={styles.container}>
                <Card>
                    {state.status === 'error' && <Text style={{ color: "red" }}>{state.error}</Text>}
                    {!!data.error.length && <Text style={{ color: "red" }}>{data.error}</Text>}
                    <TextInput
                        value={user_name}
                        style={styles.textInput}
                        placeholder={'Введите имя'}
                        onChangeText={setname}
                    />
                    <TextInput
                        value={password}
                        style={styles.textInput}
                        placeholder={'Введите пароль'}
                        onChangeText={setpassword}
                    />
                    <TextInput
                        value={confirmation}
                        style={styles.textInput}
                        placeholder={'Подтверждение пароля'}
                        onChangeText={setconfirmation}
                    />
                    <Button
                        onPress={handleOnPress}
                        title='Ввойти'
                        color='green'
                    />
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        margin: 10,
        padding: 25,
        borderRadius: 2,
        width: Dimensions.get('screen').width * 0.8,
        elevation: 2
    },
    textInput: {
        margin: 5,
        padding: 5,
        borderBottomWidth: 0.5
    }
})

export default Component
