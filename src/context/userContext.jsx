import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';

import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import profileReducer from '../utils/profileReducer';
import { getProfileData } from '../utils/firebaseFunction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserContext = createContext();

const initialState = {
  profileData: [],
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const [userLoginData, setUserLoginData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [selectCity, setSelectCity] = useState('');
  const [newState, setNewState] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');

  const [profile, setProfile] = useState(null);

  const userInfo =
    localStorage.getItem('user') === 'undefined'
      ? localStorage.clear()
      : JSON.parse(localStorage.getItem('user'));

  const userEmailInfo =
    localStorage.getItem('userEmailId') === 'undefined'
      ? localStorage.clear()
      : JSON.parse(localStorage.getItem('userEmailId'));

  const getImageUrl = (event) => {
    const imageFile = event.target.files[0];

    const storageRef = ref(
      storage,
      `ProfileImage/${Date.now()}/${imageFile.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case 'paused':
            toast.info('Upload is Paused!');
            break;
          case 'running':
            toast.warning('Waiting for Image Upload!!');
            break;
        }
      },
      (error) => {
        console.log('Error', error);
        toast.error('Error... Try Again!');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          toast.success('Image Uploaded Successfully!');
        });
      }
    );
  };

  const fetchProfileData = async () => {
    await getProfileData().then((data) => {
      dispatch({ type: 'GET_PROFILE_DATA', profileData: data });
    });
  };

  const emptyValue = () => {
    setId(null);
    setName(null);
    setEmail(null);
    setNumber(null);
    setSelectCity(null);
    setNewState(null);
    setAddress(null);
    setGender(null);
    setImage(null);
  };

  const userProfile = () => {
    setEmail(userInfo.email);
    const filterUser = state.profileData.find(
      (item) => item.email === userInfo.email
    );
    if (filterUser === 'undefined') {
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setProfile(filterUser.id);
      setId(filterUser.id);
      setEmail(filterUser.email);
      setName(filterUser.name);
      setSelectCity(filterUser.selectCity);
      setNewState(filterUser.newState);
      setAddress(filterUser.address);
      setGender(filterUser.gender);
      setImage(filterUser.image);
      setNumber(filterUser.number);
    }
  };

  const contextValue = {
    userLoginData,
    setUserLoginData,
    id,
    setId,
    name,
    setName,
    email,
    setEmail,
    selectCity,
    setSelectCity,
    newState,
    setNewState,
    address,
    setAddress,
    gender,
    setGender,
    image,
    setImage,
    number,
    setNumber,
    getImageUrl,
    isEditing,
    emptyValue,
    userProfile,
    profile,
    fetchProfileData,
  };

  useEffect(() => {
    setUserLoginData(userInfo);
    setEmail(userEmailInfo);
    fetchProfileData();
  }, []);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

const UserConsumer = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, UserConsumer };
