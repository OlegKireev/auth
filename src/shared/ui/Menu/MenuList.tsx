import { type ReactNode } from 'react';
import styles from './styles.module.scss';
import { useMenuContext } from './MenuContext';
import { useAccessability } from './useAccessability';

interface MenuListProps {
  children: ReactNode;
}

export const MenuList = function MenuList({ children }: MenuListProps) {
  const { id, listRef, isOpen } = useMenuContext();

  useAccessability();

  if (!isOpen) {
    return null;
  }

  return (
    <ul
      className={styles.menuList}
      role="menu"
      aria-orientation="vertical"
      ref={listRef}
      id={`menu-list-${id}`}
    >
      {children}
    </ul>
  );
};
