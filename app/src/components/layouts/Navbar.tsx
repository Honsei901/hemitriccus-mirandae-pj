import { useNavigate } from 'react-router';
import { Button } from '../ui/button';

export const Navbar = () => {
  const navigate = useNavigate();
  const user = false;

  const handleLogout = (): void => {
    navigate('/login');
  };

  const handleLogin = (): void => {
    navigate('/login');
  };

  return (
    <div className="h-16 flex justify-center bg-blue-500">
      <div className="w-[1200px] flex justify-between items-center">
        <div className="text-white text-2xl font-bold">SAYEP NEWS</div>
        <div>
          {user ? (
            <Button
              variant="destructive"
              className="font-bold text-lg"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="default"
              className="font-bold text-lg"
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
