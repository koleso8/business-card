import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme, setTheme } = useTheme();
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
