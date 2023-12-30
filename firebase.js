// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyD_PXnZUFn91tO7Sq2MsNcaeNrMe041QAQ",
  // authDomain: "tinder-rn-clone-a8f3a.firebaseapp.com",
  // projectId: "tinder-rn-clone-a8f3a",
  // storageBucket: "tinder-rn-clone-a8f3a.appspot.com",
  // messagingSenderId: "182267831536",
  // appId: "1:182267831536:web:1f090e2c33a0f1a8fc8e35",
  apiKey: "AIzaSyDIoyqUoqXXTSGWt1m7XmWU15ujl6aIfQA",
  authDomain: "tinderclone-86ac4.firebaseapp.com",
  projectId: "tinderclone-86ac4",
  storageBucket: "tinderclone-86ac4.appspot.com",
  messagingSenderId: "96155941145",
  appId: "1:96155941145:web:1d3bc072c360ab4a11ad88",
  measurementId: "G-EC21QVKVX9",
};

// Initialize Firebase
let app, auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}
const provider = new EmailAuthProvider();
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, auth, provider, db, timestamp };
