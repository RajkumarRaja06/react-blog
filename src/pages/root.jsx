import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { UserConsumer } from '../context/userContext';
import LoginPageNavbar from './LoginPageNavbar';

const Root = () => {
  const { userLoginData } = UserConsumer();
  return (
    <div>
      {userLoginData ? <Navbar /> : <LoginPageNavbar />}
      <Outlet />
    </div>
  );
};

export default Root;
