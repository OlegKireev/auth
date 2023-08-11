import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { LoginForm } from '@/features/auth';

export const SignUpPage = function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUpSuccess = () => {
    navigate('/', { state: { hasAnimation: true } });
  };

  return (
    <div className={styles.loginPage}>
      <LoginForm
        mode="sign-up"
        onSuccess={handleSignUpSuccess}
      />
    </div>
  );
};
