import { MailCheckIcon } from 'lucide-react';
import styles from './styles.module.scss';
import { Button } from '@/shared';

export const SuccessMessage = function SuccessMessage() {
  return (
    <div className={styles.successWrapper}>
      <MailCheckIcon
        className={styles.successIcon}
        size={32}
      />
      <h1 className={styles.successTitle}>Password reset email sent</h1>
      <p className={styles.successMessage}>
        Follow the directions in the email to reset your password
      </p>
      <Button
        href="/login"
        isWide
      >
        login
      </Button>
    </div>
  );
};
