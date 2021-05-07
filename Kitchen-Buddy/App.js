/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize"
import AnimatedSplash from "react-native-animated-splash-screen";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import colors from './app/config/colors';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import Home from './app/screens/Home';

const Stack = createDrawerNavigator();

export default function App() {

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // SplashScreen.preventAutoHideAsync();

  }, [])

  const cacheResourcesAsync = async () => {
    await performAPICalls();
    await downloadAssets();

    setTimeout(() => {
      setIsReady(true);
    }, 2000)
  };

  // Put any code you need to prepare your app in these functions
  async function performAPICalls() { }
  async function downloadAssets() { }

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isReady}
      onLoad={cacheResourcesAsync()}
      logoImage={require("./assets/images/splash.gif")}
      backgroundColor={colors.primary}
      logoHeight={RFPercentage(52)}
      logoWidth={RFPercentage(52)}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login" drawerType="front" overlayColor="transparent" edgeWidth={100} drawerStyle={{
          backgroundColor: colors.white,
          width: 0
        }}
        >
          <Stack.Screen name="home" >{(props) => <Home {...props} />}</Stack.Screen>
          <Stack.Screen name="login" >{(props) => <Login {...props} />}</Stack.Screen>
          <Stack.Screen name="signup" >{(props) => <SignUp {...props} />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AnimatedSplash>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashScreen: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
