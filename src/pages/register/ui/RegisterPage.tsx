import Input from '../../../shared/ui/input/Input';
import Button from '../../../shared/ui/button/Button';
import { Link } from 'react-router';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { registerUser } from '../../../shared/api/auth/register';

export default function Register() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(userData);
    try {
      const res = await registerUser(userData);
      console.log('Пользователь создан:', res);
      navigate('/login');
    } catch (error) {
      console.error('Ошибка при регистрации', error);
    }
  };

  return (
    <section className="border border-gray-300 rounded-[5px] mx-auto my-10 w-max p-5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-[15px]">
          <h3>Money Mate</h3>
          <span>Register</span>

          <div className="flex items-center gap-[15px]">
            <div className="flex flex-col items-start gap-[10px] ">
              <span>First Name</span>
              <Input
                type="text"
                placeholder="John"
                value={userData.firstName}
                onChange={(event) => setUserData({ ...userData, firstName: event.target.value })}
              />
            </div>
            <div className="flex flex-col items-start gap-[10px]">
              <span>Last Name</span>
              <Input
                type="text"
                placeholder="Doe"
                value={userData.lastName}
                onChange={(event) => setUserData({ ...userData, lastName: event.target.value })}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-[10px] w-full">
            <span>Email</span>
            <Input
              type="email"
              placeholder="name@emil.com"
              value={userData.email}
              onChange={(event) => setUserData({ ...userData, email: event.target.value })}
            />
          </div>
          <div className="flex flex-col items-start gap-[10px] w-full">
            <span>Password</span>
            <Input
              type="password"
              placeholder=""
              value={userData.password}
              onChange={(event) => setUserData({ ...userData, password: event.target.value })}
            />
          </div>
          <div className="flex flex-col items-start gap-[10px] w-full">
            <span>Confirm password</span>
            <Input type="password" />
          </div>
          <Button className="mt-3 bg-black text-white w-full" type="submit">
            Register
          </Button>
          <div className="flex items-center gap-[5px]">
            Already have an account?
            <Link to="/login" className="text-green-600">
              Log in
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
