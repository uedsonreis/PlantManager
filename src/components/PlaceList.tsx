import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EnviromentButton from './EnviromentButton';

interface Props {
    places: string[]
}

export default function PlaceList({ places }: Props) {

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            data={places}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <EnviromentButton text={item} active />
            )}
        />
    );
}

const styles = StyleSheet.create({

    container: {
        height: 40,
        paddingBottom: 5,
        marginVertical: 32,
        justifyContent: 'center',
    },

});