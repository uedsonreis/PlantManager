import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { Plant } from '../../models';
import Button from '../../components/Button';
import waterDrop from '../../assets/waterdrop.png';

export default function PlantSave() {

    const route = useRoute();
    const { plant } = route.params as { plant: Plant };

    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>

                <SvgFromUri uri={plant.photo} width={150} height={150} />

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>
                <Text style={styles.plantAbout}>
                    Escreva algo sobre a planta aqui.
                </Text>
            </View>

            <View style={styles.controller}>

                <View style={styles.tipContainer}>
                    <Image style={styles.tipImage} source={waterDrop} />
                    <Text style={styles.tipText}>
                        Texto qualquer aqui.
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                <Button text="Cadastrar Planta" />

            </View>

        </View>
    );

}