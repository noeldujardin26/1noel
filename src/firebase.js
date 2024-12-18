import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuration de Firebase (remplace les valeurs par celles de ton projet)
const firebaseConfig = {
    apiKey: "AIzaSyAVFsHc-eMdaBjQQUxUxu6pY8zc5txRYaM",
    authDomain: "produit-e5e56.firebaseapp.com",
    projectId: "produit-e5e56",
    storageBucket: "produit-e5e56.firebasestorage.app",
    messagingSenderId: "78643608511",
    appId: "1:78643608511:web:6d675f68497d935ee93f0a",
    measurementId: "G-3VD92DZ14Q"
  };
// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore
const db = getFirestore(app);

export default db;
