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
              Hey, my name is Elena Stoyanova. I’m a front-end web developer
              from Bulgaria. I’m always curious to learn more when it comes to
              new technologies and creative coding. I'm also passionate about
              UI/UX design and solving logical problems.
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
