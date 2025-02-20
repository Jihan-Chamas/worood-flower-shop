import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
  console.log("Email:", email, "Password:", password);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth);
  const [currentUser] = useAuthState(auth);

const handleAuth = (event) => {
  event.preventDefault();

  if (!email || !password) {
    alert("Email and password are required.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  if (isRegistering) {
    createUserWithEmailAndPassword(email, password);
  } else {
    signInWithEmailAndPassword(email, password);
  }
};


  const handleLogout = () => {
    signOut(auth);
  };
if (loading || loginLoading) return <p>Loading...</p>;
if (error || loginError) {
  console.error("Firebase Error:", error?.message || loginError?.message);
  return <p>Error: {error?.message || loginError?.message}</p>;
}


  return (
    <div className="auth-container">
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.email}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistering ? "Register" : "Login"}</h2>
          <form onSubmit={handleAuth}>
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
            <button type="submit">
              {isRegistering ? "Register" : "Login"}
            </button>
          </form>

          <p onClick={() => setIsRegistering(!isRegistering)}>
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
