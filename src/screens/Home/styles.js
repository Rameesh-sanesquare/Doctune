import { StyleSheet } from "react-native";
import { width } from '../../constants/theme'
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    sec1: {
        flex: .8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sec2: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title1: {
        color: '#173756',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18
    },
    title2Sec: {
        marginVertical: 5
    },
    title2: {
        color: '#10a986',
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonContainer: {
        width: width - 60,
        padding: 8,
        backgroundColor: '#FFFFF',
        borderColor: '#10a986',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    btnText: {
        color: '#10a986',
        fontFamily: 'Poppins-Medium'
    },
    btnIcnContainer: {
        position: 'absolute',
        right: 20
    },
    btnIcon: {
        width: 13,
        height: 13,
        tintColor: '#10a986'
    },
    locationSec: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    locationText: {
        color: '#10a986',
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        marginLeft: 5
    }
})