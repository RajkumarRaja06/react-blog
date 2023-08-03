import { SingleBlog, HomeHeader } from '../components';
import '../styles/home.css';
import { UserConsumerCreatePost } from '../context/createPostContext';

const Home = () => {
  const { list } = UserConsumerCreatePost();

  return (
    <div className='home'>
      <HomeHeader />
      <div className='singleBlog-container'>
        {list.map((item, index) => (
          <SingleBlog item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
