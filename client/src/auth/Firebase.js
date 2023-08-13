import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAfThUktgSVss73pPQdFVVB8rHuNkKST-U",
  authDomain: "biowander7.firebaseapp.com",
  projectId: "biowander7",
  storageBucket: "biowander7.appspot.com",
  messagingSenderId: "767596343401",
  appId: "1:767596343401:web:597e67ed29db6f3dc072f8"
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export {auth,provider};
