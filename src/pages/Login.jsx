import book from '../../public/assets/book.svg';
import '../styles/login.css';
import LoginButton from './LoginButton';

const LogIn = () => {
  return (
    <div className='login'>
      <nav className='loginPage-navbar'>
        <h3>Blog</h3>
        <h6>User Not Available😔</h6>
      </nav>
      <div className='login-container'>
        <img src={book} alt='Book' />
        <h1>A Readers favorite place !</h1>
        <p>
          we providing high quality online resources reding blogs. Just sign up
          and start reading some quality blogs.
        </p>
        <LoginButton />
      </div>
    </div>
  );
};

export default LogIn;
