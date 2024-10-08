import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { useEffect } from 'react';
import smoothScroll from './helpers/anchorScroll';

const App = () => {
  useEffect(() => {
    smoothScroll();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
