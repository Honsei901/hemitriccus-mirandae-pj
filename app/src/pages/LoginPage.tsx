import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(setUser({ email, password }));

    navigate('/');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="mt-20 flex justify-center">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="w-[300px]  mb-10">
          <div className="mb-5">
            <label>
              Email
              <Input
                value={email}
                className="border-black"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <Input
                value={password}
                className="border-black"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        <Button className="w-[150px]">Log In</Button>
      </form>
    </div>
  );
};

export default LoginPage;
