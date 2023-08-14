import '../styles/navbar.css';
import { UserConsumer } from '../context/userContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FaRegPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setUserLoginData } = UserConsumer();
  const navigation = useNavigate();
  const signOutGoogle = () => {
    signOut(auth);
    setUserLoginData(null);
    localStorage.clear();
    navigation('/');
  };

  return (
    <div>
      <nav className='navbar'>
        <h3>
          <Link to='/'>Raj_blog</Link>
        </h3>
        <div className='navbar_addBtn'>
          <Link to='createPost'>
            <span>
              <FaRegPlusSquare />
            </span>
          </Link>
        </div>
        <button onClick={signOutGoogle}>🙂 Log out</button>
      </nav>
    </div>
  );
};

export default Navbar;
