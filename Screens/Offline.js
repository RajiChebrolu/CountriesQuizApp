import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

export const saveDataLocally = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data locally:', error);
  }
};

export const getDataLocally = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving data locally:', error);
    return null;
  }
};

export const isOnline = async () => {
  try {
    const response = await NetInfo.fetch();
    return response.isConnected;
  } catch (error) {
    console.error('Error checking internet connection:', error);
    return false;
  }
};