import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
const submitButton = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 8 }}
      onPress={() => { props.onPressHandler() }}>
      <View style={[{ width: props.width, padding: 18, backgroundColor: '#173756', justifyContent: 'center', alignItems: 'center', borderRadius: 70 }, props.disabled ? { opacity: .5 } : null]}>
        <Text style={{ color: '#ffffff' }}>
          {props.PROP}
        </Text>
        <View style={{ position: 'absolute', right: 20 }}>
          <Image style={{ width: 13, height: 13 }} source={props.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default submitButton;