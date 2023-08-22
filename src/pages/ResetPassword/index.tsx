import { ResetPasswordForm } from '@/features/auth';
import { useAuthContext } from '@/entities/user';
import { Page } from '@/shared';

export const ResetPasswordPage = function ResetPasswordPage() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Page
      isLoggedIn={isLoggedIn}
      type="public"
    >
      <ResetPasswordForm />
    </Page>
  );
};
