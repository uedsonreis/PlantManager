import React from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import colors from '../../styles/colors';

export default function UserIdentification() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                
                <View style={styles.form}>
                    
                    <Text style={styles.emoji}>
                        😁
                    </Text>

                    <TextInput
                        style={styles.input}
                    />

                </View>

            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
        width: '100%',
    },

    form: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 54,
        justifyContent: 'center',
    },

    emoji: {
        fontSize: 44,
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
    },

});