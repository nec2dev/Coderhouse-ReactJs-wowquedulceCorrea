import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    APIKEY: process.env.REACT_APP_APIKEY,
    AUTHDOMAIN: process.env.REACT_APP_AUTHDOMAIN,
    REACT_APP_PROJECTID: process.env.REACT_APP_PROJECTID,
    REACT_APP_STORAGEBUCKET: process.env.REACT_APP_STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.REACT_APP_MESSAGINGSENDERID,
    APPID: process.env.REACT_APP_APPID
};
const app = initializeApp(firebaseConfig);
export const getFireStoreApp = () => {
    return app
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    App / >
);
reportWebVitals();