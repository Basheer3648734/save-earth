import {initializeApp} from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAqqg9dUEVmb0e0ywn-NLw0EIMIPPBfG6Y",
    authDomain: "save-earth-d5618.firebaseapp.com",
    databaseURL: "https://save-earth-d5618.firebaseio.com",
    projectId: "save-earth-d5618",
    storageBucket: "save-earth-d5618.appspot.com",
    messagingSenderId: "438054898095",
    appId: "1:438054898095:web:6e39168e7bf8ed3079475a"
  };
  const app=initializeApp(firebaseConfig);
  const db=app.firestore();
  export default db;