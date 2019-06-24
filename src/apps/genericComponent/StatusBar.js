import React from 'react';

import { View,
    Platform,StyleSheet,

    StatusBar,} from 'react-native';
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "./dimensions";
import GlobalStyles from "../../utils/styles/globalStyle";
import {mikadoYellow} from "../../utils/styles/Color";











const StatusBarHeader = ({ ...props}) => (
    <View style={styles.statusBar}>
        <StatusBar translucent backgroundColor={mikadoYellow} {...props} />
    </View>
);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? responsiveHeight(3.2) : responsiveHeight(4);
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {

        height: STATUSBAR_HEIGHT,

    },
    appBar: {
        backgroundColor:'#B1B1B1',
        height: APPBAR_HEIGHT,
    },
    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },
});
export default StatusBarHeader;