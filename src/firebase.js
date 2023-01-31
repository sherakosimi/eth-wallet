import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC1GZVNxYTnJ9kWk5lvfoOMieevcsvpwFw",
  authDomain: "software-engineering-wit.firebaseapp.com",
  projectId: "software-engineering-wit",
  storageBucket: "software-engineering-wit.appspot.com",
  messagingSenderId: "492982996263",
  appId: "1:492982996263:web:1029e8ae9f47630fcbad02",
});
export const auth = app.auth();
export default app;
