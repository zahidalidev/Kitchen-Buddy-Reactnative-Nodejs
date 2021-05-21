import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'

import colors from '../config/colors';

function Card({ index, title, confectionType, expirationDate, location, category }) {

    return (
        <View key={index} style={{ padding: RFPercentage(2), flex: 1, width: "100%", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }} >

            <View style={{ position: "absolute", right: 0, top: 0 }} >
                <Text numberOfLines={1} style={{ borderTopRightRadius: RFPercentage(1.5), borderBottomLeftRadius: RFPercentage(1.5), backgroundColor: "green", padding: RFPercentage(1), color: colors.white }} >{confectionType}</Text>
            </View>

            <View style={{ position: "absolute", left: RFPercentage(2), top: RFPercentage(1.3), width: "75%" }} >
                <Text numberOfLines={1} style={{ color: colors.primaryLight, fontSize: RFPercentage(2.7), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{title}</Text>
            </View>

            <View style={{ width: "70%", flexDirection: "row", marginLeft: RFPercentage(2), padding: 1, marginTop: RFPercentage(3) }} >
                <MaterialCommunityIcons style={{ marginTop: 1 }} name="clock-outline" size={RFPercentage(2)} color={"#dbdbdb"} />
                <Text numberOfLines={1} style={{ marginLeft: 7, color: colors.grey, fontSize: RFPercentage(2) }} >{expirationDate}</Text>
            </View>

            <View style={{ width: "70%", flexDirection: "row", marginLeft: RFPercentage(2), padding: 1, }} >
                <MaterialIcons style={{ marginTop: 1 }} name="location-pin" size={RFPercentage(2)} color={"#dbdbdb"} />
                <Text numberOfLines={1} style={{ marginLeft: 7, color: colors.grey, fontSize: RFPercentage(2) }} >{location}</Text>
            </View>

            <View style={{ width: "70%", flexDirection: "row", marginLeft: RFPercentage(2), padding: 1, }} >
                <MaterialIcons style={{ marginTop: 1 }} name="category" size={RFPercentage(1.8)} color={"#dbdbdb"} />
                <Text numberOfLines={1} style={{ marginLeft: 7, color: colors.grey, fontSize: RFPercentage(2) }} >{category}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Card;