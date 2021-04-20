import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 32,
        marginTop: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
    },
    
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading,
    },

    image: {
        width: 292,
        height: 284,
    },

});