import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';

import colors from '../config/colors';
import Card from '../components/Card';
import ReactNativeCrossPicker from 'react-native-cross-picker';
import AppTextButton from '../components/AppTextButton';
import GetSqlDate from '../components/commmon/GetSqlDate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getIngredientsByFilters } from "../services/ingredientsService";

function Categories(props) {
    const [activityIndic, setActivityIndic] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [confection, setConfection] = useState('')

    const categoryList = [
        { label: "fruit", value: "fruit" },
        { label: "vegetable", value: "vegetable" },
        { label: "dairy", value: "dairy" },
        { label: "fish", value: "fish" },
        { label: "meat", value: "meat" },
        { label: "liquid", value: "liquid" },
        { label: "all", value: "all" }
    ];

    const locationList = [
        { label: "fridge", value: "fridge" },
        { label: "freezer", value: "freezer" },
        { label: "pantry", value: "pantry" },
        { label: "all", value: "all" }
    ];

    const confectionList = [
        { label: "fresh", value: "fresh" },
        { label: "canned", value: "canned" },
        { label: "frozen", value: "frozen" },
        { label: "cured", value: "cured" },
        { label: "all", value: "all" }
    ];

    const getIngredients = async () => {
        try {
            setActivityIndic(true)
            const userId = await AsyncStorage.getItem('token');
            let category1 = category === '' ? 'all' : category;
            let location1 = location === '' ? 'all' : location;
            let confection1 = confection === '' ? 'all' : confection;

            const { data } = await getIngredientsByFilters(userId, category1, location1, confection1);
            const allIngredients = data.map(item => {
                item.expirationDate = GetSqlDate(new Date(item.expirationDate));
                return item;
            })
            setIngredients(allIngredients);
        } catch (error) {
            console.log("Error All ingredients: ", error)
        }
        setActivityIndic(false);

    }

    useEffect(() => {
        getIngredients();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primary} />

            {/* Top container */}
            {/* Kitchen buddy top container */}
            <View style={{ backgroundColor: colors.primary, height: RFPercentage(16), width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                <Text style={{ top: RFPercentage(2), color: colors.white, fontSize: Platform.OS === "ios" ? RFPercentage(2.5) : RFPercentage(4.5) }} >Apply Filters</Text>
            </View>

            {/* Bottom Contaienr */}
            <View style={{ flexDirection: 'column', marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 1.8, alignItems: 'center', justifyContent: 'center' }} >
                {/* Fliters */}

                {/* drop down Category */}
                <View style={{ flexDirection: "row", marginTop: RFPercentage(5), width: "85%", justifyContent: "space-evenly" }} >
                    <View style={{ flexDirection: "column", width: "45%" }} >
                        <ReactNativeCrossPicker
                            placeHolderSize={RFPercentage(2.2)}
                            modalTextStyle={{ color: colors.primary }}
                            mainComponentStyle={{ borderColor: colors.primary, borderWidth: 1 }}
                            iconComponent={() => null}
                            items={categoryList}
                            setItem={setCategory} selectedItem={category}
                            placeholder="Select Category" modalMarginTop={RFPercentage(17)}
                        />
                    </View>

                    {/* drop down location */}
                    <View style={{ flexDirection: "column", width: "45%" }} >
                        <ReactNativeCrossPicker
                            placeHolderSize={RFPercentage(2.2)}
                            modalTextStyle={{ color: colors.primary }}
                            mainComponentStyle={{ height: RFPercentage(6), borderColor: colors.primary, borderWidth: 1 }}
                            iconComponent={() => null}
                            items={locationList}
                            setItem={setLocation} selectedItem={location}
                            placeholder="Select Location" modalMarginTop={RFPercentage(17)}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: RFPercentage(2), width: "85%", justifyContent: "space-evenly" }} >

                    {/* drop down confection */}
                    <View style={{ flexDirection: "column", width: "45%" }} >
                        <ReactNativeCrossPicker
                            placeHolderSize={RFPercentage(2.2)}
                            modalTextStyle={{ color: colors.primary }}
                            mainComponentStyle={{ height: RFPercentage(6), borderColor: colors.primary, borderWidth: 1 }}
                            iconComponent={() => null}
                            items={confectionList}
                            setItem={setConfection} selectedItem={confection}
                            placeholder="Select Confection" modalMarginTop={RFPercentage(24)}
                        />
                    </View>

                    {/* search button */}
                    <View style={{ flexDirection: "column", width: "45%", alignItems: "center", justifyContent: "center" }} >
                        <AppTextButton onSubmit={() => getIngredients()} name="Search" width="80%" buttonStyle={{ backgroundColor: colors.primary, borderRadius: 25, height: RFPercentage(5.5) }} />
                    </View>

                </View>

                {activityIndic ?
                    <View style={{ marginTop: RFPercentage(3), flex: 1, justifyContent: "center", alignItems: "center" }} >
                        <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
                    </View>
                    :
                    <FlatList
                        style={{ marginTop: RFPercentage(3) }}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={ingredients}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => props.navigation.navigate('ingredientDetails', { item })} activeOpacity={0.9} style={{
                                margin: RFPercentage(1),
                                marginBottom: RFPercentage(1.5),
                                marginRight: RFPercentage(2),

                                backgroundColor: "white",
                                shadowColor: '#b5b5b5',
                                shadowOffset: { width: 0, height: 0 },
                                shadowOpacity: 0.8,
                                shadowRadius: 3,
                                elevation: 7,

                                borderRadius: RFPercentage(2),
                                width: RFPercentage(20), height: RFPercentage(14),
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }} >
                                <Card title={item.name} confectionType={item.confectionType} expirationDate={item.expirationDate} location={item.location} category={item.category} />
                            </TouchableOpacity>

                        }
                    />
                }

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

export default Categories;