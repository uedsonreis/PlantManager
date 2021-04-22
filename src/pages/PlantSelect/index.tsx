import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import { Entity, Plant } from '../../models';
import Loading from '../../components/Loading';
import PlaceList from '../../components/PlaceList';
import PlantList from '../../components/PlantList';

const objAll = { key: 'all', title: 'Todos' } as Entity;

export default function PlantSelect() {

    const [ places, setPlaces ] = React.useState<Entity[]>();
    const [ plants, setPlants ] = React.useState<Plant[]>();
    const [ filteredPlants, setFilteredPlants ] = React.useState<Plant[]>();

    const [ selectedPlace, setSelectedPlace ] = React.useState<Entity>(objAll);
    const [ selectedPlant, setSelectedPlant ] = React.useState<Plant>();

    const [ page, setPage ] = React.useState(1);
    const [ loadingMore, setLoadingMore ] = React.useState(false);
    const [ loadingAll, setLoadingAll ] = React.useState(false);

    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_page=${page}&_limit=8`);
        if (data) {
            if (page > 1) {
                setPlants(old => [ ...old!, ...data ]);
                setFilteredPlants(old => [ ...old!, ...data ]);
            } else {
                setPlants(data);
                setFilteredPlants(data);
            }
            setLoadingMore(false);
        } else {
            setLoadingAll(true);
        }
    }

    function handlePlaceSelected(place: Entity) {
        setSelectedPlace(place);

        if (plants) {
            if (place.key === 'all') {
                setFilteredPlants(plants);
            } else {
                setFilteredPlants(
                    plants.filter(p => p.environments.includes(place.key))
                );
            }
        }
    }

    function handleFetchMore(distance: number) {
        if (distance < 1) return;
        setLoadingMore(true);
        setPage(old => old + 1);
        fetchPlants();
    }

    React.useEffect(() => {

        api.get('plantsEnvironments?_sort=title').then(({ data }: any) => {
            setPlaces([ objAll, ...data ]);
        });

        fetchPlants();

    }, []);

    if (!places || !plants || !filteredPlants) return <Loading />

    return (
        <View style={styles.container}>

            <Header />

            <Text style={styles.title}>Em qual ambiente está sua planta?</Text>

            <PlaceList places={places} selected={selectedPlace} handleClickItem={handlePlaceSelected} />

            <PlantList
                plants={filteredPlants} selected={selectedPlant}
                handleClickItem={plant => setSelectedPlant(plant)}
                handleFetchMore={handleFetchMore} loading={loadingMore}
            />

        </View>
    );

}