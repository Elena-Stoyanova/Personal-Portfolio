import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const iconVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ['Homepage', 'About', 'Portfolio', 'Contact'];

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item) => (
        <motion.a
          className='pageLink'
          href={`#${item}`}
          variants={itemVariants}
          key={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
      <motion.div className='iconContainer' variants={variants}>
        <a
          href='https://www.linkedin.com/in/elena-stoyanova-8a32b7215/'
          target='blank'
        >
          <motion.svg
            variants={iconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='43'
            height='43'
            viewBox='0 0 40 48'
            fill='#111132'
          >
            <motion.path d='M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z'></motion.path>
          </motion.svg>
        </a>
        <a href='https://github.com/Elena-Stoyanova' target='blank'>
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            variants={iconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            x='0px'
            y='0px'
            width='48'
            height='48'
            viewBox='0 0 30 30'
            fill='#111132'
          >
            <motion.path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></motion.path>
          </motion.svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Links;
