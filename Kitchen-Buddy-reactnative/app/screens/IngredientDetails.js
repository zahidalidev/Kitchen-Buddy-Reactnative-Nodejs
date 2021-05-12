import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReactNativeCrossPicker from "react-native-cross-picker"
import DateTimePicker from '@react-native-community/datetimepicker';

import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';
import AppTextButton from '../components/AppTextButton';
import DetailCard from '../components/DetailCard';

function IngredientDetails(props) {

    const [item, setItem] = useState({});

    useEffect(() => {
        // setItem(props.route.params.item)
        setItem({
            id: 3,
            name: "chicken",
            brand: "Sanderson Farms",
            category: "meat",
            location: "fridge",
            confectionType: "fresh",
            ripeness: "green",
            ripenessEditedDate: "12-01-2021",
            lastCheckDate: "15-01-2021",
            frozen: "yes",
            open: "packed",
            expirationDate: new Date(1598051730000).toDateString()
        })
    }, [props.route.params.item])

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primary} />

            {/* Kitchen buddy top container */}
            <View style={{ backgroundColor: colors.primary, height: RFPercentage(16), width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                <Text style={{ top: RFPercentage(2), color: colors.white, fontSize: Platform.OS === "ios" ? RFPercentage(2.5) : RFPercentage(4.5) }} >Ingredient Details</Text>
            </View>

            {/* Bottom Contaienr */}
            <View style={{ marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                <ScrollView style={{ width: "100%", marginLeft: "15%", marginTop: RFPercentage(6), }} >
                    <TouchableOpacity activeOpacity={1} style={{
                        margin: RFPercentage(1),
                        marginBottom: RFPercentage(2),
                        marginRight: RFPercentage(2),

                        backgroundColor: "white",
                        // backgroundColor: (item.id % 2 == 0) ? colors.primary : "white",
                        shadowColor: '#b5b5b5',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.8,
                        shadowRadius: 3,
                        elevation: 7,

                        borderRadius: RFPercentage(2),
                        width: RFPercentage(40),
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }} >
                        <DetailCard props={props} item={item} />
                    </TouchableOpacity>
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

export default IngredientDetails;