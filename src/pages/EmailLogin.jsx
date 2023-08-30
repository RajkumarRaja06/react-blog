import '../styles/signUp.css';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { UserConsumer } from '../context/userContext';

const EmailLogin = () => {
  const { setUserLoginData } = UserConsumer();
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, newEmail, password)
      .then((userCredential) => {
        const user = userCredential.user;

        const { providerData } = user;
        localStorage.setItem('user', JSON.stringify(providerData[0]));
        setUserLoginData(JSON.parse(localStorage.getItem('user')));
        navigate('/');

        setNewEmail('');
        setPassword('');
      })
      .catch((err) => {
        console.log('Err', err.message);
      });
  };

  return (
    <div className='contact' id='contact'>
      <div className='title-container'>
        <h2 className='title-name'>Log In</h2>
        <span className='title-subtitle'>Use Your Shop Account !</span>
      </div>
      <form className='contact-form' onSubmit={onSubmit}>
        <div className='demoEmail'>
          <p className='demoEmail-title'>Trial Use</p>
          <div className='trail-email'>
            <div>
              <h4>Email :</h4>
              <p>rajblog@gamil.com</p>
            </div>
            <div>
              <h4>Password :</h4>
              <p>Rajblog123#</p>
            </div>
          </div>
        </div>
        <input
          type='email'
          name='email'
          placeholder='Enter a valid email address'
          className='contact-form-email'
          required
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />

        <input
          type='password'
          name='password'
          className='contact-form-message'
          placeholder='Enter your password'
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <div className='btn-container'>
          <button type='submit' className='btn connect'>
            LogIn
            <span className='connect-icon'>
              <AiOutlineSend />
            </span>
          </button>
        </div>
        <div className='already-acc'>
          Not account yet ?{'   '}
          <span className='already-acc-log'>
            <NavLink to='/emailSignin'>Click here to Register</NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default EmailLogin;
