import {
  createContext,
  useContext,
  type ReactNode,
  useState,
  type FC,
} from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { type User } from '../types';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isProfileLoaded: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = function AuthProvider({
  children,
}) {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(auth.currentUser || null);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsProfileLoaded(true);
  };

  onAuthStateChanged(auth, async (userData) => {
    if (userData) {
      setUser(userData);
      setIsProfileLoaded(true);
    } else {
      logout();
    }
  });

  const contextValue: AuthContextType = {
    user,
    isLoggedIn: isProfileLoaded && Boolean(user?.getIdToken()),
    isProfileLoaded,
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
