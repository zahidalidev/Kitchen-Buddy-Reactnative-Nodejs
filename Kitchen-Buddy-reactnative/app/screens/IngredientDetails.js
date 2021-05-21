import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Platform, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants"
import { RFPercentage } from 'react-native-responsive-fontsize';
import Toast from "toastify-react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import DetailCard from '../components/DetailCard';
import { getIngredientDetails, updateRipnessCheck, removeIngredient } from '../services/ingredientsService';
import GetSqlDate from '../components/commmon/GetSqlDate';
import DatesDifference from "../components/commmon/DatesDifference"

function IngredientDetails(props) {

    const [activityIndi, setActivityIndi] = useState(false);
    const [activityIndi2, setActivityIndi2] = useState(false);
    const [activityIndi3, setActivityIndi3] = useState(false);
    const [toastify, setToastify] = useState(false);
    const [item, setItem] = useState({});

    const deleteIngredient = async () => {
        try {
            setActivityIndi3(true)
            await removeIngredient(item.id);
            toastify.success('Successfully Deleted')
            setTimeout(() => {
                props.navigation.navigate('home')
            }, 2000)
        } catch (error) {
            console.log('Deleteion Error: ', error)
            toastify.error('Deletion Error')
        }
        setActivityIndi3(false)
    }

    const getIngredient = async (id) => {
        try {
            setActivityIndi(true);
            const { data } = await getIngredientDetails(id);
            let itemDetails = data[0];
            itemDetails.ripenessEditedDate = GetSqlDate(new Date(itemDetails.ripenessEditedDate));
            itemDetails.expirationDate = GetSqlDate(new Date(itemDetails.expirationDate));
            if (itemDetails.lastCheckDate != null) {
                itemDetails.lastCheckDate = DatesDifference(new Date(itemDetails.lastCheckDate))
            }
            setItem(itemDetails);
        } catch (error) {
            console.log("Error in getting details: ", error);
            toastify.error("Error in getting details");
        }
        setActivityIndi(false);
    }

    useEffect(() => {
        const id = props.route.params.item.id;
        getIngredient(id);
    }, [props.route.params.item]);

    const updateLastCheck = async () => {
        try {
            setActivityIndi2(true);
            const body = {
                id: item.id,
                lastCheckDate: GetSqlDate(new Date())
            }
            const { data } = await updateRipnessCheck(body);
            let itemDetails = { ...item };
            itemDetails.lastCheckDate = DatesDifference(new Date(data.lastCheckDate));
            setItem(itemDetails);
            toastify.success("Last check Updated");
        } catch (error) {
            console.log("last check update error: ", error);
            toastify.error("Updation Error");
        }
        setActivityIndi2(false);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primary} />
            <Toast ref={(c) => setToastify(c)} />
            {/* Kitchen buddy top container */}
            <View style={{ backgroundColor: colors.primary, height: RFPercentage(16), width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                <MaterialCommunityIcons onPress={() => props.navigation.navigate('Home')} style={{ position: "absolute", top: RFPercentage(2.5), left: RFPercentage(2), opacity: 0.8 }} name="chevron-left" size={RFPercentage(4)} color={colors.lightGrey} />
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
                        {activityIndi ?
                            <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
                            :
                            <DetailCard props={props} onDeleteIngredient={() => deleteIngredient()} onActivityInd3={activityIndi3} onActivityIndi={activityIndi2} item={item} onUpdateLastCheck={() => updateLastCheck()} />
                        }
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