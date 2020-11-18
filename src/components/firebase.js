// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//at first npm i firebase
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6fhOdsvVOr2GJEgZtg7IRvyfrOxFpQIQ",
  authDomain: "apartment-hunt-2bcc4.firebaseapp.com",
  databaseURL: "https://apartment-hunt-2bcc4.firebaseio.com",
  projectId: "apartment-hunt-2bcc4",
  storageBucket: "apartment-hunt-2bcc4.appspot.com",
  messagingSenderId: "601708743467",
  appId: "1:601708743467:web:538881d2ac006cb54bd36e",
  measurementId: "G-GDSRXHNQH4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
