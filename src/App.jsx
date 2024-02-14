import './app.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Sidebar from './components/sidebar/Sidebar';
const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Sidebar/>
        <Hero />
      </section>
      <section id='About'>
        <Parallax type='about' />
      </section>
      <section className='about'>
        <About />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
