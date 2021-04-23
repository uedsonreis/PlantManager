import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core';
import { Alert, Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import styles from './styles';
import { Plant } from '../../models';
import Button from '../../components/Button';
import waterDrop from '../../assets/waterdrop.png';
import { isBefore } from 'date-fns';

export default function PlantSave() {

    const route = useRoute();
    const { plant } = route.params as { plant: Plant };

    const [ selectedDateTime, setSelectedDateTime ] = React.useState(new Date());
    const [ showDatePicker, setShowDatePicker ] = React.useState(Platform.OS === 'ios');

    function handleChangeTime(event: Event, date: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowDatePicker(old => !old);
        }

        if (date) {
            if (isBefore(date, new Date())) {
                setSelectedDateTime(new Date());
                Alert.alert('Escolha uma hora no futuro! ⏱');
            } else {
                setSelectedDateTime(date);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>

                <SvgFromUri uri={plant.photo} width={150} height={150} />

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>
                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>

            <View style={styles.controller}>

                <View style={styles.tipContainer}>
                    <Image style={styles.tipImage} source={waterDrop} />
                    <Text style={styles.tipText}>
                        {plant.waterTips}
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                <DateTimePicker
                    value={selectedDateTime}
                    mode="time"
                    display='spinner'
                    onChange={handleChangeTime}
                />

                <Button text="Cadastrar Planta" />

            </View>

        </View>
    );

}