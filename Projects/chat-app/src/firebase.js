import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCcyVIcFzf-J016ow4wzNfqcDlINyTRCL4",
    authDomain: "chat-chat-40897.firebaseapp.com",
    projectId: "chat-chat-40897",
    storageBucket: "chat-chat-40897.appspot.com",
    messagingSenderId: "687385793872",
    appId: "1:687385793872:web:024187743e6bdbd0f70855"
  }).auth();