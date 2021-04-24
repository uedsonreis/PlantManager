import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    emoji: {
        fontSize: 72,
    },

    title: {
        fontSize: 22,
        marginTop: 15,
        lineHeight: 38,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
    },

    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 10,
        fontFamily: fonts.text,
        color: colors.heading,
    },

    footer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },

});