import { useRef } from 'react';
import './about.scss';
import { motion, useInView } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transform: 'skew(-20deg)',
  },
};

// const skills = [

//   {
//     id: 2,
//     title: 'HTML',
//     width: '227',
//     percentage: '88%',
//   },
//   {
//     id: 3,
//     title: 'CSS',
//     width: '227',
//     percentage: '88%',
//   },
//   {
//     id: 1,
//     title: 'JavaScript',
//     width: '227',
//     percentage: '88%',
//   },
//   {
//     id: 4,
//     title: 'React',
//     width: '227',
//     percentage: '88%',
//   },
//   {
//     id: 5,
//     title: 'Vue.js',
//     width: '227',
//     percentage: '88%',
//   },
//   {
//     id: 6,
//     title: 'Sass',
//     width: '227',
//     percentage: '88%',
//   },
//   {
//     id: 7,
//     title: 'Figma',
//     width: '227',
//     percentage: '88%',
//   },
//   {
//     id: 8,
//     title: 'REST APIs',
//     width: '227',
//     percentage: '88%',
//   },
// ];

// const Skills = ({ skill }) => {
//   return (
//     <div className='skillContainer'>
//       <div className='skillText'>
//         <h5>{skill.title}</h5>
//         <p>{skill.percentage}</p>
//       </div>
//       <svg
//         width='278'
//         height='33'
//         viewBox='0 0 278 33'
//         fill='none'
//         xmlns='http://www.w3.org/2000/svg'
//       >
//         <rect x='12' y='14' width='255' height='6' rx='3' fill='#2D2D41' />
//         <rect
//           x='3'
//           y='14'
//           width={skill.width}
//           height='6'
//           rx='3'
//           fill='#FFA500'
//         />
//       </svg>
//     </div>
//   );
// };

const skills = [
  {
    id: 2,
    title: 'HTML',
    img: './html.png',
  },
  {
    id: 3,
    title: 'CSS',
    img: './css.png',
  },
  {
    id: 1,
    title: 'JavaScript',
    img: './js.png',
  },
  {
    id: 4,
    title: 'React',
    img: './react.png',
  },
  {
    id: 5,
    title: 'Vue.js',
    img: './vue.png',
  },
  {
    id: 6,
    title: 'Sass',
    img: './sass.png',
  },
  {
    id: 7,
    title: 'Figma',
    img: './figma.png',
  },
  {
    id: 8,
    title: 'GIT',
    img: './git.png',
  },
  {
    id: 9,
    title: 'GitHub',
    img: './github.png',
  },
  {
    id: 10,
    title: 'Framer Motion',
    img: './framer-motion.svg',
  },
  {
    id: 11,
    title: 'Linux',
    img: './linux.png',
  },
];

const Skills = ({ skill }) => {
  return (
    <motion.div
      className='wrapper'
      variants={skillVariants}
      data-tooltip-id='my-tooltip'
      data-tooltip-content={skill.title}
    >
      <motion.div className='iconContainer'>
        <img src={skill.img} alt={skill.title} className={skill.title} />
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <div className='container' ref={ref}>
      <div className='about'>
        <div className='wrapper'>
          <motion.div
            className='text'
            variants={textVariants}
            initial='initial'
            animate={isInView && 'animate'}
          >
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              elementum purus lorem. Phasellus diam mi, tempus id ex ac,
              accumsan varius enim. Nullam sit amet egestas sapien. Proin
              consequat dictum eros, non varius erat placerat non.
            </p>
          </motion.div>
          <motion.div
            className='imgContainer'
            variants={imgVariants}
            initial='initial'
            animate={isInView && 'animate'}
          >
            <img src='./Solar-System.png' alt='' />
          </motion.div>
        </div>
        <div className='skills'>
          <h1>My Skills</h1>
          <motion.div
            className='skillContainer'
            variants={container}
            initial='hidden'
            animate={isInView && 'visible'}
          >
            <Tooltip
              id='my-tooltip'
              style={{
                zIndex: 999,
                backgroundColor: 'orange',
                color: 'black',
                fontWeight: 600,
              }}
            />
            {skills.map((item) => (
              <Skills skill={item} key={item.id} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
