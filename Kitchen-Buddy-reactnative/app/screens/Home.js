import React, { useState, useEffect } from 'react';
import { RefreshControl, ActivityIndicator, Dimensions, FlatList, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import banner from "../../assets/images/order-grocery-small.jpg"
import Card from '../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllIngredients } from "../services/ingredientsService";
import GetSqlDate from '../components/commmon/GetSqlDate';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Home(props) {
    const [searchValue, setSearchValue] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [oldIngredients, setOldIngredients] = useState([]);
    const [activityIndic, setActivityIndic] = useState(false);
    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getIngredients();
    }, []);

    const handleSearch = () => {
        let temp = [...oldIngredients];
        let newIngredients = temp.map((ingredient) => {
            if (ingredient.name.includes(searchValue)) {
                return ingredient;
            }
        })
        setIngredients(newIngredients);
    }

    const getIngredients = async () => {
        try {
            setActivityIndic(true)
            const userId = await AsyncStorage.getItem('token');
            const { data } = await getAllIngredients(userId);
            const allIngredients = data.map(item => {
                item.expirationDate = GetSqlDate(new Date(item.expirationDate));
                return item;
            })
            setIngredients(allIngredients);
            setOldIngredients(allIngredients);
        } catch (error) {
            console.log("Error All ingredients: ", error)
        }
        setRefreshing(false)
        setActivityIndic(false);
    }

    useEffect(() => {
        getIngredients();
    }, []);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            props.navigation.navigate('login')
        } catch (error) {
            alert("Logout Error")
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primary} />

            {/* Top container */}
            <View style={{ backgroundColor: colors.primary, height: RFPercentage(28), justifyContent: 'flex-end' }} >
                <ImageBackground style={{ marginBottom: RFPercentage(1), width: windowWidth, height: RFPercentage(30), alignItems: 'center', justifyContent: 'flex-end' }} source={banner} >
                    <MaterialCommunityIcons onPress={() => handleLogout()} style={{ position: "absolute", top: RFPercentage(4), right: RFPercentage(2), opacity: 0.8 }} name="exit-to-app" size={RFPercentage(3)} color={colors.lightGrey} />
                    <View style={{ flexDirection: 'column' }} >
                        {/* Search feilds */}
                        <View style={{ width: "85%", bottom: RFPercentage(7.5) }} >
                            <AppTextInput
                                placeHolder="Search"
                                width="100%"
                                value={searchValue}
                                onChange={(text) => setSearchValue(text)}
                                rightIcon="magnify"
                                rightFunction={() => handleSearch()}
                            />
                        </View>
                    </View>
                </ ImageBackground>
            </View>

            {activityIndic
                ? <View style={{ flexDirection: 'column', marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 1.8, alignItems: 'center', justifyContent: 'center' }} >
                    <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
                </View>
                : <>
                    {/* Bottom Contaienr */}
                    <View style={{ flexDirection: 'column', marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 1.8, alignItems: 'center', justifyContent: 'center' }} >
                        <FlatList
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />}
                            style={{ marginTop: RFPercentage(3) }}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={ingredients.length === 0 ? [{ blank: true }] : ingredients}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, i }) =>
                                <TouchableOpacity onPress={() => props.navigation.navigate('ingredientDetails', { item: item })} activeOpacity={0.9} style={{
                                    margin: RFPercentage(1),
                                    marginBottom: RFPercentage(1.5),
                                    marginRight: RFPercentage(2),
                                    backgroundColor: "white",
                                    maxHeight: item.blank ? 0 : null,
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
                                    {item.blank ? null :
                                        <Card index={i} title={item.name} confectionType={item.confectionType} expirationDate={item.expirationDate} location={item.location} category={item.category} />
                                    }
                                </TouchableOpacity>

                            }
                        />

                    </View>

                </>
            }
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