
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDUbyTb2nkJGurGI10omCw-t0QNKW38GFM",
    authDomain: "feedback-system-73d1f.firebaseapp.com",
    projectId: "feedback-system-73d1f",
    storageBucket: "feedback-system-73d1f.firebasestorage.app",
    messagingSenderId: "608355502220",
    appId: "1:608355502220:web:3c19ddd46429f74ebe53a9",
    measurementId: "G-SWCY6ZY7RG"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  export { auth, provider };
