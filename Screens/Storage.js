
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveDataLocally = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data locally:', error);
  }
};

const getDataLocally = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving data locally:', error);
    return null;
  }
};
