import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    piKey: "AIzaSyD8j6fUUKRklaF7AtxfWnNlcbSe-QRaLkE",
    authDomain: "kitwebnb.firebaseapp.com",
    databaseURL: "https://kitwebnb-default-rtdb.firebaseio.com",
    projectId: "kitwebnb",
    storageBucket: "kitwebnb.appspot.com",
    messagingSenderId: "770056861850",
    appId: "1:770056861850:web:6c155ce60dbe3d877ac723",
    measurementId: "G-NC63BL75T8"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


export {firebase, database};
export {firebase, auth }; 