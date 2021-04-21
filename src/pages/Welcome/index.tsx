import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, Text, View } from 'react-native';

import wateringImg from '../../assets/watering.png';
import Button from '../../components/Button';
import styles from './styles';

export default function Welcome() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie suas plantas {'\n'} de forma fácil
                </Text>

                <Image style={styles.image} source={wateringImg} resizeMode="contain" />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de te lembrar sempre que precisar.
                </Text>

                <Button text="Avançar" onPress={() => alert('To do')}>
                    <Ionicons name="chevron-forward-sharp" color="white" size={24} />
                </Button>
            </View>
        </SafeAreaView>
    );

}