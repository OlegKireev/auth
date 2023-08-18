import { type User } from '../../types';
import styles from './styles.module.scss';
import { Button } from '@/shared';

interface UserMenuProps {
  user: User | null;
  onLogoutClick: () => Promise<void>;
}

export const UserMenu = function UserMenu({
  user,
  onLogoutClick,
}: UserMenuProps) {
  return (
    <div className={styles.userMenu}>
      {user?.email || 'Не вошел'}
      <Button onClick={onLogoutClick}>Logout</Button>
    </div>
  );
};
