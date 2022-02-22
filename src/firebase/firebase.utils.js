/** @format */
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHzLF-jAfhoPE1P5sT27zcnBfxrK86a-Q",
  authDomain: "crwn-db-df543.firebaseapp.com",
  projectId: "crwn-db-df543",
  storageBucket: "crwn-db-df543.appspot.com",
  messagingSenderId: "431602891181",
  appId: "1:431602891181:web:75ab5ecb15250e432f0924",
  measurementId: "G-9B67L1XH58",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      GoogleAuthProvider.credentialFromResult(result);
    })
    .catch((error) => {
      GoogleAuthProvider.credentialFromError(error);
    });
}

// export default firebase;
