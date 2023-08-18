import { type HTMLProps, type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { MenuContextProvider } from './MenuContext';

interface MenuProps {
  children: ReactNode;
}

export const Menu = function Menu({
  children,
  ...rest
}: MenuProps & HTMLProps<HTMLDivElement>) {
  return (
    <MenuContextProvider>
      <div
        {...rest}
        className={clsx(styles.menu, rest.className)}
      >
        {children}
      </div>
    </MenuContextProvider>
  );
};
