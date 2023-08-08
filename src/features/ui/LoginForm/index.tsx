import styles from './styles.module.scss';
import { Toggle, Button, Input, Label, Link } from '@/shared';

export const LoginForm = function LoginForm() {
  return (
    <form
      className={styles.loginForm}
      action="/sign-in"
      method="POST"
    >
      <h1 className={styles.title}>Login form</h1>
      <Toggle
        className={styles.toggle}
        isWide
        items={[
          { children: 'Login', id: 'login' },
          { children: 'Signup', id: 'signup' },
        ]}
        defaultIndex={0}
      />
      <Label
        htmlFor="sign-in-username-input"
        className={styles.label}
      >
        E-mail
      </Label>
      <Input
        type="text"
        name="username"
        id="sign-in-login-input"
        placeholder="john@gmail.com"
        autoComplete="username"
        className={styles.input}
      />
      <Label
        htmlFor="sign-in-password-input"
        className={styles.label}
      >
        Password
      </Label>
      <Input
        type="password"
        name="password"
        id="sign-in-password-input"
        autoComplete="current-password"
        className={styles.input}
      />
      <Link
        href="/forgot-password"
        className={styles.forgotLink}
      >
        Forgot password?
      </Link>
      <Button
        isWide
        type="submit"
        className={styles.submit}
      >
        Login
      </Button>
      <span className={styles.signUpText}>
        Not a member? <Link href="sign-up">Signup now</Link>
      </span>
    </form>
  );
};
