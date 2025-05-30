import api from '../axios';

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData): Promise<string> => {
  try {
    const response = await api.post('/auth/login', data);
    const token = response.data.token;
    if (!token) throw new Error('Token not found in response');
    return token;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Login failed');
  }
};
