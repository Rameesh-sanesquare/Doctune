import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const MScreens = createStackNavigator();
function MainScreen({ isLogged }) {
    if (isLogged) {
        return (
            <MScreens.Navigator>
                <MScreens.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        title: null,
                        headerTransparent: true,
                        headerShown: false,
                    }}
                />
                <MScreens.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: null,
                        headerTransparent: true,
                        headerShown: false,
                    }}
                />
                <MScreens.Screen
                    name='Login'
                    component={Login}
                    options={{
                        title: null,
                        headerTransparent: true,
                        headerShown: false,
                    }}
                />
                <MScreens.Screen
                    name='SignUp'
                    component={SignUp}
                    options={{
                        title: null,
                        headerTransparent: true,
                        headerShown: false,
                    }}
                />
            </MScreens.Navigator>
        )
    } else {
        return (
            <MScreens.Navigator>
                <MScreens.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: null,
                        headerTransparent: true,
                        headerShown: false,
                    }}
                />
                <MScreens.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        title: null,
                        headerTransparent: true,
                        headerShown: false,
                    }}
                />
                <MScreens.Screen
                    name='Login'
                    component={Login}
                    options={{
                        title: null,
                        headerTransparent: true,
                        headerShown: false,
                    }}
                />
                <MScreens.Screen
                    name='SignUp'
                    component={SignUp}
                    options={{
                        title: null,
                        headerTransparent: true,
                        headerShown: false,
                    }}
                />
            </MScreens.Navigator>
        )
    }
}
export default MainScreen;