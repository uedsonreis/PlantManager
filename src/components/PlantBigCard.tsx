import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Props extends RectButtonProps {
    text: string;
    photo: string;
}

export default function PlantBigCard({ text, photo, ...rest }: Props) {

    return (
        <RectButton style={styles.container} {...rest}>
            <Text style={styles.text}>{text}</Text>
        </RectButton>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10,
        maxWidth: '45%',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: colors.shape,
    },

    text: {
        marginVertical: 16,
        color: colors.green_dark,
        fontFamily: fonts.heading,
    },

});