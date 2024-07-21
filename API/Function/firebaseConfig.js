import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPmPPA2AI8Dq3CzGUH-zusZ0kJSLsRNE0",
  authDomain: "chat-app-186d1.firebaseapp.com",
  projectId: "chat-app-186d1",
  storageBucket: "chat-app-186d1.appspot.com",
  messagingSenderId: "835388868008",
  appId: "1:835388868008:web:9ac37b128274c8bcbc099d",
  measurementId: "G-YQY2SFJ323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)