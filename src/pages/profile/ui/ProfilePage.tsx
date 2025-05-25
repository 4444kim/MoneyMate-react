import Button from '../../../shared/ui/button/Button';
import Input from '../../../shared/ui/input/Input';
import AvatarIcon from '../../../shared/icons/AvatarIcon';
import CameraIcon from '../../../shared/icons/CameraIcon';
import { useAuth } from '../../../app/providers/AuthProvider';
import { Navigate } from 'react-router';
import { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../../../shared/api/profile/profile';

interface ProfileDataInterface {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileDataInterface>({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
  });
  const [formData, setFormData] = useState(profileData);
  const [isEdit, setIsEdit] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfile();
        setProfileData(data);
        setFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          avatar: data.avatar,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      const updated = await updateProfile({ ...formData, avatar: avatar || profileData.avatar });
      setProfileData(updated);
      setIsEdit(false);
    } catch (error) {
      console.error('Ошибка при сохранении профиля:', error);
    }
  };

  const { isAuth, logout } = useAuth();
  if (!isAuth) return <Navigate to="/login" replace />;

  return (
    <section className="border border-gray-300 rounded-[5px] mx-auto my-10 w-max p-5">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-3xl font-medium">{isEdit ? 'Редактирование профиля' : 'Профиль'}</h3>
        <label className="cursor-pointer relative group">
          {isEdit && (
            <div className="relative">
              <Input
                type="file"
                accept="image/*"
                className="absolute border-0 top-[90px] left-[50px] opacity-0 cursor-pointer"
                onChange={handleAvatarChange}
              />
              <div className="border-0 absolute top-[80px] left-[90px] z-50">
                <CameraIcon className="w-[30px] h-[30px] " />
              </div>
            </div>
          )}
          {avatar || profileData.avatar ? (
            <img
              src={avatar || profileData.avatar}
              alt="avatar"
              className="w-[120px] h-[120px] rounded-full object-cover bg-center border border-gray-300"
            />
          ) : (
            <div className="w-[120px] h-[120px] rounded-full bg-gray-500 flex items-center justify-center text-white">
              <AvatarIcon />
            </div>
          )}
        </label>

        {isEdit ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <span>Имя</span>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span>Фамилия</span>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span>Email</span>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <p className="flex flex-col items-center gap-2">
            <span className="text-xl font-medium">
              {profileData.firstName || 'Ivan'} {profileData.lastName || 'Ivanov'}
            </span>
            <span className="text-xl font-medium">{profileData.email || 'your@email.com'}</span>
          </p>
        )}

        {isEdit ? (
          <div className="flex items-center gap-3">
            <Button className="px-14" onClick={handleSave}>
              Сохранить изменения
            </Button>
            <Button className="px-8" onClick={() => setIsEdit(false)}>
              Отмена
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Button className="px-30" onClick={() => setIsEdit(true)}>
              Редактировать профиль
            </Button>
            <Button className="px-30" onClick={logout}>
              Выйти
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
