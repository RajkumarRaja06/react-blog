import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const userCollectionRef = collection(db, 'userInput');

const getUserInput = async () => {
  const data = await getDocs(userCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export { getUserInput };
