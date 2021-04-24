import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../styles/colors';

import Welcome from '../pages/Welcome';
import MyPlants from '../pages/MyPlants';
import PlantSave from '../pages/PlantSave';
import PlantSelect from '../pages/PlantSelect';
import Confirmation from '../pages/Confirmation';
import UserIdentification from '../pages/UserIdentification';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const BottomTap = createBottomTabNavigator();

function BottomTapRoute() {
    return (
        <BottomTap.Navigator tabBarOptions={{
            labelPosition: 'beside-icon',
            activeTintColor: colors.green,
            inactiveTintColor: colors.heading,
            style: {
                height: 88,
                paddingVertical: 20,
            },
        }}>
            
            <BottomTap.Screen name="Nova Planta" component={PlantSelect} options={{
                tabBarIcon: props => <MaterialIcons name="add-circle-outline" size={props.size} color={props.color} />
            }} />

            <BottomTap.Screen name="Minhas Plantas" component={MyPlants} options={{
                tabBarIcon: props => <MaterialIcons name="format-list-bulleted" size={props.size} color={props.color} />
            }} />

        </BottomTap.Navigator>
    );
}

function StackRoute() {
    return (
        <Stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="UserIdentification" component={UserIdentification} />
            <Stack.Screen name="Confirmation" component={Confirmation} />
            <Stack.Screen name="PlantCRUD" component={BottomTapRoute} />
            <Stack.Screen name="PlantSave" component={PlantSave} />
        </Stack.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoute />
        </NavigationContainer>
    );
}