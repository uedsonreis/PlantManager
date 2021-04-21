import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
    },

    form: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 54,
        justifyContent: 'center',
    },

    header: {
        alignItems: 'center',
    },

    emoji: {
        fontSize: 44,
    },

    title: {
        fontSize: 24,
        marginTop: 20,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
    },

    input: {
        padding: 10,
        fontSize: 18,
        width: '100%',
        marginTop: 50,
        textAlign: 'center',
        borderBottomWidth: 1,
        color: colors.heading,
        borderColor: colors.gray,
    },

    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    },

});