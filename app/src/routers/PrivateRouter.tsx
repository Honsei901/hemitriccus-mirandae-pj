import { useAppSelector } from '@/redux/hooks';
import { Navigate, Outlet } from 'react-router';

const PrivateRouter = () => {
  const user = useAppSelector((state) => state.auth.user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
