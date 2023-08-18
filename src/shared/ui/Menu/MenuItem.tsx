import { useRef, type ReactNode, type HTMLProps, type MouseEvent } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useMenuContext } from './MenuContext';

interface MenuItemProps {
  children: ReactNode;
}

export const MenuItem = function MenuItem({
  children,
  ...rest
}: MenuItemProps & HTMLProps<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null);
  const { setFocusedItem, handleMenuClose } = useMenuContext();

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    if (ref.current) {
      setFocusedItem(ref.current);
    }
    if (rest.onMouseEnter) {
      rest.onMouseEnter(e);
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    handleMenuClose();
    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return (
    <li role="menuitem">
      <button
        {...rest}
        className={clsx(styles.menuItemButton, rest.className)}
        type="button"
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
};
