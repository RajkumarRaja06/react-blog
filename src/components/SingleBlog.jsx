import img from '../../public/assets/img.png';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin2Line } from 'react-icons/ri';
import '../styles/singleBlog.css';

const SingleBlog = () => {
  return (
    <div className='singleBlog'>
      <img src={img} alt='Image' />
      <h5 className='singleBlog-name'>Food Blog</h5>
      <p className='singleBlog-para'>
        The first thing to do, when working with list and selector in the same
        file, is the list itself. Here we call the items on the list for
        images.........{' '}
        <button className='singleBlog-readBtn'>Read more</button>
      </p>
      <h2 className='singleBlog-category'>FOOD</h2>
      <div className='singleBlogBtn'>
        <button className='singleBlog-editBtn'>
          <TbEdit />
        </button>
        <button className='singleBlog-deleteBtn'>
          <RiDeleteBin2Line />
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
