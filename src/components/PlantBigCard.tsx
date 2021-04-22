import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Props extends RectButtonProps {
    text: string;
    photo: string;
    active?: boolean;
}

export default function PlantBigCard({ text, photo, active = false, ...rest }: Props) {

    return (
        <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
            <SvgFromUri uri={photo} height={70} />
            <Text style={styles.text}>{text}</Text>
        </RectButton>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 5,
        maxWidth: '45%',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: colors.shape,
    },

    containerActive: {
        backgroundColor: colors.green_light,
    },

    text: {
        marginVertical: 16,
        color: colors.green_dark,
        fontFamily: fonts.heading,
    },

});