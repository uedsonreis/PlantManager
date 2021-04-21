import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    content: {
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 17,
        marginTop: 15,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.heading,
    },

});