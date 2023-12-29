
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIn-ARuPHSPXrJxwzIFaJlcxFc8pa9ToA",
  authDomain: "rs420-2a755.firebaseapp.com",
  projectId: "rs420-2a755",
  storageBucket: "rs420-2a755.appspot.com",
  messagingSenderId: "472006836110",
  appId: "1:472006836110:web:e265b11c0ed527fdb92edf",
  measurementId: "G-B8B4PS7ZBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;