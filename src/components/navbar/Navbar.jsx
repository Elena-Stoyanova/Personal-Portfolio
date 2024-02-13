import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          elena.dev
        </motion.span>
        <div className='social'>
          <a href='#'>
            <img src='/github-logo.png' alt='GitHub icon' />
          </a>
          <a href='#'>
            <img src='/linkedin.png' alt='Linkedin icon' />
          </a>
          <a href='#'>
            <img src='/facebook.png' alt='Gmail icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
