import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { LoginForm } from '@/features/auth';

export const LoginPage = function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/', { state: { hasAnimation: true } });
  };

  return (
    <div className={styles.loginPage}>
      <LoginForm
        mode="login"
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
};
