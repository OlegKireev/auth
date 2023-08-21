import styles from './styles.module.scss';
import { ResetPasswordForm } from '@/features/auth';
import { useAuthContext } from '@/entities/user';
import { Page } from '@/shared';

export const ResetPasswordPage = function ResetPasswordPage() {
  const { isLoggedIn, isProfileLoaded } = useAuthContext();

  return (
    <Page
      isLoggedIn={isLoggedIn}
      isLoading={!isProfileLoaded}
      type="public"
    >
      <div className={styles.page}>
        <ResetPasswordForm />
      </div>
    </Page>
  );
};
