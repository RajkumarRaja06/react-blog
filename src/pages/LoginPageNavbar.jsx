import { Link } from 'react-router-dom';

const LoginPageNavbar = () => {
  return (
    <nav className='loginPage-navbar'>
      <h3>Blog</h3>
      <h6>
        <Link to='/'>User not available😔</Link>
      </h6>
    </nav>
  );
};

export default LoginPageNavbar;
