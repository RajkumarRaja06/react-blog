import HomeHeader from '../components/HomeHeader';
import '../styles/home.css';
import SingleBlog from '../components/SingleBlog';
import { useState, useEffect } from 'react';
import {
  getDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
  const [list, setList] = useState([]);

  const userCollectionRef = collection(db, 'userInput');
  useEffect(() => {
    const queryCollection = query(
      userCollectionRef,
      orderBy('created', 'desc')
    );
    // dout
    onSnapshot(queryCollection, (querySnapSort) => {
      console.log(querySnapSort);
    });
  }, []);

  return (
    <div className='home'>
      <HomeHeader />
      <div className='singleBlog-container'>
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
  );
};

export default Home;
