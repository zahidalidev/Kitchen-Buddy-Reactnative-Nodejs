import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import AppTextButton from '../components/AppTextButton';

import logo from "../../assets/images/logo2.jpg"

function SignUp(props) {

    const [feilds, setFeilds] = useState([
        {
            id: 0,
            placeHolder: "First name",
            value: '',
            secure: false
        },
        {
            id: 1,
            placeHolder: "Last name",
            value: '',
            secure: false
        },
        {
            id: 1,
            placeHolder: "Email",
            value: '',
            secure: false
        },
        {
            id: 1,
            placeHolder: "Password",
            value: '',
            secure: true
        },
        {
            id: 1,
            placeHolder: "Confirm password",
            value: '',
            secure: true
        },
    ]);

    const handleChange = (text, id) => {
        const tempFeilds = [...feilds];
        tempFeilds[id].value = text;
        setFeilds(tempFeilds);
    }

    const handleSubmit = () => {
        console.log('submited')
        console.log(feilds)
        props.navigation.navigate('home')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primary} />

            {/* Kitchen buddy top container */}
            <View style={{ backgroundColor: colors.primary, flex: 0.6, width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ marginBottom: RFPercentage(5), color: colors.white, fontSize: Platform.OS === "ios" ? RFPercentage(4) : RFPercentage(6.5) }} >Sign Up</Text>
            </View>

            {/* Bottom Contaienr */}
            <View style={{ marginTop: -RFPercentage(7), borderTopLeftRadius: RFPercentage(8), backgroundColor: colors.lightGrey, width: "100%", flex: 1.8, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >

                {/* Text feilds */}
                {feilds.map((item, i) =>
                    <View key={i} style={{ marginTop: i == 0 ? RFPercentage(10) : RFPercentage(4), width: "85%" }} >
                        <AppTextInput
                            placeHolder={item.placeHolder}
                            width="100%"
                            value={item.value}
                            onChange={(text) => handleChange(text, item.id)}
                            secure={item.secure}
                        />
                    </View>
                )}

                {/* SignUp button */}
                <View style={{ marginTop: RFPercentage(5), width: "85%", flex: 1, alignItems: "flex-end" }} >
                    <AppTextButton
                        name="Sign Up"
                        borderRadius={RFPercentage(1.3)}
                        onSubmit={() => handleSubmit()}
                        backgroundColor={colors.primary}
                        width="100%"
                        height={RFPercentage(5.5)}
                    />
                </View>

            </View>

            {/* Signup text */}
            <View style={{ width: "100%", backgroundColor: colors.lightGrey }} >
                <View style={{ marginBottom: RFPercentage(5), marginLeft: "7.5%", width: "85%", flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }} >
                    <Text style={{ color: "grey", fontSize: RFPercentage(1.7) }} >Dont't have an account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('signup')} ><Text style={{ color: colors.primary, fontWeight: "bold", fontSize: RFPercentage(1.7) }} >Sign Up</Text></TouchableOpacity>
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
    },
})

export default SignUp;