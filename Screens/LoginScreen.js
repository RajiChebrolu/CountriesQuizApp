import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import AppTextInput from '../Components/AppTextInput';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { saveDataLocally, getDataLocally, isOnline } from './Offline';
import downloadImage from './downloadImage';
import firebaseConfig from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';




  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageURL, setImageURL] = useState(null);
    const navigation = useNavigation();
    useEffect(() => {
      const fetchImage = async () => {
        const imageName = 'logo.png';
        const url = await downloadImage(imageName);
        if (url) {
          setImageURL(url);
        }
      };
  
      fetchImage();
    }, []);
    useEffect(() => {    
      const loadEmail = async () => {
        try {
          const savedEmail = await AsyncStorage.getItem('savedEmail');
          if (savedEmail !== null) {
            setEmail(savedEmail);
          }
        } catch (error) {
          console.error("Error loading email from AsyncStorage:", error);
        }
      };
  
      loadEmail();
    }, []);
    
    useEffect(() => {      
      saveDataLocally('exampleKey', { exampleData: 'value' });
      getDataLocally('exampleKey').then((data) => console.log('Retrieved data:', data));
  
      isOnline().then((online) => console.log('Is online:', online));
    }, []);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log("User logged in with:", user.email);
            navigation.navigate('Home Page');
          })
          .catch(error => alert(error.message));
      };
      
      const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log("User registered with:", user.email);
          })
          .catch(error => alert(error.message));
      };
      useEffect(() => {
        const saveEmail = async () => {
          try {
            await AsyncStorage.setItem('savedEmail', email);
          } catch (error) {
            console.error("Error saving email to AsyncStorage:", error);
          }
        };
    
        saveEmail();
      }, [email]);

  return (
    <View>
      {imageURL && <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/capitalquiz-d40a7.appspot.com/o/logo.png?alt=media&token=c1d1805f-f2e3-4c10-b6e7-430fd3cfd2cc' }} style={{ width: 350, height: 200, marginBottom: 30, marginTop: 40, alignSelf:'center',   
        borderRadius: 20}} />}
      
      <View style={{marginBottom: 20}}>        
        <AppTextInput placeholder="Enter your username here!!!" icon="email" value= {email} onChangeText={text=>setEmail(text)} autoCompleteType="email"/>
        <AppTextInput placeholder="Enter your password here!!!" icon="lock" value= {password} onChangeText={text=>setPassword(text)} autoCompleteType="password" secureTextEntry />
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 50,
        marginTop:50,
      },
      button: {
        backgroundColor: '#3ED8E2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
      },
      buttonText: {
        color: '#0437F2',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})