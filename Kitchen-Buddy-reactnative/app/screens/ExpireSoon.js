import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors';
import Card from '../components/Card';
import GetSqlDate from '../components/commmon/GetSqlDate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getExpireSoonIngredients } from "../services/ingredientsService";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ExpireSoon(props) {
    const [activityIndic, setActivityIndic] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const getIngredients = async () => {
        try {
            setActivityIndic(true)
            const userId = await AsyncStorage.getItem('token');
            let expirationDate = GetSqlDate(new Date(date))
            const { data } = await getExpireSoonIngredients(userId, expirationDate);
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
                <MaterialCommunityIcons onPress={() => props.navigation.navigate('Home')} style={{ position: "absolute", top: RFPercentage(2.5), left: RFPercentage(2), opacity: 0.8 }} name="chevron-left" size={RFPercentage(4)} color={colors.lightGrey} />
                <Text style={{ top: RFPercentage(2), color: colors.white, fontSize: Platform.OS === "ios" ? RFPercentage(2.5) : RFPercentage(4.5) }} >Expire Soon</Text>
            </View>



            {/* Bottom Contaienr */}
            <View style={{ flexDirection: 'column', marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 1.8, alignItems: 'center', justifyContent: 'center' }} >
                {/* Fliter */}
                {/* dateTimePicker component */}
                <View style={{ marginTop: RFPercentage(4), width: "85%" }} >

                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly", alignItems: "center" }} >
                        <View style={{ width: "26%" }} >
                            <Text style={{ fontWeight: Platform.OS == "ios" ? "500" : "bold", fontSize: RFPercentage(2.8), color: colors.primaryLight }} >How Soon</Text>
                        </View>

                        <View style={{ borderColor: colors.primary, borderWidth: 0.5, padding: RFPercentage(1.4), paddingRight: 0, borderRadius: RFPercentage(1), width: "50%", height: RFPercentage(5.5), flexDirection: "row" }} >
                            <TouchableOpacity style={{ marginBottom: RFPercentage(0.25), width: Platform.OS === "ios" ? "80%" : "100%" }} onPress={() => setShow(true)}>
                                <Text style={{ fontSize: RFPercentage(2.2), color: colors.grey, width: "100%" }} >{date.toDateString()}</Text>
                            </TouchableOpacity>
                            {Platform.OS === "ios" ?
                                <TouchableOpacity style={{ width: "20%" }} onPress={() => setShow(true)}>
                                    <Text onPress={() => setShow(false)} style={{ fontSize: RFPercentage(2.2), color: colors.primary, width: "100%" }} >Done</Text>
                                </TouchableOpacity>
                                : null
                            }
                        </View>

                        {/* search button */}
                        <TouchableOpacity onPress={() => getIngredients()} style={{ borderColor: colors.primary, borderWidth: 0.5, padding: RFPercentage(1.4), borderRadius: RFPercentage(1), width: "15%", height: RFPercentage(5.5), flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <MaterialIcons name="search" size={RFPercentage(3.5)} color={colors.primary} />
                        </TouchableOpacity>

                    </View>
                    {show && (
                        <DateTimePicker
                            style={{ width: 320, backgroundColor: "white" }}
                            testID="dateTimePicker"
                            value={date}
                            mode={"date"}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
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
                                // backgroundColor: (item.id % 2 == 0) ? colors.primary : "white",
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

export default ExpireSoon;