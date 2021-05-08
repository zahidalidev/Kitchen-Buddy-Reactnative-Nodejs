import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import banner from "../../assets/images/order-grocery-small.jpg"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Home(props) {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = () => {
        props.navigation.navigate('home')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primaryLight} />

            {/* Kitchen buddy top container */}
            <View style={{ backgroundColor: colors.primary, flex: 0.7, justifyContent: 'flex-end' }} >
                <ImageBackground style={{ marginBottom: RFPercentage(1), width: windowWidth, height: RFPercentage(30), alignItems: 'center', justifyContent: 'flex-end' }} source={banner} >
                    <View style={{ flexDirection: 'column' }} >
                        {/* Text feilds */}
                        <View style={{ width: "85%", bottom: RFPercentage(7.5) }} >
                            <AppTextInput

                                placeHolder="Search"
                                width="100%"
                                value={searchValue}
                                onChange={(text) => setSearchValue(text)}
                                icon="magnify"
                            />
                        </View>
                    </View>
                </ ImageBackground>
            </View>

            {/* Bottom Contaienr */}
            <View style={{ marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 1.8, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >




            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    loginButton: { marginTop: RFPercentage(5), width: "85%", flex: 1, alignItems: "flex-end" }
})

export default Home;