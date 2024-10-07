import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={''} />
        <Route index element={<Home />} />
        <Route path="/form" element={''} />
      </Routes>
    </Layout>
  );
};

export default App;
