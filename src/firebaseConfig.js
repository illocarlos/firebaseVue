import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDS1YgqN4PmB35NaQoCF2tCjswb-BIO39o",
    authDomain: "vue-2022-a0b86.firebaseapp.com",
    projectId: "vue-2022-a0b86",
    storageBucket: "vue-2022-a0b86.appspot.com",
    messagingSenderId: "286001330890",
    appId: "1:286001330890:web:5cc4ae1781f5ca490a9233"
};

initializeApp(firebaseConfig);
const auth = getAuth()

export { auth };