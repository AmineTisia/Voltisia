import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyByelykqw5NIOXFZK_CHed0i28FQD8UYHw",
  authDomain: "voltisia.firebaseapp.com",
  projectId: "voltisia",
  storageBucket: "voltisia.firebasestorage.app",
  messagingSenderId: "145971877559",
  appId: "1:145971877559:web:3e431531d9218b24f91f32",
  measurementId: "G-7JR8XTER78"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
