import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCLd8o5z-xsiaMLlCwmHSJzh2SwTZ-gI2Y",
    authDomain: "otp-app-5b47a.firebaseapp.com",
    projectId: "otp-app-5b47a",
    storageBucket: "otp-app-5b47a.appspot.com",
    messagingSenderId: "499855428479",
    appId: "1:499855428479:web:231f3f7aaad65235d1e84a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase