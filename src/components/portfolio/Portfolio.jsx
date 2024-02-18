import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'Tenzies Game',
    img: './tenzies-game.png',
    link: 'https://elena-stoyanova-tenzies-game.netlify.app/',
    desc: "This is a game where you have to have ten identical dice to win. With each roll, the dice you haven't pressed change! If you press the wrong die, just click on it to deselect and roll it again. Once you win, your high score is saved to local storage.",
  },
  {
    id: 2,
    title: 'Directrix',
    img: './directrix.png',
    link: 'https://directrix.netlify.app/',
    desc: "This is a Figma to HTML project. I have used the Google Maps API and played around with it here. The project is built with plain HTML, CSS, and JavaScript. ",
  },
  {
    id: 3,
    title: 'Meme Generator',
    img: './meme-generator.png',
    link: 'https://elena-meme-generator.netlify.app/',
    desc: "Create your Meme! Click the button to find your inspiration from the image. Then write something funny. And that's it. Just have fun! ",
  },
  {
    id: 4,
    title: 'City Skyline',
    img: './city-skyline.png',
    link: 'https://htmlpreview.github.io/?https://github.com/Elena-Stoyanova/City-Skyline/blob/main/CitySkyline.html',
    desc: 'I created a city skyline image with clean CSS and HTML. You can choose between light and dark mode via the toggle button.',
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
