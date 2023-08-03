import '../styles/createPost.css';
import { useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  Timestamp,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { UserConsumerCreatePost } from '../context/createPostContext';

const CreatePost = () => {
  const { isEdit, setIsEdit, editingObj, setEditingObj } =
    UserConsumerCreatePost();

  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (newImage) {
      setImageUrl(URL.createObjectURL(newImage));
    }
  }, [newImage]);

  function submitHandler() {
    setNewName('');
    setNewDescription('');
    setNewImage('');
    setNewCategory('');
  }

  const navigate = useNavigate();
  const userCollectionRef = collection(db, 'userInput');
  const createPost = async () => {
    if (!isEdit) {
      try {
        await addDoc(userCollectionRef, {
          id: auth.currentUser.uid,
          name: newName,
          description: newDescription,
          image: imageUrl,
          category: newCategory,
          time: Timestamp.now(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const itemToEditRef = doc(db, 'userInput', editingObj[0].id);
        await updateDoc(itemToEditRef, {
          id: itemToEditRef.id,
          name: newName,
          description: newDescription,
          image: editingObj[0].image,
          category: newCategory,
          time: editingObj[0].time,
        });
      } catch (error) {
        console.log(error);
      }
      setIsEdit(false);
      setEditingObj(null);
    }
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
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <textarea
          name='description'
          cols='30'
          rows='10'
          placeholder='Description'
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        ></textarea>
        {isEdit ? null : (
          <div className='createPost-form-img'>
            <input
              type='file'
              name='image'
              accept='image/*'
              onChange={(event) => setNewImage(event.target.files[0])}
            />
          </div>
        )}

        <input
          type='text'
          name='category'
          placeholder='Category'
          value={newCategory}
          onChange={(event) => setNewCategory(event.target.value)}
        />
        <div className='createPostBtn'>
          <input
            type='submit'
            value={isEdit ? 'Update' : 'Add'}
            className='createPost-addBtn'
            onClick={(event) => createPost(event.target.value)}
          />
          <input type='submit' value='Cancel' onClick={submitHandler} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
