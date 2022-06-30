import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZzoDEv430uoxGWvC6BFw1UmCq82wXUEQ",
  authDomain: "reactnative-uber-eats-clone.firebaseapp.com",
  projectId: "reactnativecls-uber-eats-clone",
  storageBucket: "reactnative-uber-eats-clone.appspot.com",
  messagingSenderId: "5233605810",
  appId: "1:5233605810:web:a7f2bca8318131bd069dab",
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;














