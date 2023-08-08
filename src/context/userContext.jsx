import { createContext, useContext, useState, useEffect } from 'react';
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userLoginData, setUserLoginData] = useState(null);

  const userInfo =
    localStorage.getItem('user') === 'undefined'
      ? localStorage.clear()
      : JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setUserLoginData(userInfo);
  }, []);

  return (
    <UserContext.Provider value={{ userLoginData, setUserLoginData }}>
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, UserConsumer };
