import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const countriesListData = [
  { name: 'Australia', capital: 'Canberra' },
  { name: 'Federated States of Micronesia', capital: 'Palikir' },
  { name: 'Fiji', capital: 'Suva' },
  { name: 'Kiribati', capital: 'South Tarawa/ Bairiki' },
  { name: 'Marshall Islands', capital: 'Majuro' },
  { name: 'Nauru', capital: 'Yaren' },
  { name: 'New Zealand', capital: 'Wellington' },
  { name: 'Palau', capital: 'Ngerulmud' },
  { name: 'Papua New Guinea', capital: 'Port Moresby' },
  { name: 'Samoa', capital: 'Apia' },
  { name: 'Solomon Islands', capital: 'Honiara' },
  { name: 'Tonga', capital: 'Nukualofa' },
  { name: 'Tuvalu', capital: 'Funafuti' },
  { name: 'Vanuatu', capital: 'Port Vila' },

  
];

const CountriesList = () => {
  const navigation = useNavigation()
  const renderCountry = ({ item }) => (
    <View style={styles.countryContainer}>
      <Text style={styles.countryName}>{item.name}</Text>
      <Text style={styles.capitalName}>{item.capital}</Text>
    </View>
  );

  return (
    <View>
      <View style={styles.container}>    

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz instructions page')}>
          <Text style={styles.buttonText}>QUIZ-></Text>
        </TouchableOpacity>

      </View>
      <Text style={styles.textHeader}>There are a total of {countriesListData.length} countries that are within Oceania. </Text>
      <Text style={styles.textHeaderData}>These are mentioned below:</Text>
      <FlatList
        data={countriesListData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCountry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop:30,
      },
      textHeaderData: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop:5,

      },
  countryContainer: {
    paddingTop: 30,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#0437F2",
  },
  capitalName: {
    fontSize: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: '#3ED8E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: '#0437F2',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {     
    justifyContent: 'space-between',     
    paddingLeft:260,
    marginRight: 20,
    marginTop:10,
  },
});

export default CountriesList;
