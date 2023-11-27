// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIr4JqqjXM0YEsn8-9Ktn3uuiVB-LrE2w",
  authDomain: "anime-17928.firebaseapp.com",
  projectId: "anime-17928",
  storageBucket: "anime-17928.appspot.com",
  messagingSenderId: "819545062487",
  appId: "1:819545062487:web:45de642a16a2ce3b757712",
  measurementId: "G-Q6WM3ST3M4",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)
export default app 
export { auth, analytics,db }
