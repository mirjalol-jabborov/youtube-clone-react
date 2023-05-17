import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAc9ISjswlYRYIrw_zg928fbvL_r8oUOQA",
  authDomain: "test-first-a3420.firebaseapp.com",
  projectId: "test-first-a3420",
  storageBucket: "test-first-a3420.appspot.com",
  messagingSenderId: "844880851367",
  appId: "1:844880851367:web:ed0d6e7200cef40d440682",
  measurementId: "G-LVV70JP0CY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider }