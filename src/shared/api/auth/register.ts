import api from '../axios';

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};
