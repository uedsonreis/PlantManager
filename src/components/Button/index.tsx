import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../../styles/colors';

interface Props extends TouchableOpacityProps {
    text: string;
};

export default function Button({ text, ...rest }: Props) {

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        height: 56,
        marginBottom: 10,
        borderRadius: 16,
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: colors.green,
    },
    buttonText: {
        color: 'white',
    },
});