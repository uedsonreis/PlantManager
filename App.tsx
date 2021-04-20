import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/pages/Welcome';

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <Welcome />
        </>
    );
}
