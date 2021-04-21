import React from 'react';
import { Text, View } from 'react-native';
import EnviromentButton from '../../components/EnviromentButton';

import Header from '../../components/Header';

import styles from './styles';

export default function PlantSelect() {

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Header />

                <Text style={styles.title}>Em qual ambiente está sua planta?</Text>

                <EnviromentButton text="Quarto" />
                <EnviromentButton text="Sala" active />

            </View>

        </View>
    );

}