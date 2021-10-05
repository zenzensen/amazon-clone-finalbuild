// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyByROjL4fYCBW8ge1OscLBR_RwgFTPliCE",
    authDomain: "clone-151f4.firebaseapp.com",
    projectId: "clone-151f4",
    storageBucket: "clone-151f4.appspot.com",
    messagingSenderId: "580198344700",
    appId: "1:580198344700:web:1e1e2b751e89fdd8b8f479",
    measurementId: "G-J1XZBYCB53"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };