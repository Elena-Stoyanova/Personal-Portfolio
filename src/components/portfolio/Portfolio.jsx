import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Landing page',
    img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum purus lorem. Phasellus diam mi, tempus id ex ac, accumsan varius enim. Nullam sit amet egestas sapien. Proin consequat dictum eros, non varius erat placerat non.',
  },
  {
    id: 2,
    title: 'Tenzies Game',
    img: './tenzies-game.png',
    link: 'https://elena-stoyanova-tenzies-game.netlify.app/',
    desc: "It's a dice game where you have to have ten identical dice to win. With each roll, the dice you haven't pressed changes! If your pressed dice are different, you must undo holding die by clicking it again and keep rolling until they are all the same. After you win, your best score is saved to local storage.",
  },
  {
    id: 3,
    title: 'Meme Generator',
    img: './meme-generator.png',
    link: 'https://elena-meme-generator.netlify.app/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum purus lorem. Phasellus diam mi, tempus id ex ac, accumsan varius enim. Nullam sit amet egestas sapien. Proin consequat dictum eros, non varius erat placerat non.',
  },
  {
    id: 4,
    title: 'City Skyline',
    img: './city-skyline.png',
    link: 'https://htmlpreview.github.io/?https://github.com/Elena-Stoyanova/City-Skyline/blob/main/CitySkyline.html',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum purus lorem. Phasellus diam mi, tempus id ex ac, accumsan varius enim. Nullam sit amet egestas sapien. Proin consequat dictum eros, non varius erat placerat non.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 150]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button whileHover={{ scale: 1.1 }}>
              <a href={item.link} target='blank'>
                See Demo
              </a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
