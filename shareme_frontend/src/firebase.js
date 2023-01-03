
import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "reactprojects-12bbe.firebaseapp.com",
  databaseURL: "https://reactprojects-12bbe-default-rtdb.firebaseio.com",
  projectId: "reactprojects-12bbe",
  storageBucket: "reactprojects-12bbe.appspot.com",
  messagingSenderId: "742066518833",
  appId: "1:742066518833:web:973c4e770c3435a59d4e10",
  measurementId: "G-D5DVF14950"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, app};