/** @format */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  //   FacebookAuthProvider,
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHzLF-jAfhoPE1P5sT27zcnBfxrK86a-Q",
  authDomain: "crwn-db-df543.firebaseapp.com",
  projectId: "crwn-db-df543",
  storageBucket: "crwn-db-df543.appspot.com",
  messagingSenderId: "431602891181",
  appId: "1:431602891181:web:75ab5ecb15250e432f0924",
  measurementId: "G-9B67L1XH58",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export const auth = getAuth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    await setDoc(userRef, {
      displayName,
      email,
      createdDate,
      ...additionalData,
    });
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

const googleProvider = new GoogleAuthProvider();
// const fbProvider = new FacebookAuthProvider();

export function signInWithGoogle() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      GoogleAuthProvider.credentialFromResult(result);
    })
    .catch((error) => {
      GoogleAuthProvider.credentialFromError(error);
    });
}

// export function signInWithFacebook() {
//   signInWithPopup(auth, fbProvider)
//     .then((result) => {
//       FacebookAuthProvider.credentialFromResult(result);
//     })
//     .catch((error) => {
//       FacebookAuthProvider.credentialFromError(error);
//     });
// }
