import { type MouseEvent, type HTMLProps, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useMenuContext } from './MenuContext';

interface MenuButtonProps {
  children: ReactNode;
}

export const MenuButton = function MenuButton({
  children,
  ...rest
}: MenuButtonProps & HTMLProps<HTMLButtonElement>) {
  const { buttonRef, id, isOpen, handleMenuToggle } = useMenuContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    handleMenuToggle();
    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return (
    <button
      {...rest}
      className={clsx(styles.menuButton, rest.className)}
      type="button"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      id={`menu-button-${id}`}
      aria-controls={`menu-list-${id}`}
      ref={buttonRef}
      onClick={handleClick}
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
