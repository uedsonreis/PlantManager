import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';
import Button from '../../components/Button';
import { userRepository } from '../../repositories';

export default function UserIdentification() {

    const navigation = useNavigation();

    const [ name, setName ] = React.useState<string>();
    const [ isFilled, setFilled ] = React.useState(false);
    const [ isFocused, setFocused ] = React.useState(false);

    React.useEffect(() => {
        userRepository.getUser().then(user => setName(user.name));
    }, []);

    function handleInputChange(value: string) {
        setFilled(!!value);
        setName(value);
    }

    async function handleConfirmation() {
        if (name) {
            await userRepository.save({ name });
            navigation.navigate('Confirmation', {
                emoji: '😄', title: 'Protinho', buttonTitle: 'Começar', nextPage: 'PlantCRUD',
                subtitle: 'Agora vamos começar a te ajudar a cuidar das suas plantas com muito cuidado.',
            });
        } else {
            Alert.alert('Você precisa informar o seu nome!');
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
                            onChangeText={handleInputChange} value={name}
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