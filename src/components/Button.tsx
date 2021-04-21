import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

interface Props extends TouchableOpacityProps {
    text: string, children?: any
};

export default function Button({ text, children, ...rest }: Props) {

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
            <Text style={styles.text}>
                {text}
            </Text>
            {children}
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        height: 56,
        marginBottom: 10,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: colors.green,
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading,
    },
});