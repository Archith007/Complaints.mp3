import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBor_q1z7ekcE_6cy6dMBUnIp6mzbR0yUg",
  authDomain: "complai-40075.firebaseapp.com",
  projectId: "complai-40075",
  storageBucket: "complai-40075.appspot.com",
  messagingSenderId: "351431038399",
  appId: "1:351431038399:web:1337a484bcce7c8ddd3d0a"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

