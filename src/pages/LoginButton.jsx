import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { UserConsumer } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const { setUserLoginData, setEmail, userLoginData } = UserConsumer();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((userCredential) => {
      const user = userCredential.user;

      const { providerData } = user;
      localStorage.setItem('user', JSON.stringify(providerData[0]));
      setUserLoginData(JSON.parse(localStorage.getItem('user')));
      localStorage.setItem(
        'userEmailId',
        JSON.stringify(providerData[0].email)
      );
      setEmail(JSON.parse(localStorage.getItem('userEmailId')));
      navigate('/');
    });
  };
  return (
    <button className='login-btn' onClick={signInWithGoogle}>
      LogIn with <span>Google</span>
    </button>
  );
};

export default LoginButton;
