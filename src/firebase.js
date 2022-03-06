// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfL7-Y9n9tIpN02g_5zAjADNiYm9MOqI4",
  authDomain: "shaffu-6ed7f.firebaseapp.com",
  projectId: "shaffu-6ed7f",
  storageBucket: "shaffu-6ed7f.appspot.com",
  messagingSenderId: "1095163580603",
  appId: "1:1095163580603:web:cf0de1534cf8bd6cd5199e",
  measurementId: "G-PB7Q7DYF1P",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
