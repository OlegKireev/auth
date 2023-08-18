import { LogOutIcon } from 'lucide-react';
import { type User } from '../../types';
import styles from './styles.module.scss';
import { Menu, MenuButton, MenuItem, MenuList } from '@/shared';

interface UserMenuProps {
  user: User | null;
  onLogoutClick: () => Promise<void>;
}

export const UserMenu = function UserMenu({
  user,
  onLogoutClick,
}: UserMenuProps) {
  return (
    <Menu>
      <MenuButton>{user?.email || 'Не вошел'}</MenuButton>
      <MenuList>
        <MenuItem
          className={styles.menuItem}
          onClick={onLogoutClick}
        >
          Logout <LogOutIcon size={16} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
