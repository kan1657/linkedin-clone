import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8Q1Fz8vCq99rgmoly0jGjd--QgWGLvoY",
  authDomain: "linkedin-7b3d7.firebaseapp.com",
  projectId: "linkedin-7b3d7",
  storageBucket: "linkedin-7b3d7.appspot.com",
  messagingSenderId: "307270191857",
  appId: "1:307270191857:web:b6003d866a94a03a9cb750",
  measurementId: "G-R5SQNPXDBP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
