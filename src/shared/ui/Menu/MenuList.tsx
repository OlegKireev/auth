import { type MouseEvent, type HTMLProps, type ReactNode } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useMenuContext } from './MenuContext';
import { useAccessability } from './useAccessability';

interface MenuListProps {
  children: ReactNode;
}

export const MenuList = function MenuList({
  children,
  ...rest
}: MenuListProps & HTMLProps<HTMLUListElement>) {
  const { id, listRef, isOpen, resetFocusedItem } = useMenuContext();

  useAccessability();

  const handleMouseLeave = (e: MouseEvent<HTMLUListElement>) => {
    if (rest.onMouseLeave) {
      resetFocusedItem();
      rest.onMouseLeave(e);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ReactFocusLock returnFocus>
      <ul
        {...rest}
        className={clsx(styles.menuList, rest.className)}
        role="menu"
        aria-orientation="vertical"
        ref={listRef}
        onMouseLeave={handleMouseLeave}
        id={`menu-list-${id}`}
      >
        {children}
      </ul>
    </ReactFocusLock>
  );
};
