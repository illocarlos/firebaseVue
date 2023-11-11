import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// paquete de firebase para llamar documentos y objetos
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyDS1YgqN4PmB35NaQoCF2tCjswb-BIO39o",
    authDomain: "vue-2022-a0b86.firebaseapp.com",
    projectId: "vue-2022-a0b86",
    storageBucket: "vue-2022-a0b86.appspot.com",
    messagingSenderId: "286001330890",
    appId: "1:286001330890:web:5cc4ae1781f5ca490a9233"
};

initializeApp(firebaseConfig);
const auth = getAuth();
// llamamos la base de datos creada en firebase con sus objetos
const db = getFirestore();
// exportamos auth y db
export { auth, db };