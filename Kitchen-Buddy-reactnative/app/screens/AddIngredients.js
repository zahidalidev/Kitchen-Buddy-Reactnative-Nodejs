import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants"
import { RFPercentage } from 'react-native-responsive-fontsize';

import colors from '../config/colors';
import AppTextInput from '../components/AppTextInput';

function AddIngredients(props) {
    const [name, setName] = useState('');
    const [brandName, setBrandName] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primary} />

            {/* Kitchen buddy top container */}
            <View style={{ backgroundColor: colors.primary, height: RFPercentage(16), width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                <Text style={{ top: RFPercentage(2), color: colors.white, fontSize: Platform.OS === "ios" ? RFPercentage(2.5) : RFPercentage(4.5) }} >Add Ingredients</Text>
            </View>

            {/* Bottom Contaienr */}
            <View style={{ marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                <View style={{ flexDirection: "column", marginTop: RFPercentage(8), width: "85%" }} >
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