import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import userImg from '../assets/uedson.png';
import { userRepository } from '../repositories';

export default function Header() {

    const [user, setUser] = React.useState<{name: string}>();
    
    React.useEffect(() => {
        userRepository.getUser().then(user => setUser(user));
    }, []);

    if (!user) return <></>;

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={[styles.greeting, styles.userName]}>{user.name}</Text>
            </View>

            <Image style={styles.avatar} source={userImg} />
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 10,
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