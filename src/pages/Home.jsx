import Portfolio from '../components/portfolio/Portfolio';
import Hero from '../components/Hero';
import About from '../components/about/About';
import Contacts from '../components/contacts/Contacts';

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Home;
