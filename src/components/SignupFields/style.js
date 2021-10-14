import { StyleSheet, } from 'react-native';
export default StyleSheet.create({
  inputContainer: {
    height: 50,
    borderColor: '#7B7F8B',
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: "100%",
    backgroundColor: "#ffffff",
    marginTop: 20,
    fontSize: 12
  },
  inputBox: {
    paddingLeft: 10,
    width: '75%'
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  passwordState: {
    fontFamily: 'Poppins-Medium',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 10,
    lineHeight: 15
  }
})