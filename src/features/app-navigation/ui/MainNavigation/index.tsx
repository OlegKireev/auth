import { useNavigate } from 'react-router-dom';
import { LINKS } from '../../model';
import styles from './styles.module.scss';
import { UserMenu, useAuthContext } from '@/entities/user';
import { Navigation } from '@/shared';

export const MainNavigation = function MainNavigation() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className={styles.mainNavigation}>
      <Navigation links={LINKS} />
      <UserMenu
        user={user}
        onLogoutClick={handleLogout}
      />
    </div>
  );
};
