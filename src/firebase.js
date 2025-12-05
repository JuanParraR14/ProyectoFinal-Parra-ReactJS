import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAidmD6jArKa7kkFB6y82Jf13HE_4P_Qn4",
  authDomain: "proyectofinal-parra.firebaseapp.com",
  projectId: "proyectofinal-parra",
  storageBucket: "proyectofinal-parra.firebasestorage.app",
  messagingSenderId: "304817026488",
  appId: "1:304817026488:web:7053d588a12e55d8978b4d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);