import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SvgFromUri } from 'react-native-svg';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps, Swipeable } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Props extends RectButtonProps {
    hour: string;
    title: string;
    photo: string;
}

export default function PlantSmallCard({ title, hour, photo, ...rest }: Props) {

    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <RectButton style={styles.buttonRemove} onPress={rest.onPress}>
                        <Ionicons name="trash" size={32} color={colors.white} />       
                    </RectButton>
                </Animated.View>
            )}
        >
            <RectButton style={styles.container} {...rest}>
                
                <SvgFromUri uri={photo} height={50} width={50} />
                
                <Text style={styles.title}>{title}</Text>
                
                <View style={styles.details}>
                    <Text style={styles.timeLabel}>
                        Regar às 
                    </Text>
                    <Text style={styles.time}>
                        {hour}
                    </Text>
                </View>

            </RectButton>
        </Swipeable>
    );

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        borderRadius: 20,
        marginVertical: 5,
        paddingVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.shape,
    },

    title: {
        flex: 1,
        fontSize: 17,
        marginLeft: 10,
        color: colors.heading,
        fontFamily: fonts.heading,
    },

    details: {
        marginRight: 10,
        alignItems: 'flex-end',
    },

    timeLabel: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light,
    },

    time: {
        marginTop: 5,
        fontSize: 16,
        color: colors.body_dark,
        fontFamily: fonts.heading,
    },

    buttonRemove: {
        right: 20,
        width: 90,
        height: 80,
        paddingRight: 20,
        borderRadius: 20,
        marginVertical: 15,
        position: 'relative',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: colors.red,
    },

});