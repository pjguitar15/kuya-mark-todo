import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6g7QXP9Q2JsGpcCS1JJcsBUtWL0aikHU",
  authDomain: "todo-list-de7e6.firebaseapp.com",
  databaseURL: "https://todo-list-de7e6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-de7e6",
  storageBucket: "todo-list-de7e6.appspot.com",
  messagingSenderId: "231318055185",
  appId: "1:231318055185:web:4690c4b88696e961cf84b0"
};

firebase.initializeApp(firebaseConfig)

export default firebase