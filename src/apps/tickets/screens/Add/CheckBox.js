import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

import { TouchableOpacity, Text,View } from 'react-native'
import {absoluteZero, registrationBlack} from "../../../../utils/styles/Color";
import {responsiveFontSize} from "../../../genericComponent/dimensions";

const CheckBox = ({ selected, onPress, style, textStyle, size = 40, color = absoluteZero, text = '', ...props}) => (

        <TouchableOpacity style={[styles.checkBox,style]} onPress={onPress} {...props}>
            <Icon
                size={size}
                color={color}
                name={ selected ? 'check-box' : 'check-box-outline-blank'}
            />
            <Text style={{fontSize:responsiveFontSize(2.5),fontFamily:'OpenSans-Bold',color:registrationBlack}}> {text} </Text>
        </TouchableOpacity>







)

export default CheckBox;


