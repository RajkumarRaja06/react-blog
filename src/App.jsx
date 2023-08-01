import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { UserConsumer } from './context/userContext.jsx';
const App = () => {
  const { isAuth } = UserConsumer();
  return <>{isAuth ? <Home /> : <Login />}</>;
};

export default App;
