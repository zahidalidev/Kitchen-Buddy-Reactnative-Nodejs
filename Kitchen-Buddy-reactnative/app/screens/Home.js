import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import banner from "../../assets/images/order-grocery-small.jpg"
import Card from '../components/Card';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Home(props) {
    const [searchValue, setSearchValue] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const getIngredients = () => {
        setIngredients([
            {
                id: 1,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },
            {
                id: 2,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },
            {
                id: 3,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },
            {
                id: 4,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },
            {
                id: 5,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            }, {
                id: 6,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },
            {
                id: 7,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },
            {
                id: 8,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },
            {
                id: 9,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },
            {
                id: 10,
                name: "chicken",
                category: "meat",
                location: "fridge",
                confectionType: "fresh",
                expirationDate: "22-02-2021"
            },

        ]);
    }

    useEffect(() => {
        getIngredients();
    }, []);

    const handleSubmit = () => {
        props.navigation.navigate('home')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primaryLight} />

            {/* Top container */}
            <View style={{ backgroundColor: colors.primary, flex: 0.7, justifyContent: 'flex-end' }} >
                <ImageBackground style={{ marginBottom: RFPercentage(1), width: windowWidth, height: RFPercentage(30), alignItems: 'center', justifyContent: 'flex-end' }} source={banner} >
                    <View style={{ flexDirection: 'column' }} >
                        {/* Search feilds */}
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
                    style={{ marginTop: RFPercentage(3) }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={ingredients}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => props.navigation.navigate('home')} activeOpacity={0.9} style={{
                            margin: RFPercentage(1),
                            marginBottom: RFPercentage(1.5),
                            marginRight: RFPercentage(2),

                            backgroundColor: "white",
                            // backgroundColor: (item.id % 2 == 0) ? colors.primary : "white",
                            shadowColor: '#b5b5b5',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.8,
                            shadowRadius: 3,
                            elevation: 7,

                            borderRadius: RFPercentage(2),
                            width: RFPercentage(20), height: RFPercentage(15),
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }} >
                            <Card title={item.name} confectionType={item.confectionType} expirationDate={item.expirationDate} location={item.location} category={item.category} />
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