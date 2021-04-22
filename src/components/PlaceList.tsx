import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Entity } from '../models';

import EnviromentButton from './EnviromentButton';

interface Props {
    places: Entity[];
    selected: Entity;
    handleClickItem: (selected: Entity) => void;
}

export default function PlaceList({ places, selected, handleClickItem }: Props) {

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            data={places}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
                <EnviromentButton
                    text={item.title}
                    active={item.key === selected.key}
                    onPress={() => handleClickItem(item)}
                />
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