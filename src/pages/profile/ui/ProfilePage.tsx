import Button from '../../../shared/ui/button/Button';
import { useAuth } from '../../../app/providers/AuthProvider';
import { Navigate } from 'react-router';

export default function ProfilePage() {
  const { isAuth } = useAuth();
  if (!isAuth) return <Navigate to="/login" replace />;

  return (
    <section className="border border-gray-300 rounded-[5px] mx-auto my-10 w-max p-5">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-3xl font-medium">Профиль</h3>
        <div className="w-[120px] h-[120px] rounded-full bg-gray-500"></div>
        <p className="flex flex-col items-center gap-2">
          <span className="text-xl font-medium">Иван Иванов</span>
          <span className="text-xl font-medium">ivan@example.com</span>
        </p>
        <div className="flex flex-col gap-3">
          <Button className="px-30">Редактирвоать профиль</Button>
          <Button className="px-30">Выйти</Button>
        </div>
      </div>
    </section>
  );
}
