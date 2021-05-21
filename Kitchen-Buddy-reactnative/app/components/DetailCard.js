import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants'

import colors from '../config/colors';
import AppTextButton from './AppTextButton';

function DetailCard({ onActivityIndi, onActivityInd3, props, item, onUpdateLastCheck, onDeleteIngredient }) {

    return (
        <View style={{ padding: RFPercentage(2), flex: 1, width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }} >
            <View style={{ flexDirection: "row", width: "90%", alignItems: "center", justifyContent: "center" }}>
                <Text numberOfLines={1} style={{ padding: RFPercentage(1.3), color: colors.primaryLight, fontSize: RFPercentage(3.8), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.name}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Brand</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.brandName}</Text>
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

            {item.confectionType === 'fresh' ?
                <>
                    {/* ripness */}
                    <View style={{ marginLeft: 25, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                        <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Ripeness</Text>
                        <Text numberOfLines={1} style={{ marginLeft: -13, paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.ripeness}</Text>
                    </View>

                    {/* ripness edit date */}
                    <View style={{ marginLeft: 25, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                        <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Ripeness edited</Text>
                        <Text numberOfLines={1} style={{ marginLeft: -13, paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.red, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.ripenessEditedDate}</Text>
                    </View>

                    {/* last check button */}
                    {onActivityIndi ?
                        <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
                        :
                        <View style={{ marginLeft: 25, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                            <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Last check</Text>
                            <AppTextButton onSubmit={() => onUpdateLastCheck()} buttonStyle={{ marginLeft: -13, backgroundColor: item.lastCheckDate < 3 ? "green" : colors.red, height: RFPercentage(3.3), borderRadius: 25 }} textStyle={{ fontSize: RFPercentage(1.5) }} name={item.lastCheckDate === null ? "No cheked" : `${item.lastCheckDate} Days ago`} />
                        </View>
                    }

                </> : null
            }

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Frozen</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.frozen}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Open</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.grey, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.openClose}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "90%" }}>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), width: "56%", paddingBottom: RFPercentage(1.2), color: colors.primaryLight, fontSize: RFPercentage(2.6), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >Expiration Date</Text>
                <Text numberOfLines={1} style={{ paddingTop: RFPercentage(1.2), paddingBottom: RFPercentage(1.3), width: "44%", color: colors.red, fontSize: RFPercentage(2.2), fontWeight: Constants.platform === "ios" ? "300" : "bold" }} >{item.expirationDate}</Text>
            </View>

            <View style={{ marginTop: RFPercentage(2), marginBottom: RFPercentage(1), flexDirection: "row", marginLeft: RFPercentage(1), marginRight: RFPercentage(1), flex: 1, width: "100%", justifyContent: "space-between", alignItems: "flex-end" }} >

                <TouchableOpacity onPress={() => (props.navigation.navigate('updateIngredients', { ingredientDetails: item }))} activeOpacity={0.8} style={{ flexDirection: "row", borderRadius: RFPercentage(3), borderWidth: 1, borderColor: "#6f9cdb", padding: RFPercentage(1), paddingLeft: RFPercentage(1.7), paddingRight: RFPercentage(1.7) }} >
                    <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.2), color: "#6f9cdb", marginRight: 5 }} >Edit</Text>
                    <MaterialCommunityIcons name="pencil" size={RFPercentage(2.2)} color={"#6f9cdb"} />
                </TouchableOpacity>

                {onActivityInd3 ?
                    <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
                    :
                    <TouchableOpacity onPress={() => onDeleteIngredient()} activeOpacity={0.8} style={{ flexDirection: "row", borderRadius: RFPercentage(3), borderWidth: 1, borderColor: colors.red, padding: RFPercentage(1), paddingLeft: RFPercentage(1.7), paddingRight: RFPercentage(1.7) }} >
                        <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.2), color: colors.red, marginRight: 5 }} >Delete </Text>
                        <MaterialCommunityIcons name="trash-can" size={RFPercentage(2.2)} color={colors.red} />
                    </TouchableOpacity>
                }

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default DetailCard;