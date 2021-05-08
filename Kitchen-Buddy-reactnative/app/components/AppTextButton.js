import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Button } from 'react-native-paper';

import colors from '../config/colors';

function AppTextButton({ name, icon, onSubmit, width, height = RFPercentage(6), borderRadius = 25, backgroundColor = "black", iconSize = 20, iconLeft }) {
    return (
        <Button width={width} color={backgroundColor} mode="contained" onPress={() => onSubmit()} style={{ height, borderBottomEndRadius: borderRadius, borderBottomStartRadius: borderRadius, borderTopStartRadius: borderRadius, justifyContent: "center" }} >

            {
                iconLeft ?
                    <MaterialCommunityIcons style={{ padding: RFPercentage(1.6), paddingRight: name ? 0 : RFPercentage(1.6) }
                    } color="white" size={iconSize} name={iconLeft} />
                    : null
            }
            {
                name ?
                    <Text numberOfLines={1} style={styles.text} >{name}</Text>
                    : null
            }
            {
                icon ?
                    <MaterialCommunityIcons style={{ padding: RFPercentage(1.6), paddingLeft: name ? 0 : RFPercentage(1.6) }} color="white" size={iconSize} name={icon} />
                    : null
            }
        </Button >
    );
}

const styles = StyleSheet.create({
    container: {

    },
    text: { color: "white", fontSize: RFPercentage(2.2) }
})

export default AppTextButton;