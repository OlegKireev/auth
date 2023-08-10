import styles from './styles.module.scss';
import { LoginForm } from '@/features/auth';

export const LoginPage = function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <LoginForm mode="login" />
    </div>
  );
};
