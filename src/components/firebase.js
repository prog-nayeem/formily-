import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { ge } from "firebase/db";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCC_PAV7xbL_LeMeartUyHshxUCXD4DZj0",
  authDomain: "formily-e05d4.firebaseapp.com",
  projectId: "formily-e05d4",
  storageBucket: "formily-e05d4.appspot.com",
  messagingSenderId: "887045812762",
  appId: "1:887045812762:web:aa488d1c8e0b4e2f47d7a3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
