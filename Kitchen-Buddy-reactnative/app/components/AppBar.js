import * as React from "react";
import { Appbar } from 'react-native-paper';

import colors from "../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

const AppBar = (props) => {

    return (
        <Appbar.Header style={{ backgroundColor: colors.primary }}>
            <Appbar.BackAction />
            <Appbar.Content style={{ alignItems: 'center', marginRight: 50 }} title="Kitchen Buddy" />
        </Appbar.Header>
    );
}

export default AppBar;