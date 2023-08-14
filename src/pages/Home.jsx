import { SingleBlog, HomeHeader } from '../components';
import '../styles/home.css';
import { UserConsumerCreatePost } from '../context/createPostContext';
import { Footer } from '../components';

const Home = () => {
  const { blogData } = UserConsumerCreatePost();

  return (
    <div className='home'>
      <HomeHeader />
      <div className='singleBlog-container'>
        {blogData
          ? blogData.map((item, index) => (
              <SingleBlog item={item} key={index} />
            ))
          : null}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
