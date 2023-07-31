import Navbar from './Navbar';
import HomeHeader from '../components/HomeHeader';
import '../styles/home.css';
import SingleBlog from '../components/SingleBlog';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <SingleBlog />
    </div>
  );
};

export default Home;
