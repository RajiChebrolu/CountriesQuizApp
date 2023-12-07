import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import AppButton from '../Components/AppButton';
import { useNavigation } from '@react-navigation/native';

const ContactPage = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Image style={{
            width:350,
            height:250,
            marginTop:30,
            alignSelf:'center',
            borderRadius: 25,
        }} source={require('../assets/Contactme.png')} />
        <Text style={styles.textContainer}>Thank you for choosing the Quiz app!!!!!!!!!!</Text>
        <AppButton title="PRESS OK" onPress={()=>Alert.alert(' Thank you for choosing the Quiz App!!!!!!!!!!', 
      'Do you refer this app to others', 
      [
        {text: 'YES'},
        {text: 'NO'}
      ])}/>
    </View>
  )
}

export default ContactPage

const styles = StyleSheet.create({
    textContainer:{
        marginTop: 50,
        fontSize: 30,
        fontWeight:"bold",
        textAlign:"center",      
        color:"#0437F2"     
              
        }
})