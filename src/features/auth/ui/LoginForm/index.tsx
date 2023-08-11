import { useState, type FormEventHandler, type ChangeEvent } from 'react';
import { clsx } from 'clsx';
import { useLoginMutation } from '../../model';
import { type LoginServiceParams } from '../../api';
import styles from './styles.module.scss';
import { Toggle, Button, Input, Label, Link } from '@/shared';

interface LoginFormProps {
  mode: 'login' | 'sign-up';
  onSuccess: () => void;
}

export const LoginForm = function LoginForm({
  mode,
  onSuccess,
}: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormTouching, setIsFormTouching] = useState(false);

  const { mutate, data, isLoading, isError, error } = useLoginMutation({
    onSettled: () => {
      setIsFormTouching(false);
    },
  });

  const isLoginMode = mode === 'login';
  const oppositeMode = isLoginMode ? 'sign-up' : 'login';
  const shouldShowError = isError && !isFormTouching;

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFormTouching(true);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFormTouching(true);
    setPassword(e.target.value);
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const authParams: LoginServiceParams = {
      username: String(formData.get('username')),
      password: String(formData.get('password')),
    };
    const response = await mutate(authParams);

    if (response.token) {
      // Wait for animation ends
      setTimeout(() => {
        onSuccess();
      }, 500);
    }
  };

  return (
    <div
      className={clsx(styles.loginForm, {
        [styles.success]: Boolean(data?.token),
      })}
    >
      <h1 className={styles.title}>{mode} form</h1>
      <Toggle
        className={styles.toggle}
        isWide
        items={[
          { label: 'Login', id: 'login', href: '/login' },
          { label: 'Sign-up', id: 'sign-up', href: '/sign-up' },
        ]}
      />
      <form
        action={`/${mode}`}
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
          hasError={shouldShowError}
          className={styles.input}
          value={username}
          onChange={handleUsernameChange}
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
          autoCapitalize="off"
          hasError={shouldShowError}
          className={styles.input}
          value={password}
          onChange={handlePasswordChange}
        />
        {shouldShowError && error && (
          <span className={styles.formError}>{error.message}</span>
        )}
        <Link
          to="/forgot-password"
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
          {mode}
        </Button>
        <span className={styles.signUpText}>
          {isLoginMode ? 'Not' : 'Already'} a member?{' '}
          <Link
            to={`/${oppositeMode}`}
            className={styles.modeLink}
          >
            {oppositeMode} now
          </Link>
        </span>
      </form>
    </div>
  );
};
