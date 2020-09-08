import firebase from 'firebase/app'
import 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB8mvVOT_Y98F55qdfLrvUp08EV0dfWzko",
    authDomain: "fsb-con-us.firebaseapp.com",
    databaseURL: "https://fsb-con-us.firebaseio.com",
    projectId: "fsb-con-us",
    storageBucket: "fsb-con-us.appspot.com",
    messagingSenderId: "428062516612",
    appId: "1:428062516612:web:700ec2fa046adf776ee9d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;