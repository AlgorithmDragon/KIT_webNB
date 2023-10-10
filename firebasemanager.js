import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8j6fUUKRklaF7AtxfWnNlcbSe-QRaLkE",
  authDomain: "kitwebnb.firebaseapp.com",
  databaseURL: "https://kitwebnb-default-rtdb.firebaseio.com",
  projectId: "kitwebnb",
  storageBucket: "kitwebnb.appspot.com",
  messagingSenderId: "770056861850",
  appId: "1:770056861850:web:6c155ce60dbe3d877ac723",
  measurementId: "G-NC63BL75T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export {database, firebaseConfig };
