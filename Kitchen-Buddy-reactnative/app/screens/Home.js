import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
            <View style={{ flexDirection: 'column', marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 1.8, alignItems: 'center', justifyContent: 'center' }} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(item) =>
                        <TouchableOpacity onPress={() => props.navigation.navigate('home')} activeOpacity={0.9} style={{
                            marginBottom: RFPercentage(1.5),
                            marginLeft: RFPercentage(1),
                            marginRight: RFPercentage(2),
                            marginTop: RFPercentage(1),
                            backgroundColor: 'white',
                            shadowColor: '#b5b5b5',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.8,
                            shadowRadius: 3,
                            elevation: 7,
                            borderRadius: RFPercentage(4),
                            width: RFPercentage(17.5), height: RFPercentage(25),
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }} >
                        </TouchableOpacity>

                    }
                />

            </View>


        </View >
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