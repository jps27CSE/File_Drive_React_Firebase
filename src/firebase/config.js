import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDYaTxoPiDOhNyNq94DMqLy6Tf3PYSpin0",
  authDomain: "file-drive-react.firebaseapp.com",
  projectId: "file-drive-react",
  storageBucket: "file-drive-react.appspot.com",
  messagingSenderId: "111848970255",
  appId: "1:111848970255:web:91a7e2a60fed56cfdceb7a",
});

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const auth = app.auth();

export default app;
