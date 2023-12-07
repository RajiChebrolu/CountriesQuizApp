import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const QuizInstructions = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.textHeader}>Quiz instructions to play quiz</Text>
      <Text style ={styles.text}>1. There are 14 questions in the quiz.</Text>
      <Text style ={styles.text}>2. Each correct answer: 1 point</Text>
      <Text style ={styles.text}>3. Total possible points: 14</Text>
      <Text style ={styles.text}>4. Each question has 15 seconds time to choose.</Text>
      <Text style ={styles.text}>5. Score and percentage will get the end of Quiz.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz Page')}>
          <Text style={styles.buttonText}>PLAY QUIZ</Text>
      </TouchableOpacity>
    </View>
  )
}

export default QuizInstructions

const styles = StyleSheet.create({
    button: {
        width: 200,
        backgroundColor: '#3ED8E2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        alignSelf: "center",
        marginTop: 100,
      },
      textHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop:30,
        textDecorationLine: "underline"
      },
      buttonText: {
        color: '#0437F2',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      text: {
        marginTop:20,
        fontSize:20,
        marginLeft: 20,
        alignItems: "center"
      }
})