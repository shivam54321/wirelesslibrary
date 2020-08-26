import React, {Component} from 'react';
import {Text,View,StyleSheet,Button,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class transactionscreen extends Component{
  constructor(){
super()
this.state = {
  hasCameraPermissions: null,
   scanned: false,
    scannedData: '',
   buttonState : 'normal'
}
  }
 
  
    getCameraPermissions = async () =>{ 
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
     this.setState({ hasCameraPermissions: status === "granted",
      buttonState: 'clicked', scanned: false }); }

      handleBarcodeScanner = async ({type,data}) =>{
       this.setState({
         scanned:true,
         scannedData:data,
         buttonState:'normal'
       })

      }


  
render(){
 const hasCameraPermissions = this.state.hasCameraPermissions
const scanned = this.state.scanned,
const buttonState = this.state.buttonState 
if (buttonState === "clicked" && hasCameraPermissions) {
return (
  <BarCodeScanner
  onBarCodeScanned = {scanned?undefined:this.handleBarcodeScanner}
  style = {StyleSheet.absoluteFillObject}
  />)

}
else if (buttonState === "normal"){
  

  return(
<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
  <Image
  source = {recquire ("../assests/boooklogo..jpg")}
  style={{width:200, height: 200}}
  />
<Text style={{textAlign: 'center', fontSize: 30}}>Wireless library </Text>

</View>
 <View style={styles.inputView}>
 <TextInput 
   style={styles.inputBox}
   placeholder="Book Id"
   value={this.state.scannedBookId}/>   
<TouchableOpacity 
style={styles.scanButton}
onPress={()=>{
this.getCameraPermissions("BookId")
 }}>
<Text style={styles.buttonText}>Scan</Text>
</TouchableOpacity>
</View>
<View style={styles.inputView}>
<TextInput 
style={styles.inputBox}
placeholder="Student Id"
value={this.state.scannedStudentId}/>
<TouchableOpacity 
style={styles.scanButton}
onPress={()=>{
this.getCameraPermissions("StudentId")
 }}>
<Text style={styles.buttonText}>Scan</Text>
</TouchableOpacity>
</View>
)
}
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
  inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  scanButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
  }
});


