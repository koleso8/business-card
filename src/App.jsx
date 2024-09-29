import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={''} />
        <Route path="/form" element={''} />
      </Routes>
    </Layout>
  );
};

export default App;
