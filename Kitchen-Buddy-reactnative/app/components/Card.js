import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'

import colors from '../config/colors';

function Card({ title, confectionType, expirationDate, location, category }) {

    return (
        <View style={{ padding: RFPercentage(2), flex: 1, width: "100%", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }} >

            <View style={{ marginLeft: RFPercentage(2), marginBottom: -RFPercentage(0.5), flex: 1, width: "100%", justifyContent: "flex-end", alignItems: "flex-end" }} >
                <Text numberOfLines={1} style={{ borderTopRightRadius: RFPercentage(1.5), borderBottomLeftRadius: RFPercentage(1.5), backgroundColor: "green", padding: RFPercentage(1), color: colors.white }} >{confectionType}</Text>
            </View>

            <View>
                <Text numberOfLines={1} style={{ color: colors.primaryLight, fontSize: RFPercentage(3), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{title}</Text>
            </View>

            <View style={{ flexDirection: "row" }} >
                <MaterialCommunityIcons style={{ marginTop: 1 }} name="clock-outline" size={RFPercentage(2)} color={colors.mediumGrey} />
                <Text numberOfLines={1} style={{ marginLeft: 4, color: colors.grey, fontSize: RFPercentage(2) }} >{expirationDate}</Text>
            </View>

            <View style={{ flexDirection: "row" }} >
                <FontAwesome5 style={{ marginTop: 1 }} name="search-location" size={RFPercentage(2)} color={colors.mediumGrey} />
                <Text numberOfLines={1} style={{ marginLeft: 4, color: colors.grey, fontSize: RFPercentage(2) }} >{location}</Text>
            </View>

            <View style={{ flexDirection: "row" }} >
                <MaterialIcons style={{ marginTop: 1 }} name="category" size={RFPercentage(2)} color={colors.mediumGrey} />
                <Text numberOfLines={1} style={{ marginLeft: 4, color: colors.grey, fontSize: RFPercentage(2) }} >{category}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Card;