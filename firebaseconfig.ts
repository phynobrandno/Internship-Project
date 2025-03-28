// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrEnrr3NumQn6Zc673jUW_0HzhSX8Z7M0",
  authDomain: "wechart-market-a9b5f.firebaseapp.com",
  projectId: "wechart-market-a9b5f",
  storageBucket: "wechart-market-a9b5f.firebasestorage.app",
  messagingSenderId: "345481297453",
  appId: "1:345481297453:web:676ac9585e3c4e903342a4",
  measurementId: "G-21D3RRPWHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Firebase_auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);