import { StyleSheet } from 'react-native';
import {absoluteZero, lightGrey, registrationBlack, taupeGrey, white} from "../../../../utils/styles/Color";
import {responsiveFontSize, responsiveHeight} from "../../../genericComponent/dimensions";

const styles = StyleSheet.create({
    mainView:{flex:1,backgroundColor:lightGrey},
    checkMainView:{margin:8,flex:1,flexDirection:'row',width:'95%',alignItems:'center'},
    checkView:{width:'30%'},
    infoView:{width:'60%',marginLeft:16,flexDirection: 'row', alignItems: 'center'},
    infoText:{marginLeft:10,marginRight:10,fontSize:responsiveFontSize(2),color:registrationBlack},
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonMainView:{marginLeft:8,marginRight:8,
        flex:1,width:'95%',height:responsiveHeight(10),
        flexDirection:'row',justifyContent:'center',alignItems:'center'},
    cancelButton:{alignItems:'center',marginRight:10,justifyContent:'center',
        borderColor:taupeGrey,borderWidth:2,
        backgroundColor:white,width:'45%',height:responsiveHeight(7)},
    cancelText:{fontFamily:'OpenSans-Bold',fontSize:responsiveFontSize(2)},
    saveButton:{marginLeft:10,alignItems:'center',justifyContent:'center',
        backgroundColor:absoluteZero,width:'45%',height:responsiveHeight(7)},
    saveText:{fontFamily:'OpenSans-Bold',color:white,fontSize:responsiveFontSize(2)},
    showViewMain:{flex:1,margin:8},
    typeText:{fontFamily:'OpenSans-Bold',marginLeft:8,color:registrationBlack,fontSize:responsiveFontSize(2.2)},
    imageBoxView:{flexDirection:'row',flex:1,},
    boxInnerView:{margin:8,width:'45%',backgroundColor:white,justifyContent:'center',
        height:responsiveHeight(20),alignItems:'center',
        borderWidth:1,borderColor:absoluteZero},
    boxText:{fontFamily:'OpenSans-Bold',fontSize:responsiveFontSize(1.8),color:absoluteZero},
    innerView:{margin:8,width:'95%',backgroundColor:white,height:responsiveHeight(10),
        alignItems:'center',flexDirection:'row',borderWidth:1,borderColor:'#000'},
    innerViewTextStyle:{marginLeft:10,flex:1,justifyContent:'center',alignItems:'flex-start'},
    innerTextStyle:{fontSize:responsiveFontSize(2),color:taupeGrey},
    innerIconViewStyle:{marginRight:10,flex:1,justifyContent:'center',alignItems:'flex-end'},

});
export default styles;