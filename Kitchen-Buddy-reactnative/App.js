/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize"
import AnimatedSplash from "react-native-animated-splash-screen";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Foundation } from "@expo/vector-icons"

import colors from './app/config/colors';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import Home from './app/screens/Home';

const Stack = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [isReady, setIsReady] = useState(false)

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

  function HomeTabs() {
    return (
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        style: { height: 70 },
        labelStyle: { fontSize: RFPercentage(1.8), fontWeight: '500', marginBottom: RFPercentage(1.5) },
        activeTintColor: '#acdee0', inactiveTintColor: '#C3C3C3', tabStyle: { backgroundColor: "black", fontSize: 40 }
      }} >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                style={{ marginTop: 13 }}
                name="home"
                color={color}
                size={size + 2}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Home}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color, size }) => (
              <Foundation
                style={{ marginTop: 13 }}
                name="clipboard-notes"
                color={color}
                size={size + 2}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                style={{ marginTop: 13 }}
                name="account-circle"
                color={color}
                size={size + 2}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                style={{ marginTop: 13 }}
                name="settings"
                color={color}
                size={size + 2}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

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
          <Stack.Screen name="home" >{(props) => <HomeTabs {...props} />}</Stack.Screen>
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
  }
});