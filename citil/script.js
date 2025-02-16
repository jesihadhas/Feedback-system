
import { auth, provider } from "./firebase-config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", function () {
    // Toggle between login and signup forms
    window.toggleForm = function () {
        console.log("Toggle function called"); // Debugging

        let loginForm = document.getElementById("login-form");
        let signupForm = document.getElementById("signup-form");

        if (loginForm && signupForm) {
            loginForm.classList.toggle("hidden");
            signupForm.classList.toggle("hidden");
        } else {
            console.error("Form elements not found!");
        }
    };

    // Login with Email & Password
    document.getElementById("loginBtn").addEventListener("click", () => {
        console.log("Login button clicked");

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User logged in:", userCredential.user);
                window.location.href = "index1.html"; // Redirect after login
            })
            .catch((error) => {
                console.error("Login failed:", error.message);
                errorMessage.textContent = error.message;
            });
    });

    // Google Sign-In
    document.getElementById("googleBtn").addEventListener("click", () => {
        console.log("Google Sign-In button clicked");

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Google Login Success:", result.user);
                window.location.href = "index1.html"; // Redirect after login
            })
            .catch((error) => {
                console.error("Google Login Failed:", error.message);
            });
    });

    // Sign Up with Email & Password
    document.getElementById("signupBtn").addEventListener("click", () => {
        console.log("Sign Up button clicked");

        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const errorMessage = document.getElementById("signup-error-message");

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User signed up:", userCredential.user);
                alert("Sign up successful! Please login.");
                toggleForm(); // Switch to login form
            })
            .catch((error) => {
                console.error("Signup failed:", error.message);
                errorMessage.textContent = error.message;
            });
    });

    // Toggle for Login Password
document.getElementById("togglePassword").addEventListener("click", function() {
    let passwordField = document.getElementById("password");
    let eyeIcon = document.getElementById("eyeIcon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "eye-open.png"; // Change to open eye
    } else {
        passwordField.type = "password";
        eyeIcon.src = "eye-close.png"; // Change to closed eye
    }
});

// Toggle for Signup Password
document.getElementById("toggleSignupPassword").addEventListener("click", function() {
    let passwordField = document.getElementById("signupPassword");
    let eyeIcon = this.querySelector(".eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "eye-open.png"; // Change to open eye
    } else {
        passwordField.type = "password";
        eyeIcon.src = "eye-close.png"; // Change to closed eye
    }
});


    var owlAnimation = lottie.loadAnimation({
        container: document.getElementById("lottie-owl"),
        renderer: "svg",
        loop: true,  // Set to false if you only want it to play once
        autoplay: true,
        path: "spy-owl1.json" // Path to your JSON animation file
    });
});
