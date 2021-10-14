import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import icons from '../../constants/icons';
import Geolocation from '@react-native-community/geolocation';
import styles from "./styles";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Detect your Location'
        }
    }
    getOneTimeLocation = () => {
        this.setState({
            location: 'Loading...'
        })
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLongitude =
                    JSON.stringify(position.coords.longitude);
                const currentLatitude =
                    JSON.stringify(position.coords.latitude);
                this.setCurrentLocation(Number(currentLatitude), Number(currentLongitude))
            },
            (error) => {
                this.setState({
                    location: 'Detect your location'
                })
                if (error.message == "No location provider available.")
                    alert("Make sure your GPS is enabled")
                else {
                    // console.log(error)
                }
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    };
    setCurrentLocation = (latitude, longitude) => {
        try {
            fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + latitude + ','
                + longitude + '&key=AIzaSyDDiihOeHlzR-1zqG1bbI_KXMbig7Y5LYg')
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.results[0].address_components[0].long_name != "Unnamed Road")
                        this.setState({
                            location: responseJson.results[0].address_components[0].long_name,
                        })
                    else if (responseJson.results[0].address_components[1].long_name != "Unnamed Road") {
                        this.setState({
                            location: responseJson.results[0].address_components[1].long_name,
                        })
                    }
                    else if (responseJson.results[0].address_components[2].long_name != "Unnamed Road") {
                        this.setState({
                            location: responseJson.results[0].address_components[2].long_name,
                        })
                    } else {
                        this.setState({
                            location: "Unnamed Road",
                        })
                    }

                }).catch(error => {
                    // console.log(error)
                    this.setState({
                        location: 'Detect your location'
                    })
                })
        } catch (error) {
            // console.log(error)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.locationSec}
                    disabled={this.state.location == "Loading..."}
                    onPress={() => { this.getOneTimeLocation() }}>
                    <Image
                        style={{
                            width: 21,
                            height: 21,
                        }}
                        source={icons.locationPick} />
                    <Text style={styles.locationText}>{this.state.location}</Text>
                </TouchableOpacity>
                <View style={styles.sec1}>
                    <View>
                        <Text style={styles.title1}>Welcome To </Text>
                    </View>
                    <View style={styles.title2Sec}>
                        <Text style={styles.title2}> Doctune Health Care</Text>
                    </View>

                </View>
                <View style={styles.sec2}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { this.props.navigation.navigate("SignUp") }}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.btnText}>
                                Get Started
                            </Text>
                            <View style={styles.btnIcnContainer}>
                                <Image style={styles.btnIcon} source={icons.arrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Home;