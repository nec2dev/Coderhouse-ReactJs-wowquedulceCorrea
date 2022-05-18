// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCatYaZMVStsy9QGfqyfBhSdkMBlLGGNwU",
  authDomain: "wooow-8464a.firebaseapp.com",
  projectId: "wooow-8464a",
  storageBucket: "wooow-8464a.appspot.com",
  messagingSenderId: "86234885968",
  appId: "1:86234885968:web:fac03e6a12b2654afec655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFireStoreApp = () => {
    return app
}