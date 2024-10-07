import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Vanta from '../components/background/Vanta';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/theme/selectors';

const Layout = ({ children }) => {
  const theme = useSelector(selectTheme);
  return (
    <>
      <Vanta theme={theme} />
      <div className="flex flex-col justify-between items-center w-screen ">
        <Header />
        <main className=" pt-20 min-h-screen px-1  pb-3 w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
