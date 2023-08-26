import * as firebase from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDs1DDACqQt2ZTOY7Xmdb8PLHHVKxjgtRg",
  authDomain: "countdown-page-c3e5f.firebaseapp.com",
  projectId: "countdown-page-c3e5f",
  storageBucket: "countdown-page-c3e5f.appspot.com",
  messagingSenderId: "451334900467",
  appId: "1:451334900467:web:06b8370b1be03567550586"
};

const app = firebase.initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;