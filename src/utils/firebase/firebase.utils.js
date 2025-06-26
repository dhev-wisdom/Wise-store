import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs  } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAO-vFjvdndN2ggJT0pFHJ2CWwvx5zdRmk",
  authDomain: "wise-clothing-db.firebaseapp.com",
  projectId: "wise-clothing-db",
  storageBucket: "wise-clothing-db.firebasestorage.app",
  messagingSenderId: "1015184654229",
  appId: "1:1015184654229:web:ecb8aa284d7747305f009c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters(
  {prompt: 'select_account'}
)

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);

// if (window.location.hostname === "localhost") { // A simple check for local development
//   console.log("Connecting to Firebase Emulators...");
//   connectFirestoreEmulator(db, 'localhost', 8080); // Default Firestore emulator port
//   connectAuthEmulator(auth, 'http://localhost:9099'); // Default Auth emulator port
// }

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return null;
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log("User Auth: ", userAuth);
  console.log(userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // Check if user data exists
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    console.log("got here 1");

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
      console.log("try ended");
    } catch(error) {
      console.log("There was an error creating the user: ", error);
    }
  } 

  console.log("usersnapshot exists");

  // if user data doesn't exist
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return null;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutAuthUser = async () => {
  return await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
