import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { UserConsumer } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const { setIsAuth } = UserConsumer();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };
  return (
    <button className='login-btn' onClick={signInWithGoogle}>
      Login width Google
    </button>
  );
};

export default LoginButton;
