import styles from './styles.module.scss';
import { LoginForm, useAuthContext } from '@/features/auth';
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
