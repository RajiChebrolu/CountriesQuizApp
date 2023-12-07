import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const AppButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
    buttonContainer:{
        width: 200,
        height:50,
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor:"#3ED8E2",
        marginTop:40,
        justifyContent:"center",
        alignSelf: "center"

    },

    buttonText:{      
        textAlign:"center",
        fontSize:22,
        color:"#0437F2",
        fontWeight:"bold"

    },
});