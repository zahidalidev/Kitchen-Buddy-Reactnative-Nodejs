/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, LogBox } from 'react-native';
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
import AddIngredients from './app/screens/AddIngredients';
import BarcodeAddIngredients from './app/screens/BarcodeAddIngredients';
import UpdateIngredients from './app/screens/UpdateIngredients';
import IngredientDetails from './app/screens/IngredientDetails';
import ExpireSoon from './app/screens/ExpireSoon';
import Categories from './app/screens/Categories';

const Stack = createDrawerNavigator();
const Tab = createBottomTabNavigator();
LogBox.ignoreAllLogs(true)

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
        style: { height: 60 },
        labelStyle: { fontSize: RFPercentage(1.4), fontWeight: '500', marginBottom: RFPercentage(1.2) },
        activeTintColor: colors.primary, inactiveTintColor: colors.grey, tabStyle: { backgroundColor: colors.white, fontSize: 30 }
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
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={AddIngredients}
          options={{
            tabBarLabel: 'Add Ingredient',
            tabBarIcon: ({ color, size }) => (
              <Foundation
                style={{ marginTop: 13 }}
                name="plus"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="scaBarcode"
          component={BarcodeAddIngredients}
          options={{
            tabBarLabel: 'Barcode Scan',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                style={{ marginTop: 13 }}
                name="barcode-scan"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="categories"
          component={Categories}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                style={{ marginTop: 13 }}
                name="category"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="expireSoon"
          component={ExpireSoon}
          options={{
            tabBarLabel: 'Expire Soon',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                style={{ marginTop: 13 }}
                name="clock-alert"
                color={color}
                size={size}
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
        <Stack.Navigator initialRouteName={'login'} drawerType="front" overlayColor="transparent" edgeWidth={100} drawerStyle={{
          backgroundColor: colors.white,
          width: 0
        }}
        >
          <Stack.Screen name="home" >{(props) => <HomeTabs {...props} />}</Stack.Screen>
          <Stack.Screen name="login" >{(props) => <Login {...props} />}</Stack.Screen>
          <Stack.Screen name="signup" >{(props) => <SignUp {...props} />}</Stack.Screen>
          <Stack.Screen name="ingredientDetails" >{(props) => <IngredientDetails {...props} />}</Stack.Screen>
          <Stack.Screen name="updateIngredients" >{(props) => <UpdateIngredients {...props} />}</Stack.Screen>
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
