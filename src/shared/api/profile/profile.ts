import api from '../axios';

export const getProfile = async () => {
  const response = await api.get('/api/profile');

  return response.data;
};

export const updateProfile = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}) => {
  const response = await api.put('/api/profile', data);
  return response.data;
};
