import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { UserConsumer } from '../context/userContext';
import LoginPageNavbar from './LoginPageNavbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  const { userLoginData } = UserConsumer();
  return (
    <div>
      {userLoginData ? <Navbar /> : <LoginPageNavbar />}
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Root;
