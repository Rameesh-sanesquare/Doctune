import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CustomInput from '../../components/SignupFields'
import SubmitButton from '../../components/SubmitButton'
import icons from '../../constants/icons';
import styles from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
import { isEmail } from '../../actions/commonFunctions'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: null,
            password: null,
            rePassword: null,
            usersList: [],
            errorEmail: null,
            errorPassword: null,
        }
    }
    async componentDidMount() {
        let usersList = await AsyncStorage.getItem('registeredUsers');
        this.setState({
            usersList: JSON.parse(usersList)
        }, () => { console.log(this.state.usersList) })
    }
    validateMail = (text) => {
        if (text.length > 0) {
            if (isEmail(text)) {
                this.setState({
                    mail: text.toLowerCase(),
                    errorEmail: undefined
                })
            } else {
                this.setState({
                    errorEmail: "Invalid email format"
                })
            }
        } else {
            this.setState({
                errorEmail: "Email is required"
            })
        }
    }
    validatePassword = (text) => {
        if (text.length > 0) {
            if (text.length >= 4) {
                this.setState({
                    password: text,
                    errorPassword: undefined
                })
            } else {
                this.setState({
                    errorPassword: "password must be minimum 4 characters length"
                })
            }
        } else {
            this.setState({
                errorPassword: "Password is required"
            })
        }
    }
    signin = async () => {
        if (this.state.usersList.filter(item => item.mail == this.state.mail && item.password == this.state.password).length == 1) {
            await AsyncStorage.setItem("TOKEN", "DHC_TOKEN");
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard' }],
            });

        } else {
            Alert.alert(
                "Login Failed",
                "Invalid email/password",
                [
                    {
                        text: "OK",
                        onPress: () => { },
                        style: "cancel",
                    },
                ],
                {
                    cancelable: true,
                }
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.sec1}>
                        <Text style={styles.heading}>Log in</Text>
                        <Text style={styles.subheading}>to your Doctune account</Text>
                        <CustomInput
                            onchangeTextHandler={(text) => { this.validateMail(text) }}
                            label="Email"
                            icon={icons.mail}
                            max={100} />
                        {this.state.errorEmail &&
                            <Text style={styles.errorText}>{this.state.errorEmail}</Text>
                        }
                        <CustomInput
                            onchangeTextHandler={(text) => { this.validatePassword(text) }}
                            label=" Password"
                            icon={icons.lock}
                            max={50}
                            show={true} />
                        {this.state.errorPassword &&
                            <Text style={styles.errorText}>{this.state.errorPassword}</Text>
                        }
                        <View style={{ paddingTop: 20 }}>
                            <SubmitButton
                                disabled={
                                    this.state.errorEmail !== undefined || this.state.errorPassword !== undefined
                                }
                                width={"100%"}
                                onPressHandler={this.signin}
                                PROP={'Log In'}
                                navigation={this.props.navigation}
                                icon={icons.arrow}
                            />
                        </View>
                    </View>
                    <View style={styles.sec2}>
                        <Text style={styles.loginText}>Don’t have an account?
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate("SignUp") }}
                            >
                                <Text style={styles.loginText2}>{'  Sign Up '}</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Login;