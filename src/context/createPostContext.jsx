import { createContext, useContext, useState, useEffect } from 'react';
const UserContextCreatePost = createContext();
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const UserProviderCreatePost = ({ children }) => {
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editingObj, setEditingObj] = useState(null);
  const [mainBlogObj, setMainBlogObj] = useState(null);
  const [searchItems, setSearchItems] = useState([]);

  const [newImage, setNewImage] = useState('');

  const searchItem = (inputValue) => {
    const searchInput = inputValue.toLowerCase();

    if (list.length) {
      setSearchItems(
        list.filter((item) => {
          return item.category.toLowerCase().includes(searchInput);
        })
      );
    }
    setList(searchItems);
  };

  const showMainBlog = (id) => {
    const getMainBlogObj = list.filter((item) => item.id === id);
    setMainBlogObj(getMainBlogObj);
  };

  const deleteItem = async (id) => {
    try {
      const itemToDeleteRef = doc(db, 'userInput', id);
      await deleteDoc(itemToDeleteRef);

      const deletedArray = list.filter((item) => item.id !== id);
      setList(deletedArray);
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = (id) => {
    const filteredEditObj = list.filter((item) => item.id === id);
    setIsEdit(true);
    setEditingObj(filteredEditObj);
  };

  const userCollectionRef = collection(db, 'userInput');
  useEffect(() => {
    const getUserInput = async () => {
      const data = await getDocs(userCollectionRef);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUserInput();
  }, []);

  const uploadImage = (event) => {
    const imageFile = event.target.files[0];

    const storageRef = ref(storage, `Images/${Date.now()}/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.log('Error', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setNewImage(downloadURL);
        });
      }
    );
  };

  return (
    <UserContextCreatePost.Provider
      value={{
        list,
        setList,
        deleteItem,
        editItem,
        isEdit,
        setIsEdit,
        editingObj,
        setEditingObj,
        mainBlogObj,
        showMainBlog,
        searchItem,
        uploadImage,
        newImage,
        setNewImage,
      }}
    >
      {children}
    </UserContextCreatePost.Provider>
  );
};

const UserConsumerCreatePost = () => {
  return useContext(UserContextCreatePost);
};

export {
  UserContextCreatePost,
  UserProviderCreatePost,
  UserConsumerCreatePost,
};
