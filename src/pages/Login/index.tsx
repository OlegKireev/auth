import styles from './styles.module.scss';
import { LoginForm } from '@/features/ui/LoginForm';

export const LoginPage = function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <LoginForm />
    </div>
  );
};
