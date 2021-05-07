import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { useEffect } from 'react';
import { RFPercentage } from "react-native-responsive-fontsize"
import AnimatedSplash from "react-native-animated-splash-screen";

import colors from './app/config/colors';

export default function App() {

  const [isReady, setIsReady] = useState(false)

  // useEffect(() => {
  //   SplashScreen.preventAutoHideAsync();

  // }, [])

  // const _cacheSplashResourcesAsync = async () => {
  //   const gif = require('./assets/images/splash.gif');
  //   return Asset.fromModule(gif).downloadAsync();
  // };

  // const _cacheResourcesAsync = async () => {
  //   SplashScreen.hideAsync();
  //   const images = [
  //     require('./assets/images/icon.png'),
  //     require('./assets/images/adaptive-icon.png'),
  //   ];

  //   const cacheImages = images.map(image => {
  //     return Asset.fromModule(image).downloadAsync();
  //   });

  //   await Promise.all(cacheImages);
  //   setTimeout(() => {
  //     setIsReady(true)

  //   }, 2000)
  // };


  // if (!isReady) {
  //   return (
  //     <View style={styles.splashScreen}>
  //       <Image
  //         source={require('./assets/images/splash.gif')}
  //         onLoad={_cacheResourcesAsync}
  //         style={{ bottom: RFPercentage(5), left: RFPercentage(2) }}
  //       />
  //     </View>
  //   );
  // }

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000)
  }, [])

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isReady}
      logoImage={require("./assets/images/splash.gif")}
      backgroundColor={colors.primary}
      logoHeight={RFPercentage(52)}
      logoWidth={RFPercentage(52)}
    >
      <View style={styles.container}>
        <Text>Kitcen Buddy</Text>
      </View>
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
