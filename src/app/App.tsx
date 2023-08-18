import 'normalize.css';
import './global.css';
import { RouterProvider } from './providers';
import './providers/firebase';
import { AuthProvider } from '@/entities/user';

export const App = function App() {
  return (
    <AuthProvider>
      <RouterProvider />
    </AuthProvider>
  );
};
