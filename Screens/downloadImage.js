import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import firebaseConfig from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const auth = getAuth(app);
const downloadImage = async (imageName) => {
  try {
    const storageRef = ref(storage, `${imageName}`);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error downloading image:', error);
    return null;
  }
};

export default downloadImage;