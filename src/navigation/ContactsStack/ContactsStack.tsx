import React from 'react'
import ContactsScreen from './ContactsScreen';
import StackWrapper from '../../components/StackWrapper/StackWrapper';
import SearchButton from '../../components/SearchButton/SearchButton';
import SearchContactsScreen from './SearchContactsScreen';
import ToggleButton from '../../components/StackWrapper/ToggleButton';
import { createStackNavigator } from '@react-navigation/stack';

const ContactsStack = (props: any) => {
    console.log(props.navigation.navigate);
    const Stack = createStackNavigator();
    return <Stack.Navigator>
        <Stack.Screen
            options={{
                headerLeft: () => (<ToggleButton {...props} />),
                headerRight: () => <SearchButton onPress={() => props.navigation.navigate('Search')} />
            }}
            name={'Contacts'}
            component={ContactsScreen}
        />
        <Stack.Screen

            name={'Search'}
            component={SearchContactsScreen} />

    </Stack.Navigator>
}

export default ContactsStack

