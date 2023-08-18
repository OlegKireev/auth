import { useState, type FormEventHandler, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useAuthContext,
  useLoginMutation,
  useSignUpMutation,
} from '../../model';
import { type LoginServiceParams } from '../../api';
import styles from './styles.module.scss';
import { Toggle, Button, Input, Label, Link } from '@/shared';

interface LoginFormProps {
  mode: 'login' | 'sign-up';
}

export const LoginForm = function LoginForm({ mode }: LoginFormProps) {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormTouching, setIsFormTouching] = useState(false);

  const loginMutation = useLoginMutation({
    onSettled: () => {
      setIsFormTouching(false);
    },
  });

  const signUpMutation = useSignUpMutation({
    onSettled: () => {
      setIsFormTouching(false);
    },
  });

  const isLoginMode = mode === 'login';
  const mutation = isLoginMode ? loginMutation : signUpMutation;
  const oppositeMode = isLoginMode ? 'sign-up' : 'login';
  const shouldShowError = mutation.isError && !isFormTouching;

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
    const response = await mutation.mutate(authParams);

    if (response.uid) {
      await login(response);
      navigate('/');
    }
  };

  return (
    <div className={styles.loginForm}>
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
          type="email"
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
        {shouldShowError && mutation.error && (
          <span className={styles.formError}>{mutation.error.message}</span>
        )}
        <Link
          to="/forgot-password"
          className={styles.forgotLink}
        >
          Forgot password?
        </Link>
        <Button
          isWide
          isLoading={mutation.isLoading}
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
