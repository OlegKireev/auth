import { useEffect, type FormEventHandler } from 'react';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../model';
import { type LoginServiceParams } from '../../api';
import styles from './styles.module.scss';
import { Toggle, Button, Input, Label, Link } from '@/shared';

export const LoginForm = function LoginForm() {
  const { mutate, isLoading, data } = useLoginMutation();
  const navigate = useNavigate();

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const authParams: LoginServiceParams = {
      username: String(formData.get('username')),
      password: String(formData.get('password')),
    };
    const response = await mutate(authParams);
    setTimeout(() => {
      navigate('/', { state: { hasAnimation: true } });
    }, 500);
    // eslint-disable-next-line no-console
    console.log(response);
  };

  return (
    <div
      className={clsx(styles.loginForm, {
        [styles.success]: Boolean(data?.token),
      })}
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
      <form
        action="/sign-in"
        method="POST"
        onSubmit={handleFormSubmit}
      >
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
          isLoading={isLoading}
          type="submit"
          className={styles.submit}
        >
          Login
        </Button>
        <span className={styles.signUpText}>
          Not a member? <Link href="sign-up">Signup now</Link>
        </span>
      </form>
    </div>
  );
};
