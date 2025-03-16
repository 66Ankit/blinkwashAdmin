import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth if you're using Authentication

const firebaseConfig = {
  apiKey: "AIzaSyB2DcXvN89z5BWX8e7KMAM77AnrKxXUCuw",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "blinkwash-f486a",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication (if needed)
const auth = getAuth(app); 

export { auth }; // Export auth if you're using Authentication