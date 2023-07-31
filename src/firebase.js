import { initializeApp } from 'firebase/app';

// auth
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

//FireStore
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4tyyNR9QnS6nHQTSHQzLCcBm49qq2ssA',
  authDomain: 'reactblog-7d8db.firebaseapp.com',
  projectId: 'reactblog-7d8db',
  storageBucket: 'reactblog-7d8db.appspot.com',
  messagingSenderId: '438941439516',
  appId: '1:438941439516:web:17f21a6b608dd6b47c31d9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
