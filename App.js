/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/navigation/MainSreen';
import AsyncStorage from '@react-native-community/async-storage';
const App = () => {
  const [isLoggedIN, setisLoggedIN] = useState(false);
  useEffect(() => {
    async () => {
      const TOKEN = await AsyncStorage.getItem("TOKEN");
      if (TOKEN != null) {
        setisLoggedIN(true)
      } else {
        setisLoggedIN(false)
      }
    }
  }, [])
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainScreen isLogged={isLoggedIN} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
