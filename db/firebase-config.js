import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE9ylqa6lsQCuaBDnykr3rKQhDNvL4Ca4",
  authDomain: "proyecto-react-73de1.firebaseapp.com",
  projectId: "proyecto-react-73de1",
  storageBucket: "proyecto-react-73de1.appspot.com",
  messagingSenderId: "740802407426",
  appId: "1:740802407426:web:5cbb2cac1caffaf5b3cb1b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;