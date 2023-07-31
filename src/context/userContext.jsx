import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <UserContext.Provider value={{ setIsAuth }}>
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, UserConsumer };
