import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    
    container: {
        flex: 1,
    },

    wrapper: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-around',
    },

    title: {
        fontSize: 28,
        marginTop: 38,
        lineHeight: 34,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },

    image: {
        width: Dimensions.get("window").width * 0.9,
    },

});