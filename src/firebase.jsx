import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxrCUCicwnRIjGHw7sFcJQhBVcKWsHdIM",
    authDomain: "matrix-e7fe0.firebaseapp.com",
    databaseURL: "https://matrix-e7fe0.firebaseio.com",
    projectId: "matrix-e7fe0",
    storageBucket: "matrix-e7fe0.appspot.com",
    messagingSenderId: "434114030013",
    appId: "1:434114030013:web:bd1aa9bf5685c97f46cad4",
    measurementId: "G-FSDK2DP2EK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth};