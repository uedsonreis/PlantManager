import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Props extends RectButtonProps {
    text: string;
    active?: boolean;
}

export default function EnviromentButton({ text, active = false, ...rest }: Props) {

    return (
        <RectButton
            style={[styles.container, active && styles.containerActive ]}
            {...rest}
        >
            <Text
                style={[styles.text, active && styles.containerActive]}
            >
                {text}
            </Text>
        </RectButton>
    );

}

const styles = StyleSheet.create({

    container: {
        width: 76,
        height: 40,
        borderRadius: 12,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },

    containerActive: {
        backgroundColor: colors.green_light,
    },

    text: {
        color: colors.heading,
        fontFamily: fonts.text,
    },

    textActive: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
    },

});