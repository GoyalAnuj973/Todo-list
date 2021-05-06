import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAsc1ppjFkHq0B5ZjwVshUOKIfYU6a7jXA",
    authDomain: "todoist-8a152.firebaseapp.com",
    databaseURL: "https://todoist-8a152.firebaseio.com",
    projectId: "todoist-8a152",
    storageBucket: "todoist-8a152.appspot.com",
    messagingSenderId: "116139130121",
    appId: "1:116139130121:web:a272ccd82113a3a51767d8"
});

export { firebaseConfig as firebase };