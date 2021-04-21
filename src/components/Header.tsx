import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/uedson.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Header() {

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={[styles.greeting, styles.userName]}>Uedson</Text>
            </View>

            <Image style={styles.avatar} source={userImg} />
            
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight(),
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },

    userName: {
        lineHeight: 40,
        fontFamily: fonts.heading,
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

});