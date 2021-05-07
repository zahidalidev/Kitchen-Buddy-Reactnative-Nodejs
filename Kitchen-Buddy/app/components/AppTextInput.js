import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from "../config/colors"

function AppTextInput({ placeHolder, value, onChange, width = "100%", icon, fontWeight, rightButtonText, secure = false, iconType = "MaterialCommunityIcons", editable = true, startEdit, endEdit }) {
    const [focus, setFocus] = useState(false)
    const [email, setEmail] = useState('')

    return (
        <View style={{
            backgroundColor: colors.white, borderRadius: RFPercentage(1.2),
            width: width, alignItems: 'flex-start', justifyContent: 'center'
        }}>

            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }} >
                {iconType === "MaterialIcons" ?
                    <MaterialIcons color={colors.grey} style={{ padding: RFPercentage(1), paddingRight: 0 }} size={RFPercentage(2.2)} name={icon} />
                    :
                    <MaterialCommunityIcons color={colors.grey} style={{ padding: RFPercentage(1), paddingRight: 0 }} size={RFPercentage(2.2)} name={icon} />
                }

                <TextInput style={{ color: colors.grey, padding: RFPercentage(1), width: rightButtonText ? "70%" : "90%", fontSize: RFPercentage(2.2) }}
                    placeholder={placeHolder}
                    onFocus={() => setFocus(true)}
                    onEndEditing={() => setFocus(false)}
                    value={value}
                    secureTextEntry={secure}
                    editable={editable}
                    onChangeText={(text) => onChange(text)}
                    onResponderStart={startEdit}
                    onSubmitEditing={endEdit}
                />
                {rightButtonText ?
                    <TouchableOpacity style={{ width: "20%" }}>
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", color: colors.primary, fontSize: RFPercentage(2) }} >{rightButtonText}</Text>
                    </TouchableOpacity>
                    : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppTextInput;