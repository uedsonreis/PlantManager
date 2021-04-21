import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import Button from '../../components/Button';
import colors from '../../styles/colors';

import styles from './styles';

export default function UserIdentification() {

    const navigation = useNavigation();

    const [ isFocused, setFocused ] = React.useState(false);
    const [ isFilled, setFilled ] = React.useState(false);
    const [ name, setName ] = React.useState<string>();

    function handleInputChange(value: string) {
        setFilled(!!value);
        setName(value);
    }

    function handleConfirmation() {
        if (name) {
            navigation.navigate('Confirmation');
        } else {
            alert('Você precisa informar o seu nome!');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.content}
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.form}>
                        
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                { isFilled ? '🤙' : '🤔' }
                            </Text>

                            <Text style={styles.title}>
                                Como podemos chamar você?
                            </Text>
                        </View>

                        <TextInput
                            style={[styles.input, (isFocused || isFilled) && { borderColor: colors.green } ]}
                            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
                            onChangeText={handleInputChange}
                            placeholder="Digite seu nome"
                        />

                        <View style={styles.footer}>
                            <Button text="Confirmar" onPress={handleConfirmation} />
                        </View>

                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );

}