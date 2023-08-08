import styles from './styles.module.scss';
import { Input } from '@/shared';

export const LoginForm = function LoginForm() {
  return (
    <form className={styles.loginForm}>
      <Input />
    </form>
  );
};
