import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    heading: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 26,
        color: '#1F3753',
        marginTop: 50
    },
    subheading: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: '#59C4A5',
    },
    sec1: {
        flex: .8,
        justifyContent: 'center'
    },
    sec2: {
        flex: .10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    loginText: {
        fontFamily: 'Poppins-Regular',
        color: '#173756',
        fontSize: 12,
    },
    loginText2: {
        fontFamily: 'Poppins-Regular',
        color: '#59C4A5',
        fontSize: 12,
        alignSelf: 'center',
        top: 6
    },
    errorText: {
        color: 'red',
        fontSize: 10,
        marginVertical: 5,
    }
})