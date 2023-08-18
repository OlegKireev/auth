import { type ReactNode } from 'react';
import styles from './styles.module.scss';
import { useMenuContext } from './MenuContext';

interface MenuListProps {
  children: ReactNode;
}

export const MenuList = function MenuList({ children }: MenuListProps) {
  const { isOpen } = useMenuContext();

  if (!isOpen) {
    return null;
  }

  return (
    <ul
      className={styles.menuList}
      role="menu"
      aria-orientation="vertical"
    >
      {children}
    </ul>
  );
};
