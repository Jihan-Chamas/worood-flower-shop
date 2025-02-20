import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "./styling.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

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
const database = getDatabase(app);

console.log("database received from firebase website:", database);

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

  const handleAuth = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      if (isRegistering) {
        const createdUser = await createUserWithEmailAndPassword(
          email,
          password
        );

        console.log("created user:", createdUser);

        // add user to the database
        const user = createdUser?.user;
        const userRef = ref(database,"users/", + user.uid)
        const result = await set(userRef,{
          email: user.email,
          isAdmin : true, // we added a user after creation as admin, so the user that we created now admin do not forget this is only for once if you keep this code here then every signed user will be admin
        })

        console.log("created user as admin:",result)

        alert("Account created successfully! You can now log in.");
      } else {
        await signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      console.error("Authentication Error:", error.message);

      // Handling specific Firebase auth errors
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid email format.");
          break;
        case "auth/user-not-found":
          alert("User not found. Please register first.");
          break;
        case "auth/wrong-password":
          alert("Incorrect password. Please try again.");
          break;
        case "auth/email-already-in-use":
          alert("This email is already registered. Try logging in.");
          break;
        default:
          alert(error.message);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Successfully logged out!");
    } catch (error) {
      console.error("Logout Error:", error.message);
      alert("Failed to log out. Please try again.");
    }
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
