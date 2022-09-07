import {initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from "@firebase/auth"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDS__trvuqqsyoLUtAEU5qfjNubRhk_dVc",
  authDomain: "restaurant-app-68602.firebaseapp.com",
  projectId: "restaurant-app-68602",
  storageBucket: "restaurant-app-68602.appspot.com",
  messagingSenderId: "595562371097",
  appId: "1:595562371097:web:54caf75dbeb32a937fb288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db =getFirestore()
export {auth}
