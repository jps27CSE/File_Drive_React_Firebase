import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDYaTxoPiDOhNyNq94DMqLy6Tf3PYSpin0",
  authDomain: "file-drive-react.firebaseapp.com",
  projectId: "file-drive-react",
  storageBucket: "file-drive-react.appspot.com",
  messagingSenderId: "111848970255",
  appId: "1:111848970255:web:91a7e2a60fed56cfdceb7a",
});

export const auth = app.auth();

export default app;
