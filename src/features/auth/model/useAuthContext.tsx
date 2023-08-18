import {
  createContext,
  useContext,
  type ReactNode,
  useState,
  type FC,
} from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { type User } from '@/entities/user';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// eslint-disable-next-line no-undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = function AuthProvider({
  children,
}) {
  const auth = getAuth();

  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const contextValue: AuthContextType = {
    user,
    isLoggedIn: Boolean(user?.getIdToken()),
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};
