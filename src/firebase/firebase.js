import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGBxVH2IsgfgPWXTzO6AMi7Y1cX4scXMY",
  authDomain: "email-clone-b83fa.firebaseapp.com",
  projectId: "email-clone-b83fa",
  storageBucket: "email-clone-b83fa.appspot.com",
  messagingSenderId: "442142111875",
  appId: "1:442142111875:web:705cbc664e42a7ff9dc3b6",
  measurementId: "G-VXRGCHP16E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
