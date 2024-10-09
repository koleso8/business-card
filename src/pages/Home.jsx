import Hero from '../components/Hero';
import About from '../components/about/About';
import Contacts from '../components/contacts/Contacts';
import SwiperPortfolio from '../components/portfolio/SwiperPortfolio';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <SwiperPortfolio />
      <Contacts />
    </div>
  );
};

export default Home;
