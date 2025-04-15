
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDftwOrhnzJPvesE3bEjZx19lBlrtpsHPI",
  authDomain: "aseelpos.firebaseapp.com",
  projectId: "aseelpos",
  storageBucket: "aseelpos.firebasestorage.app",
  messagingSenderId: "171107286812",
  appId: "1:171107286812:web:b83d49f7ca184c7aec84d9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("message").textContent = "فشل تسجيل الدخول. تحقق من البيانات.";
    });
});
