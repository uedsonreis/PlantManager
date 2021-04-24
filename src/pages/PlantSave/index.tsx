import React from 'react';
import { format, isBefore } from 'date-fns';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { Alert, Image, Platform, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { Plant } from '../../models';
import Button from '../../components/Button';
import waterDrop from '../../assets/waterdrop.png';
import { plantRepository } from '../../repositories';

export default function PlantSave() {

    const navigation = useNavigation();
    const route = useRoute();
    const { plant } = route.params as { plant: Plant };

    const [ selectedTime, setSelectedTime ] = React.useState(new Date());
    const [ showDatePicker, setShowDatePicker ] = React.useState(Platform.OS === 'ios');

    function handleChangeTime(event: Event, date: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowDatePicker(old => !old);
        }

        if (date) {
            if (isBefore(date, new Date())) {
                setSelectedTime(new Date());
                Alert.alert('Escolha uma hora no futuro! ⏱');
            } else {
                setSelectedTime(date);
            }
        }
    }

    function handleOpenPickerForAndroid() {
        setShowDatePicker(old => !old);
    }

    async function handleSave() {
        plant.dateTimeNotification = selectedTime;
        await plantRepository.save(plant);

        navigation.navigate('Confirmation', {
            emoji: '👍', title: 'Planta salva com sucesso!', buttonTitle: 'Ver todas as Plantas', nextPage: 'PlantCRUD',
            subtitle: 'Fique tranquilo agora vamos lembrar você na hora de cuidar de sua planta!',
        });
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

                { showDatePicker && (
                    <DateTimePicker
                        mode="time" display='spinner'
                        value={selectedTime}
                        onChange={handleChangeTime}
                    />
                )}

                {(Platform.OS === 'android') && (
                    <TouchableOpacity style={styles.dateTimePickerButton} onPress={handleOpenPickerForAndroid}>
                        <Text style={styles.dateTimePickerText}>
                            {`Mudar Horário: ${format(selectedTime, 'HH:mm')}`}
                        </Text>
                    </TouchableOpacity>
                )}

                <Button text="Cadastrar Planta" onPress={handleSave} />

            </View>

        </View>
    );

}