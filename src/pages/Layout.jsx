import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center w-screen ">
      <Header />
      <main className="bg-[--bg-color]  pt-16 min-h-screen px-1  mb-3 w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
