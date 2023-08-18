import { type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useMenuContext } from './MenuContext';

interface MenuButtonProps {
  children: ReactNode;
}

export const MenuButton = function MenuButton({ children }: MenuButtonProps) {
  const { isOpen, handleMenuToggle } = useMenuContext();

  return (
    <button
      className={styles.menuButton}
      type="button"
      aria-expanded={isOpen}
      onClick={handleMenuToggle}
    >
      {children}
      <ChevronDown
        size={16}
        className={clsx(styles.menuButtonChevron, {
          [styles.rotate]: isOpen,
        })}
      />
    </button>
  );
};
