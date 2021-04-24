import React from 'react';
import { pt } from 'date-fns/locale';
import { formatDistance } from 'date-fns/esm';
import { FlatList, Image, Text, View } from 'react-native';

import styles from './styles';
import { Plant } from '../../models';
import Header from '../../components/Header';
import waterdrop from '../../assets/waterdrop.png';
import { plantRepository } from '../../repositories';
import PlantSmallCard from '../../components/PlantSmallCard';

export default function MyPlants() {

    const [ plants, setPlants ] = React.useState<Plant[]>([]);
    const [ nextWatered, setNextWatered ] = React.useState<string>();

    React.useEffect(() => {
        plantRepository.getPlants().then(data => {
            if (data.length > 0) {
                const nextTime = formatDistance(
                    new Date(data[0].dateTimeNotification).getTime(),
                    new Date().getTime(), { locale: pt }
                );
                setNextWatered(`Não esqueça de regar a ${data[0].name} à ${nextTime}.`);
                setPlants(data);
            }
        });
    }, []);

    return (
        <View style={styles.container}>
            <Header />
            
            <View style={styles.spotlight}>
                <Image style={styles.spotlightImage} source={waterdrop} />
                <Text style={styles.spotlightText}>
                    {nextWatered}
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList
                    contentContainerStyle={styles.list}
                    showsHorizontalScrollIndicator={false}
                    data={plants}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantSmallCard title={item.name} photo={item.photo} hour={item.hour} />
                    )}
                />

            </View>

        </View>
    );
    
}