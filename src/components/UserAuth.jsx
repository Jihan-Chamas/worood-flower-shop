import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import "./styling.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCCwYs2D9wt99xdvNLSy4_YlPLAeCP_y4k",
  authDomain: "worood-flower-shop-6fd48.firebaseapp.com",
  projectId: "worood-flower-shop-6fd48",
  storageBucket: "worood-flower-shop-6fd48.firebasestorage.app",
  messagingSenderId: "917039497188",
  appId: "1:917039497188:web:48f97bae744a836fb7d1f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth);
  const [currentUser] = useAuthState(auth);

  const handleAuth = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous errors

    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    if (isRegistering) {
      await createUserWithEmailAndPassword(email, password);
    } else {
      await signInWithEmailAndPassword(email, password);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error.message);
      setErrorMessage("Failed to log out. Please try again.");
    }
  };

  // Set error message based on Firebase hook errors
  React.useEffect(() => {
    if (error || loginError) {
      setErrorMessage(error?.message || loginError?.message);
    }
  }, [error, loginError]);

  return (
    <div className="auth-container">
      {currentUser ? (
        <div className="logout">
          <h2>Welcome, {currentUser.email}</h2>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistering ? "Register" : "Login"}</h2>
          <form onSubmit={handleAuth} className="authentication">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Display error message below input fields */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" disabled={loading || loginLoading}>
              {isRegistering ? "Register" : "Login"}
            </button>
          </form>

          <p
            onClick={() => setIsRegistering(!isRegistering)}
            className="account"
          >
            {isRegistering
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserAuth;
