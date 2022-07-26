import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ2FvWJ_n8I6MqbZeJpsQIwucKadcEGmY",
  authDomain: "fir-project-f79d1.firebaseapp.com",
  projectId: "fir-project-f79d1",
  storageBucket: "fir-project-f79d1.appspot.com",
  messagingSenderId: "741805743196",
  appId: "1:741805743196:web:4a47353d6cda76b8c81a99",
  measurementId: "G-XB5XEWHTGF",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
