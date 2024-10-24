import { Navbar } from '@/components/layouts/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import NewsPage from '@/pages/NewsPage';
import LoginPage from '@/pages/LoginPage';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<NewsPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
