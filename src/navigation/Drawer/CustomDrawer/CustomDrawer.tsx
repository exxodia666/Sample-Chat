import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View, Text, Button } from 'react-native'
import UserName from '../../../components/DrawerComponents/UserName'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../../../redux/authorization/actions/auth_actions'
import { StoreType } from '../../../redux/configureStore'
const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector((state: StoreType) => state.auth)
    const handleLogOut = () => {
        dispatch(Logout())
    }
    return (
        <ScrollView style={{ paddingTop: 0 }}>
            <UserName
                username={auth.username}
                image_url='https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/be/Zagreus_intense.png/revision/latest?cb=20191204200158'
            />
            <DrawerItem
                icon={() => <Icon name='mail-open-outline' size={25} />}
                label="Dialogs"
                onPress={() => { props.navigation.navigate('Dialogs') }}
            />
            <DrawerItem
                icon={() => <Icon name='people-outline' size={25} />}
                label="Contacts"
                onPress={() => { props.navigation.navigate('Contacts') }}
            />
            <DrawerItem
                icon={() => <Icon name='options-outline' size={25} />}
                label="Settings"
                onPress={() => { props.navigation.navigate('Settings') }}
            />
            <DrawerItem
                icon={() => <Icon name='log-out-outline' size={25} color="red" />}
                label="Выйти"
                labelStyle={{ color: 'red' }}
                onPress={() => { handleLogOut() }}
            />
        </ScrollView>)
}

export default CustomDrawer
