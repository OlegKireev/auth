import styles from './styles.module.scss';
import { LoginForm } from '@/features/auth';

export const SignUpPage = function SignUpPage() {
  return (
    <div className={styles.loginPage}>
      <LoginForm mode="sign-up" />
    </div>
  );
};
