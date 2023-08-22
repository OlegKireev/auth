import { LoginForm } from '@/features/auth';
import { useAuthContext } from '@/entities/user';
import { Page } from '@/shared';

export const SignUpPage = function SignUpPage() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="public"
    >
      <LoginForm mode="sign-up" />
    </Page>
  );
};
