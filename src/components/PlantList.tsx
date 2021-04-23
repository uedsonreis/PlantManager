import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { Plant } from '../models';
import colors from '../styles/colors';
import PlantBigCard from './PlantBigCard';

interface Props {
    plants: Plant[];
    loading?: boolean;
    handleClickItem: (selected: Plant) => void;
    handleFetchMore: (distance: number) => void;
}

export default function PlantList({ plants, loading = false, handleClickItem, handleFetchMore }: Props) {

    return (
        <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            data={plants}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
                <PlantBigCard
                    text={item.name}
                    photo={item.photo}
                    onPress={() => handleClickItem(item)}
                />
            )}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
            ListFooterComponent={
                loading ? <ActivityIndicator color={colors.green} /> : <></>
            }
        />
    );

}

const styles = StyleSheet.create({

    container: {
        minHeight: '60%',
    },

});