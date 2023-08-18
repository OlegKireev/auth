import styles from './styles.module.scss';
import { LoginForm } from '@/features/auth';
import { useAuthContext } from '@/entities/user';
import { Page } from '@/shared';

export const LoginPage = function LoginPage() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="public"
    >
      <div className={styles.loginPage}>
        <LoginForm mode="login" />
      </div>
    </Page>
  );
};
