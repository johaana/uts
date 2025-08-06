// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "utsavs",
  appId: "1:137590302946:web:b879542562629df4d8d6bb",
  storageBucket: "utsavs.appspot.com",
  apiKey: "AIzaSyAW6KIpv1onQWuQllpnhPeZDe7_DBw4PUU",
  authDomain: "utsavs.firebaseapp.com",
  messagingSenderId: "137590302946",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
