import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVv1usMQZV4GhLBGVFoNad5Nezqpqebck",
    authDomain: "old-stuff-exchange-3d9f0.firebaseapp.com",
    projectId: "old-stuff-exchange-3d9f0",
    storageBucket: "old-stuff-exchange-3d9f0.appspot.com",
    messagingSenderId: "540537203378",
    appId: "1:540537203378:web:b56c2e802c44401636f7ab",
    measurementId: "G-4DLFT3SHEW"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
