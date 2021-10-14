import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import style from './style';
import { spaceCutter } from '../../actions/commonFunctions'
class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showValue: this.props.show,
            passwordState: "show",
            showColor: '#C4C4C4'
        }
    }
    componentDidMount() {
        if (this.props.value == null) {
            this.setState({
                showColor: '#C4C4C4'
            })
        } else {
            this.setState({
                showColor: '#59C4A5'
            })
        }
    }
    render() {
        return (
            <View style={style.inputContainer}>
                <Image style={style.icon} source={this.props.icon}></Image>
                <TextInput
                    maxLength={this.props.max ? this.props.max : 255}
                    style={style.inputBox}
                    placeholderTextColor="#828282"
                    placeholder={this.props.label}
                    secureTextEntry={this.state.showValue}
                    onChangeText={(text) => {
                        if (text.length == 0) {
                            this.setState({
                                showColor: '#C4C4C4'
                            })
                        } else {
                            this.setState({
                                showColor: '#59C4A5'
                            })
                        }
                        this.props.onchangeTextHandler(spaceCutter(text))
                    }}
                />
                {
                    this.props.show && (
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                showValue: !this.state.showValue,
                            })
                            if (this.state.passwordState === "show") {
                                this.setState({
                                    passwordState: "hide"
                                })
                            } else {
                                this.setState({
                                    passwordState: "show"
                                })
                            }
                        }}><Text style={[style.passwordState, { color: this.state.showColor }]}>{this.state.passwordState}</Text>
                        </TouchableOpacity>)
                }
            </View>
        );
    }
}
export default CustomInput;