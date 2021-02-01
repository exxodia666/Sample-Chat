import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    Button,
    ActivityIndicator
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/template/Card'
import { AuthUserCancel } from '../../redux/authorization/actions/auth_actions'
import { StoreType } from '../../redux/configureStore'
import { status } from '../../redux/constants/constants'
import { CheckPasswords } from '../../redux/passwords/actions/compare_passwords_actions'
import { SendDataCancel } from '../../redux/registration/actions/register_actions'

const RegisterScreen: React.FC = (): JSX.Element => {
    const dispatch = useDispatch()
    const state = useSelector((state: StoreType) => state.register)
    const data = useSelector((state: StoreType) => state.passwords)
    const auth = useSelector((state: StoreType) => state.auth)

    const [username, setname] = React.useState<string>('')
    const [password, setpassword] = React.useState<string>('')
    const [confirmation, setconfirmation] = React.useState<string>('')

    const [input, setinput] = React.useState(true)

    const handleOnPress = () => {
        dispatch(CheckPasswords({
            username,
            password,
            confirmation
        }))
    }
    const handleOnAuth = () => {
        dispatch(CheckPasswords({
            username,
            password,
        }))
    }
    const handleOnCancel = () => {
        dispatch(SendDataCancel())
        dispatch(AuthUserCancel())
    }
    React.useEffect(() => {
        setname(data.user.username)
        setpassword(data.user.password)
        setconfirmation(data.user.confirmation!)
    }, [data.user.password, data.user.password, data.user.confirmation])

    if (state.status === status.pending || auth.status === status.pending) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Button
                title='Cancel'
                color='red'
                onPress={handleOnCancel}
            />
            <ActivityIndicator color={'red'} />
        </View>
    }
    if (state.status === status.idle || status.error) {
        return (
            <View style={styles.container}>
                <Card>
                    {auth.status === 'error' && <Text style={{ color: "red" }}>{auth.errors}</Text>}
                    {state.status === 'error' && <Text style={{ color: "red" }}>{state.error}</Text>}
                    {!!data.error.length && <Text style={{ color: "red" }}>{data.error}</Text>}
                    <TextInput
                        value={username}
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
                    {input && <TextInput
                        value={confirmation}
                        style={styles.textInput}
                        placeholder={'Подтверждение пароля'}
                        onChangeText={setconfirmation}
                    />}

                    {input ? <Button
                        onPress={handleOnPress}
                        title='Зарегистрироваться'
                        color='green'
                    /> : <Button
                            onPress={handleOnAuth}
                            title='Войти'
                            color='green'
                        />}
                    <Button
                        onPress={() => setinput(e => !e)}
                        title='Auth'
                        color='green'
                    />

                </Card>
            </View>
        )
    }
    return <></>
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

export default RegisterScreen
