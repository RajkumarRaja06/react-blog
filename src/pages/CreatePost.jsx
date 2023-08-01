import '../styles/createPost.css';
import { useState } from 'react';
import {
  addDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newCategory, setNewCategory] = useState('');

  function submitHandler() {
    setNewName('');
    setNewDescription('');
    setNewImage('');
    setNewCategory('');
  }

  const navigate = useNavigate();
  const userCollectionRef = collection(db, 'userInput');
  const createPost = async () => {
    await addDoc(userCollectionRef, {
      id: auth.currentUser.uid,
      name: newName,
      description: newDescription,
      image: newImage,
      category: newCategory,
    });
    submitHandler();
    navigate('/');
  };
  return (
    <div className='createPost'>
      <h1 className='createPost-title'>Add Blog</h1>
      <div className='createPost-form'>
        <input
          type='text'
          name='name'
          placeholder='Blog name'
          onChange={(event) => setNewName(event.target.value)}
        />
        <textarea
          name='description'
          cols='30'
          rows='10'
          placeholder='Description'
          onChange={(event) => setNewDescription(event.target.value)}
        ></textarea>
        <div className='createPost-form-img'>
          <input
            type='file'
            name='image'
            accept='image/*'
            onChange={(event) => setNewImage(event.target.value)}
          />
        </div>
        <input
          type='text'
          name='category'
          placeholder='Category'
          onChange={(event) => setNewCategory(event.target.value)}
        />
        <div className='createPostBtn'>
          <input
            type='submit'
            value='Add'
            className='createPost-addBtn'
            onClick={createPost}
          />
          <input type='submit' value='Cancel' onClick={submitHandler} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
