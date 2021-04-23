import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.shape,
        justifyContent: 'space-between',
    },

    plantInfo: {
        flex: 1,
        paddingVertical: 50,
        alignItems: 'center',
        paddingHorizontal: 30,
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },

    controller: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        paddingBottom: getBottomSpace() || 20,
    },

    plantName: {
        fontSize: 24,
        marginTop: 15,
        color: colors.heading,
        fontFamily: fonts.heading,
    },

    plantAbout: {
        fontSize: 17,
        marginTop: 10,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
    },

    tipContainer: {
        bottom: 60,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.blue_light,
    },

    tipImage: {
        width: 56,
        height: 56,
    },

    tipText: {
        flex: 1,
        fontSize: 17,
        marginLeft: 20,
        color: colors.blue,
        textAlign: 'justify',
        fontFamily: fonts.text,
    },

    alertLabel: {
        fontSize: 12,
        marginBottom: 5,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.complement,
    },

    dateTimePickerButton: {
        width: '100%',
        paddingVertical: 40,
        alignItems: 'center',
    },
    
    dateTimePickerText: {
        fontSize: 24,
        color: colors.heading,
        fontFamily: fonts.text,
    },

});