import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextProps {
  isAuth: boolean | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuth(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
