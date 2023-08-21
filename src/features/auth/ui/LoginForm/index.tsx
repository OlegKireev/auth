import { useNavigate } from 'react-router-dom';
import { useLoginMutation, useSignUpMutation, useLoginForm } from '../../model';
import styles from './styles.module.scss';
import { useAuthContext } from '@/entities/user';
import {
  Toggle,
  Button,
  Input,
  FormLabel,
  FormControl,
  FormError,
  Link,
} from '@/shared';

interface LoginFormProps {
  mode: 'login' | 'sign-up';
}

export const LoginForm = function LoginForm({ mode }: LoginFormProps) {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const loginMutation = useLoginMutation({
    onSuccess: async (userResponse) => {
      await login(userResponse);
      navigate('/');
    },
  });

  const signUpMutation = useSignUpMutation({
    onSuccess: async (userResponse) => {
      await login(userResponse);
      navigate('/');
    },
  });

  const isLoginMode = mode === 'login';
  const mutation = isLoginMode ? loginMutation : signUpMutation;
  const oppositeMode = isLoginMode ? 'sign-up' : 'login';

  const { form, handleInputChange } = useLoginForm({ mutation });

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
        onSubmit={form.handleSubmit}
        noValidate
      >
        <FormControl
          isInvalid={
            Boolean(form.errors.username) && Boolean(form.touched.username)
          }
        >
          <FormLabel
            htmlFor="sign-in-username-input"
            className={styles.label}
          >
            E-mail
          </FormLabel>
          <Input
            type="email"
            name="username"
            id="sign-in-username-input"
            placeholder="john@gmail.com"
            autoComplete="username"
            hasError={
              Boolean(form.errors.username) && Boolean(form.touched.username)
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
        <FormControl
          isInvalid={
            Boolean(form.errors.password) && Boolean(form.touched.password)
          }
        >
          <FormLabel
            htmlFor="sign-in-password-input"
            className={styles.label}
          >
            Password
          </FormLabel>
          <Input
            type="password"
            name="password"
            id="sign-in-password-input"
            autoComplete="current-password"
            autoCapitalize="off"
            hasError={
              Boolean(form.errors.password) && Boolean(form.touched.password)
            }
            className={styles.input}
            value={form.values.password}
            onBlur={form.handleBlur}
            onChange={handleInputChange}
          />
          <FormError className={styles.inputError}>
            {form.errors.password}
          </FormError>
        </FormControl>
        {form.status && <span className={styles.formError}>{form.status}</span>}
        <Link
          to="/reset-password"
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
