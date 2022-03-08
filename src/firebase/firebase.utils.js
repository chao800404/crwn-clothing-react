/** @format */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  //   FacebookAuthProvider,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
} from "firebase/firestore";

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

export const db = getFirestore();

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
const batch = writeBatch(db);

export const addCollectionDoc = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((obj) => {
    const nycRef = doc(collectionRef);
    batch.set(nycRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubsribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubsribe();
        resolve(user);
      },
      reject
    );
  });

export const signUpUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const googleProviders = () => signInWithPopup(auth, googleProvider);

export const signOuts = () => signOut(auth);
