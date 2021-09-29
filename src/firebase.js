import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCss33kuOhca1tk0TiJ20t_DiBqT3cvpOE",
    authDomain: "clone-dc43e.firebaseapp.com",
    projectId: "clone-dc43e",
    storageBucket: "clone-dc43e.appspot.com",
    messagingSenderId: "433411848574",
    appId: "1:433411848574:web:3f9b464f9cb892a55fdb2f",
    measurementId: "G-6QPEDNMBDE"
})


// const db = firebaseApp.firestore();
const auth = firebase.auth()

export { auth }