import firebase from "firebase";

// const firebaseApp =
firebase.initializeApp({
  apiKey: "AIzaSyChyo5pBvDHH96_8LNf4lx0GCTkNXWQN9I",
  authDomain: "portfolio-191fa.firebaseapp.com",
  databaseURL: "https://portfolio-191fa.firebaseio.com",
  projectId: "portfolio-191fa",
  storageBucket: "portfolio-191fa.appspot.com",
  messagingSenderId: "224011467257",
  appId: "1:224011467257:web:eca2ba7c705d928dc96528",
});

const auth = firebase.auth();

export { auth };
