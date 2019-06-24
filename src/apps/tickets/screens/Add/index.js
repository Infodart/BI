import React, { Component } from 'react';
import { View,Text,ScrollView,TouchableOpacity} from 'react-native';
import styles from './styles';
import StatusBarHeader from "../../../genericComponent/StatusBar";
import Header from "../../../genericComponent/header";

import {
    absoluteZero, registrationBlack,

} from "../../../../utils/styles/Color";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import InfoIcon from 'react-native-vector-icons/Entypo';
import CheckBox from "./CheckBox";

export default class Add extends Component {
    constructor()
    {
        super();
        this.state={
            termsAccepted: false
        }
    }
    handleCheckBox = () => this.setState({ termsAccepted: !this.state.termsAccepted })

    showView=(typeName)=>
    {
        if(typeName==='IMAGES')
        {
            return(
                <View style={styles.showViewMain}>
                    <Text style={styles.typeText}>{typeName}</Text>

                    <View style={styles.imageBoxView}>
                        <View style={styles.boxInnerView}>
                            <Icon name="camera" size={20} color={absoluteZero} />
                            <Text style={styles.boxText}>ADD FRONT</Text>
                        </View>



                        <View style={styles.boxInnerView}>
                            <Icon name="camera" size={20} color={absoluteZero} />
                            <Text style={styles.boxText}>ADD BACK</Text>
                        </View>
                    </View>


                </View>
            )
        }
        return(
            <View style={{margin:8}}>
                <Text style={styles.typeText}>{typeName}</Text>

                <View style={styles.innerView}>
                    <View style={styles.innerViewTextStyle}>
                        {typeName==='TYPE' &&
                        <Text style={styles.innerTextStyle}>
                            Select the certificate classification</Text>}

                    </View>

                    <View style={styles.innerIconViewStyle}>
                        {typeName==='TYPE' && <Icon name="caret-down" size={20} color="#000" />}
                        {typeName==='EXPIRY' && <Icon name="calendar" size={20} color={absoluteZero} />}
                        {typeName==='ISSUED ON' && <Icon name="calendar" size={20} color={absoluteZero}/>}

                    </View>


                </View>
            </View>
        )
    }

    infoView=()=>{
        return(
            <View style={styles.checkMainView}>
                <View style={styles.checkView}>
                    <CheckBox
                        selected={this.state.termsAccepted}
                        onPress={this.handleCheckBox}
                        text='Public'
                    />
                </View>


                <View style={styles.infoView} >
                    <InfoIcon
                        size={15}
                        color={registrationBlack}
                        name={'info-with-circle'}
                    />
                    <Text style={styles.infoText}>
                        Checking this makes this Ticket visible to everyone in the app </Text>
                </View>

            </View>
        )
    }

    buttonView=()=>{
        return(
            <View style={styles.buttonMainView}>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>

            </View>
        )
    }

   render()
   {
       return(
           <View style={styles.mainView}>
               <StatusBarHeader/>
               <Header name={"Add Ticket"} navigation={this.props.navigation}/>

               <ScrollView>
                   <View>
                       {this.showView("TYPE")}
                       {this.showView("IMAGES")}
                       {this.infoView()}
                       {this.showView("EXPIRY")}
                       {this.showView("ID #")}
                       {this.showView("ISSUED BY")}
                       {this.showView("ISSUED ON")}
                       {this.buttonView()}



                   </View>
               </ScrollView>
           </View>
       )
   }

}
