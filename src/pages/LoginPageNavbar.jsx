import { Link } from 'react-router-dom';

const LoginPageNavbar = () => {
  return (
    <nav className='loginPage-navbar'>
      <h3>
        <Link to='/'>Blog</Link>
      </h3>
      <h6>
        <Link to='/'>User not available😔</Link>
      </h6>
    </nav>
  );
};

export default LoginPageNavbar;
