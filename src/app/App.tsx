import 'normalize.css';
import './global.css';
import { RouterProvider } from './providers';
import './providers/firebase';
import { AuthProvider } from '@/features/auth';

export const App = function App() {
  return (
    <AuthProvider>
      <RouterProvider />
    </AuthProvider>
  );
};
