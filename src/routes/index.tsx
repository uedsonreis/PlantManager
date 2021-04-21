import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';

const Stack = createStackNavigator();

function StackRoute() {

    return (
        <Stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>

            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="UserIdentification" component={UserIdentification} />
            <Stack.Screen name="Confirmation" component={Confirmation} />

        </Stack.Navigator>
    );
}

export default function AppRoute() {
    return (
        <NavigationContainer>
            <StackRoute />
        </NavigationContainer>
    );
}