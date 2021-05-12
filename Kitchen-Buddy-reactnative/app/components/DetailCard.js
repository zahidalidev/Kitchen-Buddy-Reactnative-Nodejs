import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'

import colors from '../config/colors';

function DetailCard({ item }) {

    return (
        <View style={{ padding: RFPercentage(2), flex: 1, width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }} >

            <View style={{ marginLeft: RFPercentage(1), flex: 1, width: "100%", justifyContent: "flex-end", alignItems: "flex-end" }} >
                <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: "row", borderRadius: RFPercentage(3), backgroundColor: "#6f9cdb", padding: RFPercentage(1), paddingLeft: RFPercentage(1.3), paddingRight: RFPercentage(1.3) }} >
                    <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.2), color: colors.white, marginRight: 5 }} >Edit</Text>
                    <MaterialCommunityIcons name="pencil" size={RFPercentage(2.2)} color={colors.white} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", width: "90%", alignItems: "center", justifyContent: "center" }}>
                <Text numberOfLines={1} style={{ padding: RFPercentage(1.3), color: colors.primaryLight, fontSize: RFPercentage(3.8), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.name}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Brand</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.brand}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Category </Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.category}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Location</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.location}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Confection type</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.confectionType}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Ripeness</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.ripeness}</Text>
            </View>

            {/* ripness edit date */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Ripeness edited date</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: "red", fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.ripenessEditedDate}</Text>
            </View>

            {/* last check button */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Last check Date</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: "red", fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.lastCheckDate}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Frozen</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.frozen}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Open</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.open}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Expiration Date</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: "red", fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.expirationDate}</Text>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default DetailCard;