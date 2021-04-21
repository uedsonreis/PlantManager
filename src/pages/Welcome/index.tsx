import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, Text, View } from 'react-native';

import wateringImg from '../../assets/watering.png';
import Button from '../../components/Button';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';

export default function Welcome() {

    const navigation = useNavigation();

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

                <Button text="Avançar" onPress={() => navigation.navigate('UserIdentification')}>
                    <Ionicons name="chevron-forward-sharp" color="white" size={20} />
                </Button>
            </View>
        </SafeAreaView>
    );

}