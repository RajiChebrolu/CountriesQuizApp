import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import downloadImage from './downloadImage';


const HomeScreen = () => {
  const [imageURL, setImageURL] = useState(null);
  const navigation = useNavigation()
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
  return (
    <View>
      {imageURL && <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/capitalquiz-d40a7.appspot.com/o/logo.png?alt=media&token=c1d1805f-f2e3-4c10-b6e7-430fd3cfd2cc' }} style={{ width: 350, height: 200, marginBottom: 30, marginTop: 40, alignSelf:'center',   
        borderRadius: 20}} />}
      <Text style ={{
                fontSize: 25, 
                fontWeight: "bold", 
                textAlign: "center", 
                color: "black", 
                marginBottom: 50, 
                textDecorationLine: "underline",
                }}>Welcome to Countries Quiz!!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Countries List')}>
        <Text style ={{
          fontSize: 30,
          fontWeight:"bold",
          textAlign:"center",
          textDecorationLine:"underline",    
          color:"#0437F2",
          marginBottom: 50
        }

        }>COUNTRIES LIST TO READ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz instructions page')}>
        <Text style ={{
          fontSize: 30,
          fontWeight:"bold",
          textAlign:"center",
          textDecorationLine:"underline",    
          color:"#0437F2"
        }

        }>PLAY QUIZ</Text>
      </TouchableOpacity>
      
                
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})