import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import wateringImg from '../../assets/watering.png';
import Button from '../../components/Button';
import styles from './styles';

export function Welcome() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie suas plantas {'\n'} de forma fácil
            </Text>

            <Image style={styles.image} source={wateringImg} />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. {'\n'}
                Nós cuidamos de te lembrar sempre que precisar.
            </Text>

            <Button text="Avançar" onPress={() => alert('To do')} />

        </SafeAreaView>
    );

}