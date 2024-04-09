import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMp3jGw7Og4I1SA9kYRtPxBSUyhfF5UtI",
  authDomain: "jayesh-c7784.firebaseapp.com",
  projectId: "jayesh-c7784",
  storageBucket: "jayesh-c7784.appspot.com",
  messagingSenderId: "206606235168",
  appId: "1:206606235168:web:59e8217ca0ca8798dc2e45",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
