import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyD0mKuOY5iL2YNdfYXJAQhVLD1GcfHQoO8',
  authDomain: 'id-application-1.firebaseapp.com',
  databaseURL: 'https://id-application-1.firebaseio.com',
  projectId: 'id-application-1',
  storageBucket: 'id-application-1.appspot.com',
  messagingSenderId: '11687720573',
  appId: '1:11687720573:web:28989f8cc38cdfa0b36314'
}


const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
//firebase.analytics();
// const messaging = firebase.messaging()

// export {
//   messaging,
//   firebaseApp
// }

export default firebaseApp.firestore()
