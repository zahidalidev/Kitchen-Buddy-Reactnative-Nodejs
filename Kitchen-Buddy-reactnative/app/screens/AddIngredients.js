import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReactNativeCrossPicker from "react-native-cross-picker"

import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';

function AddIngredients(props) {
    const [name, setName] = useState('');
    const [brandName, setBrandName] = useState('');
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [confection, setConfection] = useState('')
    const [openPacked, setOpenPacked] = useState('packed')
    const [ripeness, setRipeness] = useState('')
    const [frozen, setFrozen] = useState('')

    const categoryList = [
        { label: "fruit", value: "fruit" },
        { label: "vegetable", value: "vegetable" },
        { label: "dairy", value: "dairy" },
        { label: "fish", value: "fish" },
        { label: "meat", value: "meat" },
        { label: "liquid", value: "liquid" },
        { label: "other", value: "other" }
    ];

    const locationList = [
        { label: "fridge", value: "fridge" },
        { label: "freezer", value: "freezer" },
        { label: "pantry", value: "pantry" },
        { label: "other", value: "other" }
    ];

    const confectionList = [
        { label: "fresh", value: "fresh" },
        { label: "canned", value: "canned" },
        { label: "frozen", value: "frozen" },
        { label: "cured", value: "cured" },
        { label: "other", value: "other" }
    ];
    const openPackedList = [
        { label: "packed", value: "packed" },
        { label: "open", value: "open" },
    ];
    const ripenessList = [
        { label: "green", value: "green" },
        { label: "ripe/mature", value: "ripe/mature" },
        { label: "advanced", value: "advanced" },
        { label: "too ripe", value: "too ripe" },
    ];
    const frozenList = [
        { label: "yes", value: "yes" },
        { label: "no", value: "no" },
    ];

    const iconCategory = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primary} />

            {/* Kitchen buddy top container */}
            <View style={{ backgroundColor: colors.primary, height: RFPercentage(16), width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                <Text style={{ top: RFPercentage(2), color: colors.white, fontSize: Platform.OS === "ios" ? RFPercentage(2.5) : RFPercentage(4.5) }} >Add Ingredients</Text>
            </View>

            {/* Bottom Contaienr */}
            <View style={{ marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                <ScrollView style={{ width: "100%", marginLeft: "15%", marginTop: RFPercentage(2), }} >
                    <View style={{ flexDirection: "column", marginTop: RFPercentage(6), width: "85%" }} >
                        <View style={{ paddingBottom: RFPercentage(1.2) }} >
                            <Text style={{ fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Name of Ingredient*</Text>
                        </View>
                        <AppTextInput
                            placeHolder="Name"
                            width="100%"
                            value={name}
                            onChange={(text) => setName(text)}
                            borderWidth={1}
                            height={RFPercentage(6)}
                        />
                    </View>
                    <View style={{ flexDirection: "column", marginTop: RFPercentage(2), width: "85%" }} >
                        <View style={{ paddingBottom: RFPercentage(1.2) }} >
                            <Text style={{ fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Brand of Ingredient</Text>
                        </View>
                        <AppTextInput
                            placeHolder="Brand"
                            width="100%"
                            value={brandName}
                            onChange={(text) => setBrandName(text)}
                            borderWidth={1}
                            height={RFPercentage(6)}
                        />
                    </View>

                    {/* drop down Category */}
                    <View style={{ flexDirection: "column", marginTop: RFPercentage(2), width: "85%" }} >
                        <View style={{ paddingBottom: RFPercentage(1.2) }} >
                            <Text style={{ fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Choose Category</Text>
                        </View>
                        <ReactNativeCrossPicker
                            placeHolderSize={RFPercentage(2.2)}
                            modalTextStyle={{ color: colors.primary }}
                            mainComponentStyle={{ borderColor: colors.primary, borderWidth: 1 }}
                            iconComponent={iconCategory}
                            items={categoryList}
                            setItem={setCategory} selectedItem={category}
                            placeholder="Select Category" modalMarginTop={RFPercentage(47)}
                        />
                    </View>

                    {/* drop down location */}
                    <View style={{ flexDirection: "column", marginTop: RFPercentage(2), width: "85%" }} >
                        <View style={{ paddingBottom: RFPercentage(1.2) }} >
                            <Text style={{ fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Choose Location</Text>
                        </View>
                        <ReactNativeCrossPicker
                            placeHolderSize={RFPercentage(2.2)}
                            modalTextStyle={{ color: colors.primary }}
                            mainComponentStyle={{ height: RFPercentage(6), borderColor: colors.primary, borderWidth: 1 }}
                            iconComponent={iconCategory}
                            items={locationList}
                            setItem={setLocation} selectedItem={location}
                            placeholder="Select Location" modalMarginTop={RFPercentage(57)}
                        />
                    </View>

                    {/* drop down confection */}
                    <View style={{ flexDirection: "column", marginTop: RFPercentage(2), width: "85%" }} >
                        <View style={{ paddingBottom: RFPercentage(1.2) }} >
                            <Text style={{ fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Choose Confection type</Text>
                        </View>
                        <ReactNativeCrossPicker
                            placeHolderSize={RFPercentage(2.2)}
                            modalTextStyle={{ color: colors.primary }}
                            mainComponentStyle={{ height: RFPercentage(6), borderColor: colors.primary, borderWidth: 1 }}
                            iconComponent={iconCategory}
                            items={confectionList}
                            setItem={setConfection} selectedItem={confection}
                            placeholder="Select Confection" modalMarginTop={RFPercentage(67)}
                        />
                    </View>

                    {confection === "fresh" ?
                        <View style={{ flexDirection: "column", marginTop: RFPercentage(2), width: "85%" }} >
                            <View style={{ paddingBottom: RFPercentage(1.2) }} >
                                <Text style={{ marginLeft: "10%", fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Choose Ripeness</Text>
                            </View>
                            <ReactNativeCrossPicker
                                placeHolderSize={RFPercentage(2.2)}
                                modalTextStyle={{ color: colors.primary }}
                                mainComponentStyle={{ marginLeft: "10%", height: RFPercentage(6), borderColor: colors.primary, borderWidth: 1 }}
                                iconComponent={iconCategory}
                                items={ripenessList} width={"90%"}
                                setItem={setRipeness} selectedItem={ripeness}
                                placeholder="Select Confection" modalMarginTop={RFPercentage(67)}
                            />
                        </View> : null
                    }
                    {confection === "fresh" ?
                        <View style={{ flexDirection: "column", marginTop: RFPercentage(2), width: "85%" }} >
                            <View style={{ paddingBottom: RFPercentage(1.2) }} >
                                <Text style={{ marginLeft: "10%", fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Frozen or Not</Text>
                            </View>
                            <ReactNativeCrossPicker
                                placeHolderSize={RFPercentage(2.2)}
                                modalTextStyle={{ color: colors.primary }}
                                mainComponentStyle={{ marginLeft: "10%", height: RFPercentage(6), borderColor: colors.primary, borderWidth: 1 }}
                                iconComponent={iconCategory}
                                items={frozenList} width={"90%"}
                                setItem={setFrozen} selectedItem={frozen}
                                placeholder="Select Confection" modalMarginTop={RFPercentage(67)}
                            />
                        </View> : null
                    }

                    {/* drop down open/packed */}
                    <View style={{ flexDirection: "column", marginTop: RFPercentage(2), width: "85%" }} >
                        <View style={{ paddingBottom: RFPercentage(1.2) }} >
                            <Text style={{ fontSize: RFPercentage(2.2), color: colors.primaryLight }} >Choose Open/Packed</Text>
                        </View>
                        <ReactNativeCrossPicker
                            placeHolderSize={RFPercentage(2.2)}
                            modalTextStyle={{ color: colors.primary }}
                            mainComponentStyle={{ height: RFPercentage(6), borderColor: colors.primary, borderWidth: 1 }}
                            iconComponent={iconCategory}
                            items={openPackedList}
                            setItem={setOpenPacked} selectedItem={openPacked}
                            placeholder="Select Confection" modalMarginTop={RFPercentage(77)}
                        />
                    </View>
                </ScrollView>
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
    }
})

export default AddIngredients;