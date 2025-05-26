import Input from '../../../shared/ui/input/Input';
import Button from '../../../shared/ui/button/Button';
import { Link } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../../../shared/api/auth/login';
import { FormEvent } from 'react';
import { useAuth } from '../../../app/providers/AuthProvider';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const token = await loginUser({ email, password });
      login(token);
      navigate('/');
    } catch (error) {
      console.error('Ошибка при входе', error);
    }
  };

  return (
    <section className="border border-gray-300 rounded-[5px] mx-auto my-30 w-max p-5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-[15px]">
          <h3>Money Mate</h3>
          <span>Log in</span>

          <div className="flex flex-col gap-[10px] w-[300px]">
            <span>Email</span>
            <Input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[10px] w-full">
            <p className="flex justify-between">
              <span>Password</span> <span>Forgot password?</span>
            </p>
            <Input
              type="password"
              placeholder=""
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <Button className="bg-black text-white w-full" type="submit">
            Log in
          </Button>
          <div className="flex justify-between w-full">
            Don't have an account?
            <Link to="/register" className="text-green-600">
              Register
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
