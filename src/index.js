import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCatYaZMVStsy9QGfqyfBhSdkMBlLGGNwU",
  authDomain: "wooow-8464a.firebaseapp.com",
  projectId: "wooow-8464a",
  storageBucket: "wooow-8464a.appspot.com",
  messagingSenderId: "86234885968",
  appId: "1:86234885968:web:fac03e6a12b2654afec655"
};
const app = initializeApp(firebaseConfig);
export const getFireStoreApp = () => {
    return app
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
reportWebVitals();
