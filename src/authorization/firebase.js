import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
    .initializeApp({
        apiKey: "AIzaSyCxSVd0aW8r7socew8frahYmKgP0Pt6zps",
        authDomain: "chat-78ac6.firebaseapp.com",
        projectId: "chat-78ac6",
        storageBucket: "chat-78ac6.appspot.com",
        messagingSenderId: "633410396112",
        appId: "1:633410396112:web:3781f14e3ab766b115e3d5",
    })
    .auth();
