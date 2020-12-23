import firebase from 'firebase';
import firestore from 'firebase/firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0mKuOY5iL2YNdfYXJAQhVLD1GcfHQoO8",
    authDomain: "id-application-1.firebaseapp.com",
    databaseURL: "https://id-application-1.firebaseio.com",
    projectId: "id-application-1",
    storageBucket: "id-application-1.appspot.com",
    messagingSenderId: "11687720573",
    appId: "1:11687720573:web:28989f8cc38cdfa0b36314"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
