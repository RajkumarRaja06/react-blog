import { initializeApp } from 'firebase/app';

// auth
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

//FireStore
import { getFirestore } from 'firebase/firestore';

import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDrozw9nHqT97rSulkEvUQeomHRanB-4LA',
  authDomain: 'blog-f16b6.firebaseapp.com',
  projectId: 'blog-f16b6',
  storageBucket: 'blog-f16b6.appspot.com',
  messagingSenderId: '321535547471',
  appId: '1:321535547471:web:c1bb6eabda465f6536723a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, db, storage };
