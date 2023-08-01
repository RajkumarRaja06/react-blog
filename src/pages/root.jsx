import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { UserConsumer } from '../context/userContext';
import LoginPageNavbar from './LoginPageNavbar';

const Root = () => {
  const { isAuth } = UserConsumer();
  return (
    <div>
      {isAuth ? <Navbar /> : <LoginPageNavbar />}
      <Outlet />
    </div>
  );
};

export default Root;
