import { createContext, useContext, useState, useEffect } from 'react';
const UserContextCreatePost = createContext();
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const UserProviderCreatePost = ({ children }) => {
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editingObj, setEditingObj] = useState(null);
  const [mainBlogObj, setMainBlogObj] = useState(null);

  const showMainBlog = (id) => {
    const getMainBlogObj = list.filter((item) => item.id === id);
    console.log(list);
    console.log(getMainBlogObj[0]);
    setMainBlogObj(getMainBlogObj);
  };

  const deleteItem = async (id) => {
    try {
      const itemToEditRef = doc(db, 'userInput', id);
      await deleteDoc(itemToEditRef);
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
