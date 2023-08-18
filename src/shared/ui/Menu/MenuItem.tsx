import { type ReactNode } from 'react';
import styles from './styles.module.scss';

interface MenuItemProps {
  children: ReactNode;
}

export const MenuItem = function MenuItem({ children }: MenuItemProps) {
  return (
    <li role="menuitem">
      <button
        className={styles.menuItemButton}
        type="button"
      >
        {children}
      </button>
    </li>
  );
};
