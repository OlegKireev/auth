import { useResetPasswordForm, useResetPasswordMutation } from '../../model';
import styles from './styles.module.scss';
import { SuccessMessage } from './SuccessMessage';
import {
  Button,
  Input,
  FormLabel,
  FormControl,
  FormError,
  Link,
} from '@/shared';

export const ResetPasswordForm = function ResetPasswordForm() {
  const mutation = useResetPasswordMutation();
  const { form, handleInputChange } = useResetPasswordForm({ mutation });

  return (
    <div className={styles.resetPasswordForm}>
      {!mutation.data ? (
        <>
          <h1 className={styles.title}>Reset password</h1>
          <form
            action="/reset-password"
            method="POST"
            onSubmit={form.handleSubmit}
            noValidate
          >
            <FormControl
              isInvalid={
                Boolean(form.errors.username) && Boolean(form.touched.username)
              }
            >
              <FormLabel
                htmlFor="reset-password-username-input"
                className={styles.label}
              >
                E-mail
              </FormLabel>
              <Input
                type="email"
                name="username"
                id="reset-password-username-input"
                placeholder="john@gmail.com"
                autoComplete="username"
                hasError={
                  Boolean(form.errors.username) &&
                  Boolean(form.touched.username)
                }
                className={styles.input}
                value={form.values.username}
                onBlur={form.handleBlur}
                onChange={handleInputChange}
              />
              <FormError className={styles.inputError}>
                {form.errors.username}
              </FormError>
            </FormControl>
            {form.status && (
              <span className={styles.formError}>{form.status}</span>
            )}
            <Button
              isWide
              isLoading={mutation.isLoading}
              type="submit"
              className={styles.submit}
            >
              Reset password
            </Button>
            <span className={styles.signUpText}>
              Already a member?{' '}
              <Link
                to="/login"
                className={styles.modeLink}
              >
                Login now
              </Link>
            </span>
          </form>
        </>
      ) : (
        <SuccessMessage />
      )}
    </div>
  );
};
