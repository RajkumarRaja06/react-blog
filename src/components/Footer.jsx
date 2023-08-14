import '../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer_para'>
        ©2023 All Rights Reserverd. This template is made with by{' '}
        <span>
          <Link
            to='https://rajkumarraja-portfolio.netlify.app/'
            target='_blank'
          >
            <span className='footerLink-name'> ❤️ RajKumarRaja</span>
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;
