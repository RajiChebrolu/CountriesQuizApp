import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import quizData from './QuizData';
import { useNavigation } from '@react-navigation/native';

const Quiz = () => {
  const navigation = useNavigation()

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] =useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timer, setTimer] = useState(10);
    const [timerInterval, setTimerInterval] = useState(null);    

    const handleAnswer= (selectedAnswer) => {
        clearInterval(timerInterval);
        setTimerInterval(null);
        setTimer(15);
        const answer = quizData[currentQuestion]?.answer;
        if (answer === selectedAnswer){
            setScore((previousScore)=> previousScore + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
        }
    }
    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }
    useEffect(() => {       
        let timerInterval; 
        if (timer > 0 && !showScore) {
            timerInterval = setInterval(() => {
              setTimer((prevTimer) => prevTimer - 1);
            }, 1500);
          } else if (!showScore) {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < quizData.length) {
              setCurrentQuestion(nextQuestion);
              setTimer(15);
            } else {
              setShowScore(true);
            }
          }
        
          return () => {
            clearInterval(timerInterval);
          };
        }, [currentQuestion, timer, showScore, quizData]);


  return (
    <View style={styles.container}>
        {showScore ? (
        <View>
            <View style={styles.circleContainer}>
                <Text style={styles.percentageText}>{((score /quizData.length)* 100).toFixed(2)}%</Text>
            </View>
            <Text style={styles.scoreText}>Score: {score} / {quizData.length}</Text>
            <Text style = {styles.scoreOptions}>{score}</Text>
            <TouchableOpacity onPress={handleRestart}>
                <Text style = {styles.resetButtonText}>RESET</Text>                
            </TouchableOpacity>           
            
        </View>):
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
        <Text style={styles.timerText}>Time: {timer}s</Text>
        {quizData[currentQuestion]?.options.map((item) => {
            return<TouchableOpacity style={styles.optionContainer} onPress={()=>handleAnswer(item)}>
                <Text style={styles.options}>{item}</Text>
            </TouchableOpacity>
        })}       

      </View>
        }
        <TouchableOpacity onPress={()=>navigation.navigate('Contact page')}>
          <Text style = {styles.resetButtonText}>CONTACT</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    },

    questionContainer: {
        backgroundColor:"white",
        padding: 30,
        margin:20,
        borderRadius: 15,
    },
    options: {
        color:"green",
        padding: 15,
        fontSize: 19,
        alignSelf: "center"
    },
    optionContainer: {
        borderColor:"#3498db",
        borderWidth: 4,
        marginTop:15,
        borderRadius:10,
    },
    questionText: {
        fontSize: 22,

    },
    resetButtonText: {
        fontSize: 30,        
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',        
        fontWeight: 'bold', 
        textDecorationLine:"underline",       
    },
    scoreOptions: {
        fontSize: 50,
        alignSelf: "center",
        color: "white",
        fontWeight: 'bold',
    },
    timerText: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 10,
        color: 'red',
      },
    circleContainer: {
        width: 200,
        height: 200,
        borderRadius: 75,
        backgroundColor: '#3498db', 
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,
      },
    
      percentageText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
      },
    
      scoreText: {
        fontSize: 50,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: "white",
        fontWeight: 'bold'
      },

})