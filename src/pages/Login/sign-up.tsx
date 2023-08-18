import styles from './styles.module.scss';
import { LoginForm, useAuthContext } from '@/features/auth';
import { Page } from '@/shared';

export const SignUpPage = function SignUpPage() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="public"
    >
      <div className={styles.loginPage}>
        <LoginForm mode="sign-up" />
      </div>
    </Page>
  );
};
