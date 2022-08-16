import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAb54H9tMAPHHGO2GmNhJA3L2O5SboGD6A",
  authDomain: "chatapp-83a75.firebaseapp.com",
  projectId: "chatapp-83a75",
  storageBucket: "chatapp-83a75.appspot.com",
  messagingSenderId: "427823025306",
  appId: "1:427823025306:web:a06603efea507bdd6ae323",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
