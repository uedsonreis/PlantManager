import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/load.json';

export default function Loading() {

    return (
        <View style={styles.container}>
            <LottieView autoPlay loop
                source={loadAnimation}
                style={styles.animation}
            />
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    animation: {
        width: 200,
        height: 200,
        backgroundColor: 'transparent',
    },

});