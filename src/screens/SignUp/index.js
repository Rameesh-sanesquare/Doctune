import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CustomInput from '../../components/SignupFields'
import SubmitButton from '../../components/SubmitButton'
import icons from '../../constants/icons';
import styles from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
import { isEmail } from '../../actions/commonFunctions'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: null,
            password: null,
            rePassword: null,
            errorEmail: null,
            errorPassword: null,
            errorRePassword: null
        }
    }
    componentWillUnmount() {
        this.setState({
            mail: null,
            password: null,
            rePassword: null,
            errorEmail: null,
            errorPassword: null,
            errorRePassword: null
        })
    }
    onSuccess = () => {
        Alert.alert(
            "Success",
            "You have succesfully registered",
            [
                {
                    text: "OK",
                    onPress: () => { this.props.navigation.navigate("Login") },
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () => { this.props.navigation.navigate("Login") },
            }
        );
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
                if (this.state.rePassword != null) {
                    if (this.state.rePassword != text) {
                        this.setState({
                            errorRePassword: "Your password and re-entered password do not match."
                        })
                    } else {
                        this.setState({
                            errorRePassword: undefined
                        })
                    }
                }
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
    validateRePassword = (text) => {
        if (text.length > 0) {
            if (text.length >= 4) {
                if (this.state.password != null) {
                    if (this.state.password === text) {
                        this.setState({
                            rePassword: text,
                            errorRePassword: undefined
                        })
                    } else {
                        this.setState({
                            errorRePassword: "Your password and re-entered password do not match."
                        })
                    }
                } else {
                    this.setState({
                        rePassword: text,
                        errorRePassword: undefined
                    })
                }

            } else {
                this.setState({
                    errorRePassword: "password must be minimum 4 characters length"
                })
            }
        } else {
            this.setState({
                errorRePassword: "Password is required"
            })
        }
    }
    registerUser = async () => {
        AsyncStorage.getItem('registeredUsers', (error, result) => {
            let newUser = {
                mail: this.state.mail,
                password: this.state.password
            }
            if (result !== null) {
                var newUsers = JSON.parse(result);
                if (newUsers.filter(item => item.mail == this.state.mail).length == 0) {
                    newUsers.push(newUser);
                    AsyncStorage.setItem('registeredUsers', JSON.stringify(newUsers));
                    this.onSuccess()
                } else {
                    Alert.alert(
                        "Register Failed",
                        "Email is already registered",
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
            } else {
                newUser = [{
                    mail: this.state.mail,
                    password: this.state.password
                }]
                AsyncStorage.setItem('registeredUsers', JSON.stringify(newUser));
                this.onSuccess();
            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.sec1}>
                        <Text style={styles.heading}>Let's Get You Started</Text>
                        <Text style={styles.subheading}>With a New Account</Text>
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
                            label="New Password"
                            icon={icons.lock}
                            max={50}
                            show={true} />
                        {this.state.errorPassword &&
                            <Text style={styles.errorText}>{this.state.errorPassword}</Text>
                        }
                        <CustomInput
                            onchangeTextHandler={(text) => { this.validateRePassword(text) }}
                            label="Re-enter Password"
                            icon={icons.lock}
                            max={50}
                            show={true} />
                        {this.state.errorRePassword &&
                            <Text style={styles.errorText}>{this.state.errorRePassword}</Text>
                        }
                        <View style={{ paddingTop: 20 }}>
                            <SubmitButton
                                disabled={
                                    this.state.errorEmail !== undefined || this.state.errorPassword !== undefined ||
                                    this.state.errorRePassword !== undefined
                                }
                                width={"100%"}
                                onPressHandler={this.registerUser}
                                PROP={'Sign Up'}
                                navigation={this.props.navigation}
                                icon={icons.arrow}
                            />
                        </View>
                    </View>
                    <View style={styles.sec2}>
                        <Text style={styles.loginText}>I Already Have Account?
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate("Login") }}
                            >
                                <Text style={styles.loginText2}>{'  Login here'}</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default SignUp;