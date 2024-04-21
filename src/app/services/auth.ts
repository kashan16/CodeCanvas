import { getAuth } from "firebase/auth";
import app from "../firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMQIHI9FUD6f8b61cSFiNUaJuGkRdAHgM",
    authDomain: "codex-8a33b.firebaseapp.com",
    projectId: "codex-8a33b",
    storageBucket: "codex-8a33b.appspot.com",
    messagingSenderId: "748508014565",
    appId: "1:748508014565:web:dc6b3c25a5da0c6bad310c",
    measurementId: "G-719HS4CYBC"
  };

const auth = getAuth(app);

export default auth;