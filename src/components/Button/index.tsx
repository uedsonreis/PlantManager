import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../../styles/colors';

interface Props extends TouchableOpacityProps {
    text: string, children: any
};

export default function Button({ text, children, ...rest }: Props) {

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
            {children}
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        height: 56,
        marginBottom: 10,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: colors.green,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
    },
});