import '../styles/blog.css';
import { UserConsumerCreatePost } from '../context/createPostContext';

const MainBlog = () => {
  const { mainBlogObj } = UserConsumerCreatePost();
  return (
    <div className='mainBlog'>
      <img
        src={mainBlogObj[0].image}
        alt={mainBlogObj[0].name}
        className='mainBlog-img'
      />
      <div>
        <h3 className='mainBlog-name'>{mainBlogObj[0].name}</h3>
        <p className='mainBlog-time'>{mainBlogObj[0].time.seconds}</p>
      </div>
      <p className='mainBlog-para'>{mainBlogObj[0].description}</p>
    </div>
  );
};

export default MainBlog;
