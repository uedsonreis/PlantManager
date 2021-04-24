import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Button from '../../components/Button';
import styles from './styles';

interface Params {
    emoji: string;
    title: string;
    subtitle: string;
    buttonTitle: string;
    nextPage: string;
}

export default function Confirmation() {

    const navigation = useNavigation();
    const route = useRoute();

    const { title, subtitle, emoji, buttonTitle, nextPage } = route.params as Params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.emoji}>
                    {emoji}
                </Text>

                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

                <View style={styles.footer}>
                    <Button text={buttonTitle} onPress={() => navigation.navigate(nextPage)} />
                </View>

            </View>
        </SafeAreaView>
    );

}