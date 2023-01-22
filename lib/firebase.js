import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBL3CG0tgQ501M7fQjkaX-3fj9xVO075y4",
    authDomain: "signal-mob.firebaseapp.com",
    projectId: "signal-mob",
    storageBucket: "signal-mob.appspot.com",
    messagingSenderId: "367746239828",
    appId: "1:367746239828:web:490e6e3823859c78a34cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };