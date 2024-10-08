import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={''} />
      </Routes>
    </Layout>
  );
};

export default App;
