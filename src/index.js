// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDcMUieedxayH_sh95iTcnjY6avvyFpe6c",

  authDomain: "teste-fcamara-b5fc2.firebaseapp.com",

  projectId: "teste-fcamara-b5fc2",

  storageBucket: "teste-fcamara-b5fc2.appspot.com",

  messagingSenderId: "530027337097",

  appId: "1:530027337097:web:b98acd9071092dd121bd58",

  measurementId: "G-H1EBWGHFK0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

async function getCharacter(db) {
  const charCol = collection(db, "character");
  const charSnapshot = await getDocs(charCol);
  const charList = charSnapshot.docs.map((doc) => doc.data());
  return charList;
}
