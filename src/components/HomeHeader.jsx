import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const HomeHeader = () => {
  return (
    <div className='homeHeader'>
      <div className='homeHeader_title'>
        <h3>Inc.This Morning</h3>
        <div className='homeHeader_subTitle'>
          <span>
            <RiDoubleQuotesL />
          </span>
          <h1>Blog</h1>
          <span>
            {' '}
            <RiDoubleQuotesR />
          </span>
        </div>
        <p>
          awesome place to make oneself productive and entertained through daily
          updates
        </p>
      </div>
      <div className='search-bar'>
        <input type='search' placeholder='Search By Category' />
      </div>
    </div>
  );
};

export default HomeHeader;
