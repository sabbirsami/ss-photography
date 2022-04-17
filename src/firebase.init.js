// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgTW8y3wPnOGe9_carMhI79v6pEBo_kPE",
    authDomain: "ss-photography-2022.firebaseapp.com",
    projectId: "ss-photography-2022",
    storageBucket: "ss-photography-2022.appspot.com",
    messagingSenderId: "870019844720",
    appId: "1:870019844720:web:3ca6058f27415e477d42b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
