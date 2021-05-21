import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from "../config/colors"

function AppTextInput({ rightIcon = false, rightFunction, borderWidth = 0, placeHolder, value, onChange, width = "100%", height = RFPercentage(6.2), icon, fontWeight, rightButtonText, secure = false, iconType = "MaterialCommunityIcons", editable = true, startEdit, endEdit, border = false }) {
    const [focus, setFocus] = useState(false)

    return (
        <View style={{
            backgroundColor: colors.white, borderRadius: RFPercentage(1.2),
            width: width, alignItems: 'flex-start', justifyContent: 'center',
            borderWidth: borderWidth, borderColor: colors.primary, height: RFPercentage(6)
        }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }} >
                {iconType === "MaterialIcons" ?
                    <MaterialIcons color={colors.grey} style={{ padding: RFPercentage(1), paddingRight: 0 }} size={RFPercentage(2.2)} name={icon} />
                    :
                    <MaterialCommunityIcons color={colors.mediumGrey} style={{ padding: RFPercentage(1), paddingRight: 0 }} size={RFPercentage(3)} name={icon} />
                }

                <TextInput style={{ color: colors.grey, padding: RFPercentage(1), width: rightButtonText ? "70%" : "90%", width: rightIcon ? "80%" : "90%", fontSize: RFPercentage(2.2) }}
                    placeholder={placeHolder}
                    onFocus={() => setFocus(true)} s
                    onEndEditing={() => setFocus(false)}
                    value={value}
                    secureTextEntry={secure}
                    editable={editable}
                    onChangeText={(text) => onChange(text)}
                    onResponderStart={startEdit}
                    onSubmitEditing={endEdit}
                />
                {rightButtonText ?
                    <TouchableOpacity key={1} style={{ width: "20%" }}>
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", color: colors.primary, fontSize: RFPercentage(2) }} >{rightButtonText}</Text>
                    </TouchableOpacity>
                    : null}

                {rightIcon ?
                    <TouchableOpacity key={'2'} onPress={() => rightFunction()} style={{ width: "10%", justifyContent: "center", alignItems: "center" }} >
                        <MaterialCommunityIcons key={'3'} color={colors.grey} style={{ right: RFPercentage(1) }} size={RFPercentage(3)} name={rightIcon} />
                    </TouchableOpacity>
                    : null
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppTextInput;