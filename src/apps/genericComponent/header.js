import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {absoluteZero, mikadoYellow, registrationBlack, white} from "../../utils/styles/Color";
import {responsiveFontSize, responsiveHeight} from "./dimensions";

const Header=(props)=>{
    return(
        <View style={{backgroundColor:mikadoYellow,flexDirection:'row',
            justifyContent:'space-between',alignItems:'center',
            height:60,width:'100%',}}>




            <View style={{marginLeft:responsiveHeight(3),alignItems:'center',justifyContent:'center'}}>
                <Text style={{width:'100%',fontWeight:'bold',textAlign:'center',color:absoluteZero,fontFamily:'OpenSans-Bold',
                    fontSize:responsiveFontSize(2.2)}}>
                    Cancel
                </Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{width:'100%',textAlign:'center',color:registrationBlack,fontFamily:'OpenSans-Bold',
                    fontSize:responsiveFontSize(3.2)}}>
                    {props.name}
                </Text>
            </View>
            <View style={{marginRight:responsiveHeight(3),alignItems:'center',justifyContent:'center'}}>
                <Text style={{width:'100%',fontWeight:'bold',textAlign:'center',color:absoluteZero,fontFamily:'OpenSans-Bold',
                    fontSize:responsiveFontSize(2.2)}}>
                    Save
                </Text>
            </View>
        </View>
    )
}
export default Header;

