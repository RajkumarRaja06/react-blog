import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='createPost' element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
