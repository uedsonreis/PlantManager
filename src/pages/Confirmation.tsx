import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Confirmation() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.emoji}>
                    😄
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a te ajudar a cuidar das suas plantas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button text="Começar" onPress={() => navigation.navigate('PlantSelect')} />
                </View>

            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    emoji: {
        fontSize: 72,
    },

    title: {
        fontSize: 22,
        marginTop: 15,
        lineHeight: 38,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
    },

    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 10,
        fontFamily: fonts.text,
        color: colors.heading,
    },

    footer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },

});