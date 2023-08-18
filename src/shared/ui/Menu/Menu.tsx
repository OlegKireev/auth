import { type ReactNode } from 'react';
import styles from './styles.module.scss';
import { MenuContextProvider } from './MenuContext';

interface MenuProps {
  children: ReactNode;
}

export const Menu = function Menu({ children }: MenuProps) {
  return (
    <MenuContextProvider>
      <div className={styles.menu}>{children}</div>
    </MenuContextProvider>
  );
};
