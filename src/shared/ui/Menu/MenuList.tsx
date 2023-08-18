import { type ReactNode } from 'react';
import ReactFocusLock from 'react-focus-lock';
import styles from './styles.module.scss';
import { useMenuContext } from './MenuContext';
import { useAccessability } from './useAccessability';

interface MenuListProps {
  children: ReactNode;
}

export const MenuList = function MenuList({ children }: MenuListProps) {
  const { id, listRef, isOpen, resetFocusedItem } = useMenuContext();

  useAccessability();

  if (!isOpen) {
    return null;
  }

  return (
    <ReactFocusLock returnFocus>
      <ul
        className={styles.menuList}
        role="menu"
        aria-orientation="vertical"
        ref={listRef}
        onMouseLeave={resetFocusedItem}
        id={`menu-list-${id}`}
      >
        {children}
      </ul>
    </ReactFocusLock>
  );
};
