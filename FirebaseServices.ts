import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMG0_WkyNrzxQR5V_61EtENe-R1LH_5as",
  authDomain: "adamus-beneficiaries.firebaseapp.com",
  projectId: "adamus-beneficiaries",
  storageBucket: "adamus-beneficiaries.appspot.com",
  messagingSenderId: "175408638830",
  appId: "1:175408638830:web:0bf38e07a07680c6d46f7f",
  measurementId: "G-4061N71JH9",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
