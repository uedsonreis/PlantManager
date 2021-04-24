import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Props extends RectButtonProps {
    title: string;
    hour: string;
    photo: string;
}

export default function PlantSmallCard({ title, hour, photo, ...rest }: Props) {

    return (
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

});