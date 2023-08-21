import 'normalize.css';
import './global.css';
import { RouterProvider, QueryClientProvider } from './providers';
import './providers/firebase';
import { AuthProvider } from '@/entities/user';

export const App = function App() {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </QueryClientProvider>
  );
};
