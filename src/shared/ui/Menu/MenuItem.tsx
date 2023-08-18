import {
  useRef,
  type ReactNode,
  type HTMLProps,
  type MouseEvent,
  type KeyboardEvent,
} from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useMenuContext } from './MenuContext';

interface MenuItemProps {
  children: ReactNode;
  as?: 'link' | 'button';
  to?: string;
}

export const MenuItem = function MenuItem({
  children,
  as = 'button',
  to,
  ...rest
}: MenuItemProps & HTMLProps<HTMLButtonElement | HTMLAnchorElement>) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const isLink = as === 'link';

  const { setFocusedItem, handleMenuClose } = useMenuContext();

  const handleMouseEnter = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (buttonRef.current) {
      setFocusedItem(buttonRef.current);
    }
    if (anchorRef.current) {
      setFocusedItem(anchorRef.current);
    }
    if (rest.onMouseEnter) {
      rest.onMouseEnter(e);
    }
  };

  const handleClick = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    handleMenuClose();
    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  const handleLinkSpaceKeydown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.target instanceof HTMLElement) {
      if (e.code === 'Space') {
        e.target.click();
      }
    }
  };

  return (
    <li role="menuitem">
      {isLink ? (
        <Link
          to={to || '/'}
          className={clsx(styles.menuItemButton, rest.className)}
          ref={anchorRef}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          onKeyDown={handleLinkSpaceKeydown}
        >
          {children}
        </Link>
      ) : (
        <button
          {...rest}
          className={clsx(styles.menuItemButton, rest.className)}
          type="button"
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
        >
          {children}
        </button>
      )}
    </li>
  );
};
