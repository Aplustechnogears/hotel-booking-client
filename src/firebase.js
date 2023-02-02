import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCqiDxbUAX9iUvIgp1urTym5IHUWfRF-w8",
    authDomain: "e-commerce-images.firebaseapp.com",
    databaseURL: "https://e-commerce-images.firebaseio.com",
    projectId: "e-commerce-images",
    storageBucket: "e-commerce-images.appspot.com",
    messagingSenderId: "869657986499",
    appId: "1:869657986499:web:23d0a060e12195fdeb6976"
  };
  
  // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;