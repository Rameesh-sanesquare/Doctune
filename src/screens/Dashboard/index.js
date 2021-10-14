import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import icons from "../../constants/icons";
import styles from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onLogout = async () => {
        await AsyncStorage.removeItem("TOKEN");
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.logoutBtn} onPress={() => this.onLogout()}>
                    <Image style={styles.logoutIcn} source={icons.logout}></Image>
                    <Text style={styles.logoutText}>{" Logout"}</Text>
                </TouchableOpacity>
                <Text style={styles.heading}>Welcome To</Text>
                <Text style={styles.subheading}>Doctune Healthcare</Text>
            </View>
        )
    }
}
export default DashBoard;