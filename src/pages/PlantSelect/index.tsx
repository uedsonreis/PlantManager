import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import PlaceList from '../../components/PlaceList';
import PlantBigCard from '../../components/PlantBigCard';

export default function PlantSelect() {

    const [ places, setPlaces ] = React.useState<string[]>();

    React.useEffect(() => {
        api.get('plantsEnvironments').then(({ data }: any) => {
            setPlaces([
                'Todos',
                ...data.map((p: any) => p.title)
            ]);
        });
    }, []);

    if (!places) return <Text>Carregando...</Text>

    return (
        <View style={styles.container}>

            <Header />

            <Text style={styles.title}>Em qual ambiente está sua planta?</Text>

            <PlaceList places={places} />

            <PlantBigCard text="Palmeira" photo="foto.png" />

        </View>
    );

}