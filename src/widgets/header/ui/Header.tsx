import { Link, useLocation, useNavigate } from 'react-router';
import Button from '../../../shared/ui/button/Button';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isBackRoute =
    location.pathname === '/profile' ||
    location.pathname === '/login' ||
    location.pathname === '/register';

  return (
    <header>
      <div className="flex items-center justify-between px-[50px] py-[20px]">
        {isBackRoute ? (
          <Button onClick={() => navigate(-1)} className="text-2xl flex items-center border-0">
            ← назад
          </Button>
        ) : (
          <h1 className="text-2xl font-medium">MoneyMate</h1>
        )}
        <Link to="/profile">
          <button className="border border-[#000] w-[50px] h-[50px] rounded-full"></button>
        </Link>
      </div>
      <hr className="border border-gray-300" style={{ borderWidth: '0.5px' }} />
    </header>
  );
};
