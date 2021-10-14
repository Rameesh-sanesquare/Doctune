import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
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
    logoutBtn: {
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        right: 20
    },
    logoutIcn: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        tintColor: '#173756'
    },
    logoutText: {
        color: '#173756',
        fontFamily: 'Poppins-Medium',
        fontSize: 15
    }
})